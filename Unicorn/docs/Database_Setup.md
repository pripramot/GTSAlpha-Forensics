# 🗄️ Database & Infrastructure Setup (Docker/Local)

**Unicorn/GtsAlpha** ใช้ฐานข้อมูล PostgreSQL ระดับ Enterprise ที่รันบน Docker เพื่อความปลอดภัยและการจัดการที่ง่ายครับ (เหมือน Supabase แบบ Local)

## 1. Prerequisites (สิ่งที่ต้องมี)

* **Docker Desktop** (ต้องติดตั้งบนเครื่อง)
* Git (Optional)

## 2. Installation (การติดตั้ง)

ไฟล์ `docker-compose.yml` ถูกเตรียมไว้ให้แล้วในโฟลเดอร์โปรเจกต์

1. เปิด CMD / Terminal ที่โฟลเดอร์ `ACESO`
2. รันคำสั่ง:

    ```cmd
    docker-compose up -d
    ```

## 3. Database Details (ข้อมูลการเชื่อมต่อ)

* **Host:** `localhost`
* **Port:** `5432`
* **Database:** `unicorn_gts`
* **User:** `super_admin`
* **Password:** `secret_unicorn_password`

## 4. Web GUI (Adminer)

เรามีหน้าจัดการ Database แบบ Web-based (คล้าย phpMyAdmin/Supabase Studio)

* เข้าใช้งานที่: [http://localhost:8080](http://localhost:8080)
* **System:** PostgreSQL
* **Server:** `db`
* **Username:** `super_admin`
* **Password:** `secret_unicorn_password`

## 5. Security Architecture

* **RLS (Row Level Security):** เปิดใช้งานตาม `gts_schema.sql`
* **Isolation:** รันใน Container แยกจากเครื่อง Host
* **Persistence:** ข้อมูลถูกเก็บไว้ในโฟลเดอร์ `postgres_data` (ไม่หายเมื่อปิด Docker)
