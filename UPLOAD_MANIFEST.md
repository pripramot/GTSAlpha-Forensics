# รายการไฟล์ที่เกี่ยวข้อง — ส่งขึ้น Supabase (โฟลเดอร์ GTSAlpha-Forensics / โปรแกรม Unicorn)

**ชื่อโฟลเดอร์:** GTSAlpha-Forensics  
**ชื่อโปรแกรม:** Unicorn  

ใช้รายการนี้เมื่ออัปโหลดหรือส่งไฟล์ที่เกี่ยวข้องกับโครงการขึ้น Supabase (หรือที่เก็บอื่น)

---

## โครงสร้างและไฟล์ที่ส่งขึ้นไป

```
GTSAlpha-Forensics/
├── PROJECT_IDENTITY.txt       ← ชื่อโฟลเดอร์/โปรแกรม (อ้างอิง)
├── README.md
├── CLAUDE.md
├── .env.example               ← ตัวแปร Supabase (ไม่ส่ง .env จริง)
├── docker-compose.yml
├── UPLOAD_MANIFEST.md         ← ไฟล์นี้
├── SUPABASE_ACCOUNT_REQUEST.md  ← คำขอบัญชี (ส่งให้ผู้จัดการ/บิลลิ่ง)
│
├── electron-app/                 ← แอป Electron นำเข้าเนื้อหา Unicorn (npm install && npm start)
│   ├── main.js, preload.js, index.html, renderer.js
│   ├── package.json, README.md
│   └── (node_modules ติดตั้งด้วย npm install)
│
├── supabase/
│   ├── README.md
│   ├── SUPABASE_ASSISTANT_CONTEXT.md   ← วางให้ผู้ช่วย Supabase สร้างทรัพยากร
│   ├── SUPABASE_ASSISTANT_PROMPT.txt   ← Super Admin อัตโนมัติ (วางในช่องสนทนา)
│   └── (migrations / config เมื่อมี)
│
└── Unicorn/                   ← โปรแกรม Unicorn
    ├── README.md
    ├── README_TH.txt
    ├── MEMORY_REFERENCE.md
    ├── INSTALLATION_SUMMARY.txt
    │
    ├── database/
    │   └── gts_schema.sql     ← Schema หลักสำหรับ Unicorn
    │
    ├── docs/
    │   ├── Unicorn_GtsAlpha_Manual.md
    │   ├── Database_Setup.md
    │   ├── การเข้าถึงอุปกรณ์ที่เสียบ_ตัวอย่างจริง.md
    │   ├── แนวทาง_แตกไฟล์_ติดตั้ง_ส่งมอบ.md
    │   ├── เส้นทางเอกสาร_แชร์และเครื่องมือ.md
    │   ├── ฝังโมเดลพิเศษ_แนวทางผู้ใช้.md
    │   ├── gts-wallet_v2.html
    │   └── การทดสอบทั้งหมด_อุปกรณ์ที่เสียบ.docx
    │
    └── scripts/
        ├── check_usb_devices.ps1
        ├── extract_aceso_from_share.ps1
        ├── generate_test_docx.js
        └── แตกไฟล์_ติดตั้ง_จากแชร์.bat
```

---

## สรุปไฟล์ที่เกี่ยวข้อง (สำหรับส่งขึ้นไป)

| ประเภท | ไฟล์/โฟลเดอร์ |
|--------|----------------|
| ตัวตนโครงการ | PROJECT_IDENTITY.txt, README.md, CLAUDE.md |
| Supabase | .env.example, supabase/* (รวม SUPABASE_ASSISTANT_CONTEXT.md, SUPABASE_ASSISTANT_PROMPT.txt) |
| Docker | docker-compose.yml |
| Unicorn (โปรแกรม) | Unicorn/ ทั้งโฟลเดอร์ — database/gts_schema.sql, docs/, scripts/, README*, MEMORY_REFERENCE.md |
| คำขอบัญชี | SUPABASE_ACCOUNT_REQUEST.md |

---

**หมายเหตุ:** ไม่ส่ง `.env` (มีความลับ) — ใช้ `.env.example` เป็นตัวอย่างเท่านั้น
