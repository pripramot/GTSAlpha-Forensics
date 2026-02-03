# ACESO - ตรวจสอบอุปกรณ์ USB ที่เสียบ (read-only)
# ใช้สำหรับพิสูจน์ว่าเครื่องเห็นอุปกรณ์ที่เสียบแล้ว
# รัน: powershell -ExecutionPolicy Bypass -File check_usb_devices.ps1

Write-Host "=== ACESO: ตรวจสอบอุปกรณ์ USB ที่เสียบ ===" -ForegroundColor Cyan
Write-Host ""

Write-Host "[1] อุปกรณ์ USB ที่ Windows ตรวจจับได้ (Class USB):" -ForegroundColor Yellow
Get-PnpDevice -Class USB | Where-Object Status -eq OK | Select-Object FriendlyName, Status | Format-Table -AutoSize

Write-Host "[2] ไดรฟ์ที่มองเห็นได้ (รวม USB/Removable):" -ForegroundColor Yellow
Get-Volume | Where-Object DriveLetter | Select-Object DriveLetter, FileSystemLabel, DriveType, @{N='SizeGB';E={[math]::Round($_.Size/1GB,2)}} | Format-Table -AutoSize
# DriveType: 2=Removable, 3=Fixed, 5=CDROM

Write-Host "[3] ADB (Android Debug Bridge):" -ForegroundColor Yellow
$adbPath = Get-Command adb -ErrorAction SilentlyContinue
if ($adbPath) {
    Write-Host "  ADB พบที่: $($adbPath.Source)" -ForegroundColor Green
    Write-Host "  รายการอุปกรณ์ Android:" -ForegroundColor Gray
    adb devices
} else {
    Write-Host "  ADB ยังไม่มีใน PATH" -ForegroundColor Gray
    Write-Host "  ถ้าอุปกรณ์เป็น Android และเปิด USB debugging แล้ว ให้ติดตั้ง Android Platform Tools แล้วรัน: adb devices" -ForegroundColor Gray
}

Write-Host ""
Write-Host "=== สรุป ===" -ForegroundColor Cyan
Write-Host "ถ้าเห็น 'USB Mass Storage' หรือ 'USB Composite Device' = Windows รู้จักอุปกรณ์ที่เสียบแล้ว"
Write-Host "การเข้าได้จริง (ดูไฟล์/ดึงข้อมูล) ขึ้นกับประเภทอุปกรณ์และโหมด - ดูคู่มือ Unicorn Section 7"
