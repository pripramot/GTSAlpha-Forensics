# GTSAlpha-Forensics Unicorn — Electron App

แอป Electron นำเข้าและแสดงเนื้อหาเกี่ยวกับโครงการ Unicorn (เอกสาร, README, Memory Reference, docs/)

## วิธีรัน

```bash
cd GTSAlpha-Forensics/electron-app
npm install
npm start
```

## โครงสร้าง

- `main.js` — กระบวนการหลัก, อ่านไฟล์จากโฟลเดอร์ `../Unicorn`
- `preload.js` — ส่ง API `unicorn.getContent()`, `unicorn.getDocContent(filename)` ไปยัง renderer
- `index.html` + `renderer.js` — UI: เกี่ยวกับโครงการ, README, Memory Reference, คู่มือ TH, สรุปการติดตั้ง, รายการเอกสารใน Unicorn/docs (คลิกโหลด)

## เนื้อหาที่นำเข้า

- โฟลเดอร์ Unicorn (ระดับเดียวกับ electron-app): README.md, MEMORY_REFERENCE.md, README_TH.txt, INSTALLATION_SUMMARY.txt
- Unicorn/docs/*.md, *.txt, *.html — โหลดเมื่อคลิกชื่อไฟล์
