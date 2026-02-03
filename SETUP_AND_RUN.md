# GTSAlpha-Forensics (Unicorn) — ติดตั้งและรัน

โฟลเดอร์งาน: `C:\Users\usEr\Project\GTSAlpha-Forensics`

---

## การผูก UX/UI (Electron + Renderer)

- **Electron (electron-app)** เปิดหน้าต่าง แล้วโหลด UI จาก **Renderer (React/Vite)**  
- **โหมดพัฒนา:** Electron โหลด `http://localhost:5173` (ต้องรัน Vite dev server ก่อน)  
- **โหมด production:** Electron โหลด `renderer/dist/index.html` (ต้อง build renderer ก่อน)

---

## ขั้นตอนติดตั้ง (ครั้งแรก)

```powershell
cd C:\Users\usEr\Project\GTSAlpha-Forensics

# 1. สร้าง state สำหรับ Dashboard (platforms.state.json ต้องมาจาก Python เท่านั้น)
python scripts/build_platforms_state.py

# 2. ติดตั้ง dependencies ของ React/Vite
cd renderer
npm install
cd ..

# 3. ติดตั้ง dependencies ของ Electron
cd electron-app
npm install
cd ..
```

---

## รันโหมดพัฒนา (Dev)

ต้องรัน **สองเทอร์มินัล**:

**เทอร์มินัล 1 — Vite (React)**  
```powershell
cd C:\Users\usEr\Project\GTSAlpha-Forensics\renderer
npm run dev
```
รอจนเห็น `Local: http://localhost:5173`

**เทอร์มินัล 2 — Electron**  
```powershell
cd C:\Users\usEr\Project\GTSAlpha-Forensics\electron-app
npm start
```

Electron จะเปิดหน้าต่างและโหลด UI จาก port 5173 (Dashboard, แพลฟอรม, แดชบอร์ด)

---

## รันโหมด Production (Build แล้วเปิด Electron)

```powershell
cd C:\Users\usEr\Project\GTSAlpha-Forensics

# 1. สร้าง state ล่าสุด
python scripts/build_platforms_state.py

# 2. Build React
cd renderer
npm run build
cd ..

# 3. เปิด Electron (โหลดจาก renderer/dist)
cd electron-app
npm start
```

---

## สกรีนจุดบกพร่อง (ล่าสุด)

| รายการ              | สถานะ |
|---------------------|--------|
| renderer npm install| ผ่าน   |
| renderer npm run build | ผ่าน |
| renderer npm run lint  | ผ่าน |
| platforms.state.json (Python) | ผ่าน |
| electron-app npm install | ผ่าน (มี 1 moderate vulnerability ใน audit) |
| โหลด UI จาก dist (base: './') | ถูกต้องสำหรับ file:// |

**หมายเหตุ:** ถ้าต้องการแก้ vulnerability ใน electron-app ให้รัน `cd electron-app && npm audit` แล้วปฏิบัติตามคำแนะนำ
