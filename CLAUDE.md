# GTSAlpha-Forensics — คำสั่งโครงการ (สำหรับ AI / นักพัฒนา)

## ขอบเขตโครงการ

- **ชื่อโครงการ:** GTSAlpha-Forensics  
- **โครงการย่อย:** Unicorn (= ACESO / ชุดเครื่องมือจาก AcesoSetup.exe)  
- **สถานะ:** แยกออกจากโปรเจกต์อื่น — **Local อิสระ**  
- **การเชื่อมต่อ (ปัจจุบัน):** เฉพาะ **Supabase** และ **Docker**  
- **บัญชี/บริการอื่น:** จะแจ้งทีหลัง

---

## โครงสร้างที่เก็บ (Storage)

```
GTSAlpha-Forensics/
├── Unicorn/           ← เอกสาร, สคริปต์, database schema (Unicorn = ACESO)
├── supabase/          ← การตั้งค่า Supabase
├── docker-compose.yml ← PostgreSQL + Adminer (Local)
├── .env.example       ← ตัวแปร Supabase (คัดลอกเป็น .env)
└── README.md
```

---

## สิ่งที่นำเข้ามาแล้ว (เฉพาะ Unicorn = ACESO)

- `Unicorn/docs/` — คู่มือ, ตัวอย่างการเข้าถึงอุปกรณ์, แนวทางติดตั้ง/ส่งมอบ  
- `Unicorn/scripts/` — ตรวจ USB, แตกไฟล์จากแชร์, สร้าง .docx  
- `Unicorn/database/` — `gts_schema.sql`  
- `Unicorn/MEMORY_REFERENCE.md` — ชุดความทรงจำสำหรับ AI  
- README / INSTALLATION_SUMMARY ใน Unicorn

---

## ข้อจำกัดการเชื่อมต่อ

- ใช้ **Supabase** (โครงการ GTSAlpha-Forensics) ตาม `.env`  
- ใช้ **Docker** สำหรับ PostgreSQL/Adminer ตาม `docker-compose.yml`  
- **ไม่** ผูกกับโปรเจกต์อื่น (ACESO, ACESO_LOCAL, gts-platform ฯลฯ) ในโฟลเดอร์นี้  
- บัญชีอื่น (Google Cloud, GitHub ฯลฯ) จะแจ้งทีหลัง

---

## Supabase MCP (สำหรับ AI)

- โปรเจกต์นี้มี **Supabase MCP** (user-supabase) เปิดใช้งาน
- **AI ต้องใช้ MCP:** เมื่อทำงานกับ Supabase (query, schema, migrations, tables) ให้เรียกใช้ tools จาก MCP server ชื่อ **user-supabase**
- **ก่อนเรียก tool:** ต้องอ่าน schema/descriptor ของ tool นั้นจากโฟลเดอร์ `mcps/user-supabase/` ก่อน (required parameters, types)
- ใช้ Supabase MCP สำหรับ: สร้าง/แก้ schema, query ข้อมูล, จัดการ tables, migrations ที่เกี่ยวกับ GTSAlpha-Forensics / Unicorn

---

## MCP Servers อ้างอิง (แจ้งแล้ว)

- **BoonTing-Files** — filesystem: `C:\Users\usEr\Desktop\Case-Files`
- **BoonTing-Forensics** — filesystem: `C:\Users\usEr\Desktop\gts-forensics`
- **BoonTing-System** — uv + Python (Cursor Touch): `ant.dir.cursortouch.windows-mcp` → main.py

รายละเอียดเต็ม: `MCP_SERVERS_REFERENCE.json` และ `MCP_SERVERS_REFERENCE.md`
