@echo off
chcp 65001 >nul
title ACESO - แตกไฟล์จากแชร์ แล้วติดตั้ง
echo.
echo === ACESO: แตกไฟล์จากแชร์ \\Ihc-qutjv3999\d ===
echo.
echo สคริปต์จะ:
echo   1. Copy AcesoSetup.exe จากแชร์ไป D:\ (ถ้ายังไม่มี)
echo   2. แตกไฟล์ด้วย 7-Zip ไป D:\AcesoExtracted (ถ้ามี 7-Zip)
echo.
echo คู่มือแนวทาง (แตกไฟล์-ติดตั้ง-ส่งมอบ):
echo   ACESO\docs\แนวทาง_แตกไฟล์_ติดตั้ง_ส่งมอบ.md
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0extract_aceso_from_share.ps1"
echo.
echo กดปุ่มใดๆ เพื่อปิด...
pause >nul
