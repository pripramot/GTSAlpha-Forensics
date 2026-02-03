# คุณสมบัติ Unicorn — สำหรับวางแผนส่วนหน้าและออกแบบหน้าจอ

เอกสารนี้รวบรวมคุณสมบัติ Unicorn เพื่อใช้วางแผน UI/UX และออกแบบหน้าจอ (Dashboard, เมนู, การ์ด, ฟีเจอร์ต่อหน้า)

---

## 1. ภาพรวมระบบ (ใช้ทำ Hero / หน้าแรก)

| รายการ | เนื้อหา |
|--------|---------|
| **ชื่อระบบ** | Unicorn / GtsAlpha |
| **บทบาท** | ศูนย์บัญชาการหลัก (HQ Console) สำหรับผู้ปฏิบัติงาน (Investigator) — ระบบปฏิบัติการข่าวกรองและสอดแนมแบบรวมศูนย์ |
| **ส่วนประกอบหลัก** | (1) HQ Console / Unicorn Dashboard (2) GtsAgent / The Implant (3) AI Core / ACESO Brain |
| **ข้อความแนะนำ** | "เริ่มต้นใช้งาน Unicorn" — ก้าวแรกสู่การสร้างสรรค์ผลงานสำหรับแพลตฟอร์ม GTSAlpha-Forensics |

---

## 2. ฟีเจอร์หลักสำหรับออกแบบเมนู/หน้าจอ

### 2.1 หน้าแรก / Dashboard

- **Status Panel:** แสดงสถานะ Online ของ HQ (หรือ OFFLINE — ตามข้อจำกัดแอป)
- **Targets Map:** แผนที่แสดงตำแหน่งเป้าหมายแบบ Real-time (ถ้ารองรับ)
- **Live Feed:** หน้าจอสรุปข้อมูลที่ Agent ส่งเข้ามาล่าสุด
- **การ์ดแพลตฟอร์ม:** iOS Forensics, Android Forensics, PC/Desktop, Cloud/Server — แต่ละการ์ดมีสถานะ (Online/Offline) และปุ่มเริ่มงาน

### 2.2 รายงานสรุป (Summary Report)

- รายงานสรุปการปฏิบัติงาน / Case
- อ้างอิงตาราง `compliance_cases`, `audit_logs` (ดูจาก schema)

### 2.3 เครื่องมือ (Tools)

- **GET_INFO:** ดึงข้อมูล System Info, Network IP, User Logged in
- **GPS_TRACK:** ขอพิกัด Location ล่าสุด
- **FILE_PULL:** สั่งดึงไฟล์ (Documents, Logs) มาที่ HQ
- **REMOTE_SHELL:** ช่องทางส่งคำสั่ง CMD/PowerShell (ระดับสูง)
- **เครื่องมือ Forensic แสดงเป็นการ์ด:** File Parser, Memory Analyzer, Log Decoder, Timeline Builder, Hash Validator, File Extractor — แต่ละการ์ดมีชื่อ, คำอธิบายสั้น, ปุ่มจัดการ

### 2.4 หัวข้อและเทคโนโลยี (Topics & Technology)

- iOS / Android / Cloud — รุ่นที่รองรับ, ความสามารถ (Full File System, Keychain, App Downgrade ฯลฯ)
- อ้างอิง Section 6 Manual: รองรับมากกว่า 45,000 รุ่น, iOS 7–17.4+, Android 4.4–15

### 2.5 กราฟสถานะ / สถิติ (Status Graph)

- กราฟหรือตัวเลข: จำนวนเป้าหมายออนไลน์, จำนวน Case, กิจกรรมล่าสุด
- อ้างอิง `audit_logs`, `devices` (status)

### 2.6 สนับสนุน (Support)

- **เปิดฟอรัม** (ลิงก์หรือเปิดในแอป)
- **ติดต่อ/ Feedback** (ฟอร์มหรือลิงก์)
- **รายงานปัญหา** (ฟอร์มหรือลิงก์)
- แหล่งข้อมูล: คู่มือ Unicorn, วิธีการใช้งาน, FAQ

### 2.7 บัญชี (Account)

- การเข้าสู่ระบบ (Super Admin / User / Auditor)
- อ้างอิง Auth + `profiles` (role)

### 2.8 โปรไฟล์ / โครงการ (Profile / Projects)

- โปรไฟล์ผู้ใช้, โครงการ (Case) ที่เกี่ยวข้อง
- อ้างอิง `users` / `profiles`, `compliance_cases`

### 2.9 กิจกรรม (Activity)

