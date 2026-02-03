╔══════════════════════════════════════════════════════════════╗
║         ACESO FORENSIC SOFTWARE - คู่มือการใช้งาน           ║
║              สำหรับ Windows 11 (Compatibility Mode)          ║
╚══════════════════════════════════════════════════════════════╝

📌 เกี่ยวกับโปรแกรม
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACESO เป็นซอฟต์แวร์ Digital Forensics ระดับมืออาชีพสำหรับการ
ดึงข้อมูลและวิเคราะห์อุปกรณ์มือถือ, SIM Card และอุปกรณ์พกพา

🔧 ความต้องการของระบบ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Windows 11 (รองรับผ่าน Compatibility Mode)
✅ Windows 10 (รองรับเต็มรูปแบบ)
✅ HASP USB Dongle (License Key - จำเป็น)
✅ Visual C++ Redistributable (ติดตั้งแล้ว)
✅ สิทธิ์ Administrator

📂 โครงสร้างโฟลเดอร์
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACESO/
├── ACESO.exe                    ← โปรแกรมหลัก
├── Launch_ACESO.bat             ← Launcher Script
├── Launch ACESO.lnk             ← Shortcut (แนะนำ)
├── haspclnt.dll                 ← HASP License DLL
├── ID/                          ← ไฟล์และ Drivers สำหรับอุปกรณ์
├── ID_x64/                      ← เครื่องมือสำหรับ x64
├── TMP/                         ← ไฟล์ชั่วคราวและ Dependencies
├── WD/                          ← Working Directory
├── PF/                          ← Platform Files
└── RV/                          ← Report Viewer

🚀 วิธีการใช้งาน
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

วิธีที่ 1: ใช้ Shortcut (แนะนำ)
─────────────────────────────
1. เสียบ HASP USB Dongle เข้ากับคอมพิวเตอร์
2. คลิกขวาที่ "Launch ACESO (Windows 10 Mode).lnk"
3. เลือก "Run as administrator"
4. รอโปรแกรมเปิด

วิธีที่ 2: ใช้ Batch File
─────────────────────────
1. เสียบ HASP USB Dongle เข้ากับคอมพิวเตอร์
2. คลิกขวาที่ "Launch_ACESO.bat"
3. เลือก "Run as administrator"

วิธีที่ 3: รันโปรแกรมโดยตรง
────────────────────────────
1. เสียบ HASP USB Dongle
2. คลิกขวาที่ "ACESO.exe"
3. เลือก Properties → Compatibility
4. ติ๊กถูก "Run this program in compatibility mode for:"
5. เลือก "Windows 10"
6. ติ๊กถูก "Run this program as an administrator"
7. คลิก Apply → OK
8. Double-click ACESO.exe เพื่อรัน

⚠️  ข้อควรระวัง
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
❗ HASP Dongle จำเป็นต้องเสียบตลอดเวลาที่ใช้งาน
❗ ต้องรันในฐานะ Administrator เสมอ
❗ อย่าลบหรือย้ายไฟล์ใน subfolder (ID, TMP, WD, etc.)
❗ ปิด Antivirus ชั่วคราวหากโปรแกรมถูกบล็อค

🔍 การแก้ปัญหา
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ปัญหา: โปรแกรมไม่เปิด
แก้ไข:
  → ตรวจสอบว่าเสียบ HASP Dongle แล้ว
  → รันในฐานะ Administrator
  → ติดตั้ง Visual C++ Redistributable ใหม่
  → ตรวจสอบ Windows Compatibility Mode

ปัญหา: "HASP not found" หรือ License Error
แก้ไข:
  → ตรวจสอบ HASP Dongle ต่ออยู่หรือไม่
  → ไปที่ Device Manager → ดู HASP HL devices
  → ติดตั้ง HASP drivers ใหม่:
     cd ID\Drivers\files
     DPInst.exe /q

ปัญหา: Network share \\Ihc-qutjv3999\d ไม่เชื่อมต่อ
แก้ไข:
  → ตรวจสอบว่าเครื่องที่แชร์เปิดอยู่
  → ตรวจสอบ network connectivity
  → แมป network drive ด้วยตัวเอง:
     net use Z: \\Ihc-qutjv3999\d /user:USERNAME PASSWORD

ปัญหา: Missing DLL Files
แก้ไข:
  → ติดตั้ง VC++ Redistributable:
     cd TMP\Redist
     vc_redist.x64.exe /quiet /norestart

📞 ข้อมูลเพิ่มเติม
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- คู่มือผู้ใช้งาน: ACESO Custom\ACESO User Guide Thai.pdf
- คู่มือภาษาอังกฤษ: ACESO Custom\ACESO User Guide.pdf
- รายการอุปกรณ์ที่รองรับ: ACESO Custom\ACESO Device List.pdf
- ฟีเจอร์ใหม่: ACESO Custom\Whats New.pdf

🔓 การเข้าถึงเครื่องเป้าหมายเมื่อไม่มีรหัสปลดล็อกหน้าจอ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- คู่มือขั้นตอนและแนวทาง: docs\Unicorn_GtsAlpha_Manual.md (Section 7)
- เครื่องมือ Forensic อ้างอิง:
  • Passware Kit Mobile - bypass/recover PIN, passcode; ดึงข้อมูลจากเครื่องล็อก
  • Magnet Graykey - การเข้าถึงและดึงข้อมูลมือถือสำหรับหน่วยงานบังคับใช้กฎหมาย
  • Oxygen Forensic Detective - screen lock bypass (เช่น Huawei Qualcomm EDL)
- ลิงก์คู่มือเครื่องมือ: ดูใน docs\Unicorn_GtsAlpha_Manual.md Section 7 (หัวข้อ เอกสารอ้างอิง / ลิงก์คู่มือเครื่องมือ)
- รายละเอียดปฏิบัติจริงขึ้นกับเครื่องมือและ SOP ของหน่วยงาน

🛠️  ข้อมูลทางเทคนิค
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
โปรแกรมนี้ถูกแตกและพัฒนาจาก AcesoSetup.exe (Windows 10)
เพื่อให้ทำงานบน Windows 11 ผ่าน Compatibility Mode

ติดตั้งเมื่อ: 23 มกราคม 2026
ขนาดโปรแกรม: ~2.3 GB
เวอร์ชัน: ตามที่ระบุใน installer

═══════════════════════════════════════════════════════════════
           สร้างโดย: Claude Code Assistant
           วันที่: 23 มกราคม 2026
═══════════════════════════════════════════════════════════════
