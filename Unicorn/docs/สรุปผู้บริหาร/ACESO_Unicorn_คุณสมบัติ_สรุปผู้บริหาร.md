# ACESO / Unicorn — สรุปคุณสมบัติและความสามารถ
## เอกสารสรุปสำหรับผู้บริหาร

**โครงการ:** GTSAlpha-Forensics (Unicorn)  
**เอกสารอ้างอิง:** Unicorn GtsAlpha Manual, คุณสมบัติ Unicorn สำหรับออกแบบหน้าจอ, MEMORY_REFERENCE  
**วัตถุประสงค์:** สรุปความสามารถของระบบ ACESO/Unicorn ด้าน Android และ iOS เพื่อการนำเสนอและวางแผนการทยอยนำเข้าข้อมูลหลักฐาน

---

## สรุปสำหรับผู้บริหาร

ACESO/Unicorn เป็นระบบศูนย์บัญชาการหลัก (HQ Console) สำหรับงานนิติวิทยาศาสตร์ดิจิทัล รองรับการดึงหลักฐานจากอุปกรณ์ **Android** และ **iOS** มากกว่า 45,000 รุ่น ครอบคลุมข้อมูลโซเชียล (Facebook, Line, Instagram, WhatsApp), ข้อความ, รูปภาพ, เบอร์ติดต่อ และอีเมล รวมถึงการเข้าถึงเมื่อไม่มีรหัสปลดล็อก (ภายใต้เครื่องมือและกรอบกฎหมายที่กำหนด) เอกสารนี้สรุปเป็นตารางเพื่อให้มองเห็นภาพชัดและนำไปใช้ในการทยอยนำเข้าหลักฐานที่ Lab ได้ตรงกับความสามารถของระบบ

---

## ตารางที่ 1 — ข้อมูลหลักฐานที่ดึงได้ (ตามประเภทข้อมูล)

| หมวด | รายการ | Android | iOS | หมายเหตุ |
|------|--------|:-------:|:---:|----------|
| โซเชียล | Facebook | ✅ | ✅ | ใช้ Token จากอุปกรณ์ (Cloud Services) |
| โซเชียล | Instagram | ✅ | ✅ | ใช้ Token จากอุปกรณ์ |
| โซเชียล | Line | ✅ | ✅ | Android: App Downgrade; หลังเข้าเครื่องได้ดึงได้ทั้งสองแพลตฟอร์ม |
| โซเชียล | WhatsApp | ✅ | — | Android: App Downgrade (ไม่ต้อง Root) |
| ข้อความ | Messages / แชท | ✅ | ✅ | Full File System / Logical Extraction, App Downgrade |
| รูปภาพ | รูปภาพในอุปกรณ์ | ✅ | ✅ | Full File System, Logical Extraction, iCloud Backup (iOS) |
| รูปภาพ/สื่อ | ภาพในอดีต / Photo Library | ✅ | ✅ | จากอุปกรณ์และ Backup (iCloud / การสำรองข้อมูล) |
| ติดต่อ | เบอร์ติดต่อ (Contacts) | ✅ | ✅ | Full File System / Logical, Keychain (iOS) |
| อีเมล | อีเมล | ✅ | ✅ | หลังเข้าเครื่องได้ตามความสามารถของระบบ |
| Cloud | Google Drive, iCloud, OneDrive, Dropbox | ✅ | ✅ | ใช้ Token ที่ดึงจากอุปกรณ์ |

---

## ตารางที่ 2 — ความสามารถแพลตฟอร์ม (Android / iOS)

| ความสามารถ | Android | iOS | รายละเอียดย่อ |
|------------|:-------:|:---:|----------------|
| Full File System Extraction | — | ✅ | ดึงข้อมูลทั้งหมดรวมไฟล์ระบบ |
| Logical Extraction | ✅ | ✅ | ดึงข้อมูลระดับ logical |
| Physical Extraction (Bit-by-Bit) | ✅ | — | Samsung Exynos/Qualcomm |
| Keychain Decryption | — | ✅ | Password/Token ในเครื่อง |
| iCloud Backup Extraction | — | ✅ | ต้องมี iCloud Token หรือ Apple ID/Pass |
| iTunes Wi‑Fi Sync | — | ✅ | เมื่อเคย Sync over Wi‑Fi กับเครื่องนี้ |
| OTA Forensics | — | ✅ | ดักจับเครือข่ายใน LAN |
| App Downgrade (Line/WhatsApp) | ✅ | — | ถอดรหัสแชทโดยไม่ต้อง Root |
| Secure Folder Bypass | ✅ (Samsung) | — | เจาะ Secure Folder |
| Cloud Token Access | — | ✅ | ดึง Token สำหรับ iCloud Backup |

