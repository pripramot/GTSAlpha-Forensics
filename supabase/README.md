# Supabase — GTSAlpha-Forensics

การตั้งค่า Supabase สำหรับโครงการ **GTSAlpha-Forensics** (เชื่อมเฉพาะ Supabase ก่อน; บัญชีอื่นจะแจ้งทีหลัง)

- สร้างโปรเจกต์บน Supabase ชื่อ **GTSAlpha-Forensics**
- ใช้ schema จาก `../Unicorn/database/gts_schema.sql` (ปรับให้ตรงกับ Supabase SQL ถ้าจำเป็น)
- ใส่ URL และ Key ใน `.env` ตาม `.env.example`

---

## สำหรับ AI — Supabase MCP

- ใช้ **Supabase MCP** (server: `user-supabase`) เมื่อทำงานกับฐานข้อมูล/API ของ GTSAlpha-Forensics
- ก่อนเรียก MCP tool ใดๆ ให้อ่าน schema ของ tool จาก `mcps/user-supabase/tools/` ก่อน
- ใช้สำหรับ: query, schema, migrations, tables ที่เกี่ยวกับ Unicorn / GTSAlpha-Forensics

---

## Storage หลักฐาน (Evidence)

- สเปกและนโยบาย RLS ที่ Supabase สร้างไว้: ดู **[EVIDENCE_STORAGE_SPEC.md](EVIDENCE_STORAGE_SPEC.md)**
- บัคเก็ต: Evidence | เส้นทาง: `{user.id}/{caseId}/{filename}` | ตารางเมตา: `public.evidence_uploads`
