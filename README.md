# GTSAlpha-Forensics

**ชื่อโฟลเดอร์:** GTSAlpha-Forensics  
**ชื่อโปรแกรม:** Unicorn  

**โครงการ:** Project GTSAlpha-Forensics MCP  
**โครงการย่อย Unicorn** = ACESO / ชุดเครื่องมือที่แตกจาก AcesoSetup.exe

โปรเจกต์นี้แยกออกมาเป็น **Local อิสระ** — เชื่อมเฉพาะ **Supabase / Docker** ก่อน (บัญชีอื่นจะแจ้งทีหลัง)

---

## โครงสร้าง

```
GTSAlpha-Forensics/
├── PROJECT_IDENTITY.txt     ← ชื่อโฟลเดอร์/โปรแกรม (อ้างอิง)
├── UPLOAD_MANIFEST.md       ← รายการไฟล์ที่ส่งขึ้น Supabase
├── SUPABASE_ACCOUNT_REQUEST.md  ← คำขอบัญชี (gittisakwannakeeree@gmail.com)
├── Unicorn/                 ← โปรแกรม Unicorn (เอกสาร, สคริปต์, คู่มือ, database)
│   ├── docs/
│   ├── scripts/
│   ├── database/
│   └── ...
├── docker-compose.yml       ← Docker (PostgreSQL, Adminer)
├── electron-app/            ← แอป Electron นำเข้าเนื้อหา Unicorn (npm install && npm start)
├── supabase/                ← การตั้งค่า + เอกสารสำหรับผู้ช่วย Supabase
├── .env.example             ← ตัวแปรแวดล้อม (Supabase เท่านั้นก่อน)
└── README.md
```

---

## Unicorn = ACESO

- **Unicorn** = ACESO และชุดเครื่องมือที่แตกออกจาก **AcesoSetup.exe**
- AcesoSetup.exe = ตัวติดตั้ง (~2 GB); สิ่งที่แตกออกมา (ACESO.exe, ID, ID_x64 ฯลฯ) = Unicorn
- เอกสารและสคริปต์ที่เกี่ยวข้องอยู่ใต้ `Unicorn/`

---

## การเชื่อมต่อ (ปัจจุบัน)

- **Supabase:** ใช้เมื่อตั้งค่าโปรเจกต์ Supabase ชื่อ **GTSAlpha-Forensics** (ดู `.env.example` และโฟลเดอร์ `supabase/`)
- **Docker:** รัน `docker-compose up -d` สำหรับ PostgreSQL + Adminer (ฐานข้อมูล Unicorn)
- บัญชีอื่น (Google Cloud, GitHub ฯลฯ) จะแจ้งทีหลัง

---

## วิธีรัน Docker (Local)

```bash
cd GTSAlpha-Forensics
docker-compose up -d
```

- PostgreSQL: `localhost:5432` (DB: unicorn_gts)
- Adminer: http://localhost:8080