**ช่วงรุ่นที่รองรับ (อ้างอิงคู่มือ):**  
- **iOS:** iPhone 5s–15 Pro Max, iOS 7.0–17.4+  
- **Android:** Samsung, Huawei, Oppo, Vivo, Xiaomi, Motorola, Sony, Pixel — Android 4.4–15  

---

## ตารางที่ 3 — การเข้าถึงเมื่อไม่มีรหัสปลดล็อกหน้าจอ

| แพลตฟอร์ม | วิธีที่อ้างอิงในเอกสาร | ข้อจำกัด/เงื่อนไข |
|-----------|------------------------|-------------------|
| iOS | Lockdown / Pairing | ใช้ไฟล์ pairing จาก PC/Mac ที่เคยเชื่อมกับอุปกรณ์ |
| iOS | BFU / checkra1n (checkm8) | รุ่น iPhone 5s–X |
| Android | EDL (Emergency Download) | บาง OEM (เช่น Qualcomm) |
| ทั่วไป | เครื่องมือเชิงพาณิชย์ | Passware Kit Mobile, Magnet Graykey, Oxygen Forensic Detective — ภายใต้กรอบกฎหมายและอำนาจที่ได้รับมอบหมาย |

---

## สรุปการทยอยนำเข้าหลักฐาน

| ลำดับที่ | ประเภทข้อมูล | Android | iOS | หมายเหตุสำหรับ Lab |
|:--------:|---------------|:-------:|:---:|---------------------|
| 1 | โซเชียล (Facebook, Line, Instagram, WhatsApp) | ✅ | ✅ | หลังเข้าเครื่อง/ได้ Token แล้วดึงได้ตามตารางที่ 1 |
| 2 | ข้อความ / แชท | ✅ | ✅ | ใช้ Full File System / Logical / App Downgrade |
| 3 | รูปภาพ / ภาพในอดีต | ✅ | ✅ | จากอุปกรณ์และ Backup |
| 4 | เบอร์ติดต่อ | ✅ | ✅ | จาก Contacts / Keychain |
| 5 | อีเมล | ✅ | ✅ | หลังเข้าเครื่องได้ |
| 6 | Cloud (Drive, iCloud, OneDrive, Dropbox) | ✅ | ✅ | ใช้ Token จากอุปกรณ์ |

---

## เอกสารเดิมที่อ้างอิง

รายการเอกสารต้นฉบับที่ใช้สรุปในเอกสารนี้ — เก็บไว้ในโฟลเดอร์ `Unicorn/docs/` หรือขอจากทีมเพื่ออ้างอิง:

| ลำดับ | ชื่อเอกสาร | ที่เก็บ (สัมพันธ์กับ Unicorn/docs/) |
|:----:|------------|-------------------------------------|
| 1 | Unicorn_GtsAlpha_Manual.md | ../Unicorn_GtsAlpha_Manual.md |
| 2 | คุณสมบัติ_Unicorn_สำหรับออกแบบหน้าจอ.md | ../คุณสมบัติ_Unicorn_สำหรับออกแบบหน้าจอ.md |
| 3 | MEMORY_REFERENCE.md | ../../MEMORY_REFERENCE.md |
| 4 | การเข้าถึงอุปกรณ์ที่เสียบ_ตัวอย่างจริง.md | ../การเข้าถึงอุปกรณ์ที่เสียบ_ตัวอย่างจริง.md |
| 5 | แนวทาง_แตกไฟล์_ติดตั้ง_ส่งมอบ.md | ../แนวทาง_แตกไฟล์_ติดตั้ง_ส่งมอบ.md |
| 6 | Database_Setup.md | ../Database_Setup.md |
| 7 | เส้นทางเอกสาร_แชร์และเครื่องมือ.md | ../เส้นทางเอกสาร_แชร์และเครื่องมือ.md |

*(รายการเต็มอยู่ในไฟล์ `เอกสารเดิมที่อ้างอิง.md` ในโฟลเดอร์นี้)*

---

*จัดทำเพื่อใช้ในการนำเสนอผู้บริหารและวางแผนการทยอยนำเข้าหลักฐานที่ Lab*