- บันทึกกิจกรรม / Audit — อ่านจาก `audit_logs` (เฉพาะ super_admin, auditor)
- แสดงรายการ: actor, action, target_resource, timestamp

---

## 3. ความสามารถตามอุปกรณ์ (ใช้ทำการ์ด/แท็บแพลตฟอร์ม)

| แพลตฟอร์ม | ความสามารถสั้น ๆ | ใช้แสดงใน UI |
|------------|------------------|--------------|
| **iOS** | iPhone 5s–15 Pro Max, iOS 7–17.4+; Full File System, Keychain, iCloud Backup, Wi‑Fi Sync, OTA Forensics | การ์ด "iOS Forensics" + รายละเอียดในหน้าหลัก |
| **Android** | Samsung, Huawei, Oppo, Vivo, Xiaomi ฯลฯ; Android 4.4–15; Physical Extraction, App Downgrade (Line/WhatsApp), Secure Folder Bypass | การ์ด "Android Forensics" |
| **PC/Desktop** | GET_INFO, GPS_TRACK, FILE_PULL, REMOTE_SHELL ผ่าน Agent | การ์ด "PC / Desktop" |
| **Cloud/Server** | Google Drive, iCloud, OneDrive, Dropbox, Facebook, Instagram — ใช้ Token จากอุปกรณ์ | การ์ด "Cloud / Server" |

---

## 4. การเข้าถึงเมื่อไม่มีรหัสปลดล็อก (Section 7 — ใช้ทำหน้าคู่มือ/ช่วยเหลือ)

- **iOS:** Lockdown/Pairing, BFU/checkra1n (5s–X)
- **Android:** EDL (Emergency Download)
- **ทั่วไป:** เครื่องมือเชิงพาณิชย์ (Passware Kit Mobile, Magnet Graykey, Oxygen Forensic Detective)
- แสดงเป็น: หน้าคู่มือ, ลิงก์เอกสาร, หรือ accordion ใน Support

---

## 5. เอกสารและทรัพยากร (ใช้ทำการ์ด "เอกสารล่าสุด" / เมนูเอกสาร)

- **Unicorn_GtsAlpha_Manual.md** — คู่มือระบบ (Section 6–7)
- **การเข้าถึงอุปกรณ์ที่เสียบ_ตัวอย่างจริง.md** — ตัวอย่างผลตรวจ USB
- **การทดสอบทั้งหมด_อุปกรณ์ที่เสียบ.docx** — เอกสารการทดสอบสำหรับผู้บริหาร
- **แนวทาง_แตกไฟล์_ติดตั้ง_ส่งมอบ.md** — การติดตั้ง/ส่งมอบ
- **Database_Setup.md**, **เส้นทางเอกสาร_แชร์และเครื่องมือ.md** ฯลฯ

---

## 6. สรุปหน้าจอที่แนะนำ (สำหรับออกแบบ)

| หน้าจอ | องค์ประกอบหลัก |
|--------|-----------------|
| **AppLayout** | Sidebar ซ้าย (เมนู) + Top bar (ชื่อ Unicorn, OFFLINE, ผู้ใช้) + พื้นที่หลัก |
| **Dashboard / หน้าแรก** | Hero "เริ่มต้นใช้งาน Unicorn" + การ์ด 3 (เอกสารล่าสุด, วิดีโอการอบรม, ถามคำถาม/สนับสนุน) + การ์ดแพลตฟอร์ม 4 (iOS, Android, PC, Cloud) |
| **รายงานสรุป** | รายการ Case / รายงาน, filter, search |
| **เครื่องมือ** | การ์ดเครื่องมือ (File Parser, Log Decoder, Memory Analyzer ฯลฯ) + search |
| **หัวข้อและเทคโนโลยี** | เนื้อหาความสามารถตามแพลตฟอร์ม (iOS/Android/Cloud) |
| **กราฟสถานะ** | กราฟ/สถิติ (Targets, Cases, Activity) |
| **สนับสนุน** | การ์ด 3 (เปิดฟอรัม, ติดต่อ, รายงานปัญหา) + แหล่งข้อมูล/FAQ |
| **บัญชี** | เข้าสู่ระบบ / โปรไฟล์ (ตาม role) |
| **โปรไฟล์/โครงการ** | รายการ Case, โปรไฟล์ผู้ใช้ |
| **กิจกรรม** | รายการ audit_logs (อ่านอย่างเดียว) |

---

**อ้างอิง:** Unicorn_GtsAlpha_Manual.md, MEMORY_REFERENCE.md, gts_schema.sql
