-- =============================================
-- Unicorn/GtsAlpha Secure Schema (PostgreSQL)
-- Version: 1.0.0
-- Security Level: MAXIMUM (RLS Enabled)
-- =============================================
-- 1. Enable Row Level Security on all tables by default
-- (Requires Postgres 15+, logic manually applied below)
-- =============================================
-- [TABLE] USERS
-- =============================================
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    -- Managed by Argon2
    role VARCHAR(20) CHECK (role IN ('user', 'super_admin', 'auditor')) DEFAULT 'user',
    department VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_login TIMESTAMP WITH TIME ZONE
);
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
-- POLICY: Users can only see their own profile
CREATE POLICY user_view_own ON users FOR
SELECT USING (auth.uid() = id);
-- POLICY: Super Admins can see everyone
CREATE POLICY admin_view_all ON users FOR ALL USING (auth.role() = 'super_admin');
-- =============================================
-- [TABLE] DEVICES
-- =============================================
CREATE TABLE devices (
    device_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    device_name VARCHAR(100),
    os_info VARCHAR(100),
    bot_token VARCHAR(64) UNIQUE,
    -- For Remote Control
    last_heartbeat TIMESTAMP WITH TIME ZONE,
    status VARCHAR(20) DEFAULT 'offline',
    metadata JSONB,
    -- Flexible storage for specs
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
ALTER TABLE devices ENABLE ROW LEVEL SECURITY;
-- POLICY: Users view/edit only their own devices
CREATE POLICY user_device_isolation ON devices FOR ALL USING (user_id = auth.uid());
-- =============================================
-- [TABLE] COMPLIANCE_CASES (Case Files)
-- =============================================
CREATE TABLE compliance_cases (
    case_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    creator_id UUID REFERENCES users(id),
    target_user_id UUID REFERENCES users(id),
    -- User being investigated
    case_number VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    status VARCHAR(20) DEFAULT 'open',
    -- open, closed, archived
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
ALTER TABLE compliance_cases ENABLE ROW LEVEL SECURITY;
-- =============================================
-- [TABLE] AUDIT_LOGS (Immutable)
-- =============================================
CREATE TABLE audit_logs (
    log_id BIGSERIAL PRIMARY KEY,
    actor_id UUID REFERENCES users(id),
    action VARCHAR(50) NOT NULL,
    -- e.g., 'VIEW_GPS', 'REMOTE_WIPE'
    target_resource VARCHAR(100),
    details JSONB,
    ip_address INET,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
-- Audit logs should never be deleted/updated by normal means
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY audit_view_admin ON audit_logs FOR
SELECT USING (auth.role() IN ('super_admin', 'auditor'));
-- =============================================
-- [FUNCTION] AUTO-AUDIT TRIGGER
-- =============================================
CREATE OR REPLACE FUNCTION log_sensitive_action() RETURNS TRIGGER AS $$ BEGIN
INSERT INTO audit_logs (actor_id, action, target_resource, details)
VALUES (
        auth.uid(),
        TG_OP,
        TG_TABLE_NAME,
        row_to_json(NEW)
    );
RETURN NEW;
END;
$$ LANGUAGE plpgsql;
-- Trigger audit on Sensitive Tables
CREATE TRIGGER audit_cases
AFTER
INSERT
    OR
UPDATE
    OR DELETE ON compliance_cases FOR EACH ROW EXECUTE FUNCTION log_sensitive_action();