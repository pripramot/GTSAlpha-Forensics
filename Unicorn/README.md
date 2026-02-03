# Unicorn (โครงการย่อย GTSAlpha-Forensics)

**Unicorn** = ACESO และชุดเครื่องมือที่แตกออกจาก **AcesoSetup.exe**

---

## โครงสร้างในโฟลเดอร์นี้

```
Unicorn/
├── docs/                    ← คู่มือ Unicorn, การทดสอบ, แนวทาง
│   ├── Unicorn_GtsAlpha_Manual.md
│   ├── การเข้าถึงอุปกรณ์ที่เสียบ_ตัวอย่างจริง.md
│   ├── การทดสอบทั้งหมด_อุปกรณ์ที่เสียบ.docx
│   └── ...
├── scripts/                 ← สคริปต์ตรวจ USB, แตกไฟล์จากแชร์, สร้าง .docx
├── database/                ← gts_schema.sql (PostgreSQL/Supabase)
├── README_TH.txt            ← คู่มือการใช้งาน (จาก ACESO)
├── INSTALLATION_SUMMARY.txt ← สรุปการติดตั้ง (จาก ACESO)
└── MEMORY_REFERENCE.md      ← บันทึกความทรงจำสำหรับ AI/เครื่อง
```

---

## เอกสารหลัก

- **Unicorn_GtsAlpha_Manual.md** — คู่มือระบบ Unicorn (Section 6: ความสามารถ, Section 7: การเข้าถึงเมื่อไม่มีรหัส)
- **การเข้าถึงอุปกรณ์ที่เสียบ_ตัวอย่างจริง.md** — ตัวอย่างผลตรวจ USB จริง
- **การทดสอบทั้งหมด_อุปกรณ์ที่เสียบ.docx** — เอกสารการทดสอบสำหรับผู้บริหาร

---

## โปรแกรมหลัก (ACESO.exe) และไดรฟ์

ไฟล์ขนาดใหญ่ (ACESO.exe, ID, ID_x64 ฯลฯ) ไม่ได้ copy มาอยู่ในโฟลเดอร์นี้ — ได้จาก:

- แตกจาก **AcesoSetup.exe** (ดู docs/แนวทาง_แตกไฟล์_ติดตั้ง_ส่งมอบ.md)
- หรือแชร์ `\\Ihc-qutjv3999\d` (ดู docs/เส้นทางเอกสาร_แชร์และเครื่องมือ.md)
