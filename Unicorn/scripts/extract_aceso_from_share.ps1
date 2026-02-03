# ACESO - แตกไฟล์จากแชร์ \\Ihc-qutjv3999\d ไป D:\
# ใช้เมื่อต้องการ copy AcesoSetup.exe จากแชร์ แล้วแตกเพื่อเจอเครื่องมือ
# รัน: powershell -ExecutionPolicy Bypass -File extract_aceso_from_share.ps1

$SharePath = "\\Ihc-qutjv3999\d"
$SetupFile = "AcesoSetup.exe"
$DestRoot = "D:\"
$DestExe = Join-Path $DestRoot $SetupFile
$ExtractTo = "D:\AcesoExtracted"

Write-Host "=== ACESO: แตกไฟล์จากแชร์ ===" -ForegroundColor Cyan
Write-Host "แหล่ง: $SharePath\$SetupFile" -ForegroundColor Gray
Write-Host "ปลายทาง: $DestRoot (แล้วแตกไป $ExtractTo)" -ForegroundColor Gray
Write-Host ""

# Step 1: Copy from share if not present or different size
$SourceFull = Join-Path $SharePath $SetupFile
if (-not (Test-Path $SourceFull)) {
    Write-Host "[ERROR] ไม่พบไฟล์ที่แชร์: $SourceFull" -ForegroundColor Red
    exit 1
}

$needCopy = $false
if (-not (Test-Path $DestExe)) {
    $needCopy = $true
    Write-Host "[1] ยังไม่มีไฟล์ที่ $DestExe จะ copy จากแชร์..." -ForegroundColor Yellow
} else {
    $srcLen = (Get-Item $SourceFull).Length
    $dstLen = (Get-Item $DestExe).Length
    if ($srcLen -ne $dstLen) {
        $needCopy = $true
        Write-Host "[1] ขนาดไฟล์ไม่ตรง (แชร์: $srcLen, ปัจจุบัน: $dstLen) จะ copy ใหม่..." -ForegroundColor Yellow
    } else {
        Write-Host "[1] มีไฟล์ $DestExe แล้ว และขนาดตรงกับแชร์ - ข้ามการ copy" -ForegroundColor Green
    }
}

if ($needCopy) {
    try {
        Copy-Item -Path $SourceFull -Destination $DestExe -Force -ErrorAction Stop
        Write-Host "    Copy เสร็จ: $DestExe" -ForegroundColor Green
    } catch {
        Write-Host "[ERROR] Copy ไม่สำเร็จ: $_" -ForegroundColor Red
        Write-Host "    ถ้า D:\AcesoSetup.exe ถูกเปิดอยู่ ให้ปิดแล้วลองใหม่" -ForegroundColor Gray
        exit 1
    }
}

# Step 2: Extract using 7-Zip if available (NSIS installer can be opened with 7z)
$7zPaths = @(
    "${env:ProgramFiles}\7-Zip\7z.exe",
    "${env:ProgramFiles(x86)}\7-Zip\7z.exe"
)
$7z = $null
foreach ($p in $7zPaths) {
    if (Test-Path $p) { $7z = $p; break }
}

if ($7z) {
    Write-Host "[2] พบ 7-Zip: $7z - กำลังแตกไฟล์ไป $ExtractTo ..." -ForegroundColor Yellow
    if (-not (Test-Path $ExtractTo)) { New-Item -ItemType Directory -Path $ExtractTo -Force | Out-Null }
    & $7z x $DestExe -o"$ExtractTo" -y
    if ($LASTEXITCODE -eq 0) {
        Write-Host "    แตกไฟล์เสร็จ - เปิดโฟลเดอร์: $ExtractTo" -ForegroundColor Green
        Write-Host "    ในโฟลเดอร์จะเจอเครื่องมือ (ไฟล์/โฟลเดอร์จาก installer)" -ForegroundColor Gray
    } else {
        Write-Host "    7-Zip อาจแตก NSIS ไม่ครบ - แนะนำรัน D:\AcesoSetup.exe เป็น installer โดยตรง" -ForegroundColor Yellow
    }
} else {
    Write-Host "[2] ไม่พบ 7-Zip - ไม่แตกไฟล์อัตโนมัติ" -ForegroundColor Yellow
    Write-Host "    เพื่อเจอเครื่องมือ:" -ForegroundColor Gray
    Write-Host "    - รัน D:\AcesoSetup.exe เป็น installer หรือ" -ForegroundColor Gray
    Write-Host "    - ติดตั้ง 7-Zip แล้วรันสคริปต์นี้อีกครั้ง" -ForegroundColor Gray
}

Write-Host ""
Write-Host "เส้นทางเอกสาร: ACESO\docs\เส้นทางเอกสาร_แชร์และเครื่องมือ.md" -ForegroundColor Cyan
