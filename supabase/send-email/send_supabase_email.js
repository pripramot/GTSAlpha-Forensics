/**
 * ส่งอีเมลคำขอบัญชี Supabase ผ่าน Gmail SMTP
 * ต้องตั้งค่า: .env (GMAIL_USER, GMAIL_APP_PASSWORD, SEND_TO)
 * รัน: npm install nodemailer && node send_supabase_email.js
 */

const fs = require('fs');
const path = require('path');

// โหลด .env แบบง่าย (ไม่มี dotenv ก็ได้)
function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  if (!fs.existsSync(envPath)) {
    console.error('ไม่มีไฟล์ .env — คัดลอกจาก .env.example แล้วกรอก GMAIL_USER, GMAIL_APP_PASSWORD, SEND_TO');
    process.exit(1);
  }
  const env = {};
  fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
    const m = line.match(/^\s*([^#=]+)=(.*)$/);
    if (m) env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
  });
  return env;
}

const env = loadEnv();
const GMAIL_USER = env.GMAIL_USER;
const GMAIL_APP_PASSWORD = env.GMAIL_APP_PASSWORD;
const SEND_TO = env.SEND_TO || 'support@supabase.io';

if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
  console.error('กรุณาตั้งค่า GMAIL_USER และ GMAIL_APP_PASSWORD ใน .env');
  process.exit(1);
}

const subject = 'Account setup request: Pro plan, 1 paid project + 2 free projects (gittisakwannakeeree@gmail.com)';
const body = `Dear Supabase Team,

We would like to request the following account setup (approved and ready to proceed):

ACCOUNT
- Email: gittisakwannakeeree@gmail.com
- Plan: Pro (Paid)

PROJECTS
- Paid projects: 1
- Free projects: 2

PROJECT REFERENCE
- Folder/Project name: GTSAlpha-Forensics
- App name: Unicorn (mobile forensics / ACESO toolset)
- Use case: Backend (Auth, Database, RLS) for GTSAlpha-Forensics (Unicorn)

Please configure the account and projects as above. We are ready to upload project files and proceed.

Thank you.`;

async function main() {
  let nodemailer;
  try {
    nodemailer = require('nodemailer');
  } catch (e) {
    console.error('ติดตั้ง nodemailer ก่อน: npm install nodemailer');
    process.exit(1);
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: GMAIL_USER,
      to: SEND_TO,
      subject,
      text: body,
    });
    console.log('ส่งอีเมลสำเร็จ ไปยัง:', SEND_TO);
  } catch (err) {
    console.error('ส่งอีเมลไม่สำเร็จ:', err.message);
    if (err.code === 'EAUTH') {
      console.error('ตรวจสอบ GMAIL_USER และ GMAIL_APP_PASSWORD (ใช้รหัสผ่านแอป 16 ตัว จาก Google Account)');
    }
    process.exit(1);
  }
}

main();
