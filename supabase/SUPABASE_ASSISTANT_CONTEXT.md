# เอกสารสำหรับวางให้ผู้ช่วย Supabase — สร้างทรัพยากรที่เกี่ยวข้อง

**วิธีใช้:** คัดลอกข้อความด้านล่าง (ตั้งแต่ "---" จนจบ) ไปวางในช่องสนทนาของ Supabase Assistant แล้วส่ง เพื่อให้สร้างทรัพยากร (ตาราง, RLS, Auth, Trigger ฯลฯ) ให้โครงการ

---

## บริบทโครงการ

### โครงการที่ทำอยู่ก่อนหน้า (แม่แบบ/ที่มา)

- **ชื่อ:** GTS Forensics — ระบบติดตามยานพาหนะและนิติวิทยาศาสตร์ (ป.ป.ส.)
- **สแต็ก:** TypeScript, Node.js, Express.js, **Supabase**, Firebase
- **ฟีเจอร์:** Kalman Filter ทำนายตำแหน่ง, ติดตามรถ, OCR (Tesseract), YOLO, PDF/รายงาน
- **โครงสร้าง:** `src/` (api, cli, database, server, tracking, …), โปรเจกต์ย่อย ACESO, ACESO_Web, gts-platform
- **ฐานข้อมูล (ตัวอย่าง):** มี schema สำหรับ vehicles, vehicle_locations, tracking_sessions (PostGIS) ใช้กับ Supabase

### โครงการปัจจุบัน (ที่ต้องการให้ Supabase สร้างทรัพยากร)

- **ชื่อโปรเจกต์ Supabase:** **GTSAlpha-Forensics**
- **โครงการย่อย:** **Unicorn** (= ACESO / ชุดเครื่องมือจาก AcesoSetup.exe — งานนิติวิทยาศาสตร์มือถือ)
- **การเชื่อมต่อ:** ใช้เฉพาะ **Supabase** (และ Docker สำหรับ local dev); บัญชีอื่นจะแจ้งทีหลัง
- **ความต้องการ:** ต้องการให้ Supabase เป็น backend หลักสำหรับ Unicorn — Auth, ฐานข้อมูล, RLS, Audit

---

## สิ่งที่ต้องการให้ผู้ช่วย Supabase สร้าง/ตั้งค่า

### 1. Authentication + บทบาท (Role)

- ใช้ **Supabase Auth** (Email/Password หรือที่เหมาะสม)
- มีบทบาท (role): **user**, **super_admin**, **auditor**
- **Super Admin อัตโนมัติ:** อีเมลต่อไปนี้เมื่อ **ลงทะเบียน (sign up)** ให้ได้สิทธิ์ **super_admin** ทันที  
  - gittisakwannakeeree@gmail.com  
  - phongwut.w@gmail.com  
  - director@gtsalphamcp.com  
  - info@gtsalphamcp.com  
- แนะนำ: ตาราง `public.profiles` (หรือเทียบเท่า) ที่ลิงก์กับ `auth.users` และมีคอลัมน์ `role` (หรือใช้ custom claim) + Trigger/Edge Function หลัง sign up เพื่อตั้ง `role = 'super_admin'` ตามรายชื่ออีเมลด้านบน

### 2. ตารางและ Schema (Unicorn / GTSAlpha-Forensics)

สร้างตารางและนโยบาย RLS ตามความสามารถของ Supabase (ใช้ `auth.uid()`, ไม่ใช้ `auth.role()` แบบไม่มีอยู่ — ให้ใช้การเช็คจาก `profiles.role` หรือ custom claim แทน):

**ตารางที่ต้องการ:**

| ตาราง | คำอธิบายสั้น |
|--------|----------------|
| **profiles** | สร้างจาก auth.users (id, email, role, department, created_at, …) — role: user | super_admin | auditor |
| **devices** | device_id, user_id (FK → auth.users หรือ profiles), device_name, os_info, bot_token, last_heartbeat, status, metadata (JSONB), created_at |
| **compliance_cases** | case_id, creator_id, target_user_id, case_number (UNIQUE), description, status (open/closed/archived), created_at |
| **audit_logs** | log_id (serial), actor_id, action, target_resource, details (JSONB), ip_address, timestamp — ไม่ลบ/ไม่แก้จากแอป (อ่านอย่างเดียวสำหรับ user ปกติ) |

**RLS (Row Level Security):**

- **profiles:** user เห็นเฉพาะแถวของตัวเอง; super_admin เห็นทั้งหมด
- **devices:** user เห็น/แก้เฉพาะ device ของตัวเอง (user_id = auth.uid())
- **compliance_cases:** ตามบทบาท (เช่น user เห็นเฉพาะที่เกี่ยวข้องกับตัวเอง, super_admin/auditor เห็นทั้งหมด) — รายละเอียดให้ Supabase Assistant ออกแบบให้สอดคล้องกับ role
- **audit_logs:** เฉพาะ super_admin และ auditor อ่านได้; ไม่ให้ user ปกติลบ/อัปเดต

**Trigger (ถ้าต้องการ):**

- หลัง sign up: อัปเดตหรือ insert แถวใน `profiles` และถ้าอีเมลอยู่ในรายชื่อ Super Admin ให้ตั้ง `role = 'super_admin'`
- (ตัวเลือก) Trigger บันทึกการเปลี่ยนแปลงสำคัญใน `compliance_cases` ลง `audit_logs` (actor_id = auth.uid(), action, target_resource, details)

### 3. สรุปคำขอ

1. สร้างโปรเจกต์/ทรัพยากรสำหรับ **GTSAlpha-Forensics** (ชื่อโปรเจกต์ใน Supabase: GTSAlpha-Forensics)  
2. ตั้งค่า Auth และตาราง **profiles** ที่มี **role** (user / super_admin / auditor)  
3. ทำให้อีเมล 4 รายการด้านบนได้ **super_admin อัตโนมัติ** เมื่อลงทะเบียน  
4. สร้างตาราง **devices**, **compliance_cases**, **audit_logs** พร้อม FK และ RLS ตามด้านบน  
5. ถ้ามี Trigger สำหรับ audit หรือการตั้ง role หลัง sign up — ให้สร้างและอธิบายสั้นๆ  

ถ้ามี extension ที่จำเป็น (เช่น PostGIS สำหรับโครงการเดิม) ให้แจ้งไว้ — สำหรับ Unicorn ระยะแรกอาจยังไม่จำเป็น

---

**โปรเจกต์:** GTSAlpha-Forensics (Unicorn)  
**อ้างอิง schema ต้นฉบับ:** Unicorn/database/gts_schema.sql (รูปแบบ PostgreSQL; ให้ปรับเป็น Supabase ให้ใช้ auth.uid() และ profiles ที่ลิงก์ auth.users)
