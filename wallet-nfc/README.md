# 🔐 GtsAlpha Wallet NFC

Flutter Crypto Wallet + NFC Scanner + Thai ID Card OCR + MCP SerpAPI Server

## 📁 โครงสร้าง

```
wallet-nfc/
├── lib/features/nfc_scanner/
│   ├── models/nfc_scan_result.dart     ← NfcScanResult, ThaiIdCardData, PassportData
│   ├── services/nfc_service.dart       ← NFC: NDEF, ISO7816, MIFARE, Thai ID Chip
│   ├── services/id_ocr_service.dart    ← OCR: Thai ID + Passport MRZ
│   ├── screens/nfc_scanner_screen.dart ← 3-mode UI: NFC | ID Card | QR
│   └── widgets/
│       ├── nfc_ripple_widget.dart      ← Animated NFC ripple
│       └── scan_result_card.dart       ← Result display card
├── mcp-serpapi/
│   ├── src/index.ts                    ← MCP Server (6 tools)
│   ├── package.json
│   └── tsconfig.json
└── config/
    └── claude_desktop_config.json
```

## 🚀 Quick Start

### Flutter
```bash
flutter pub get
flutter run
```

### MCP SerpAPI
```bash
cd mcp-serpapi
npm install && npm run build
SERPAPI_API_KEY=your_key node dist/index.js
```

## 🔍 NFC Scanner Modes
| Mode | รองรับ |
|------|--------|
| 📡 NFC | NDEF, ISO 7816, MIFARE, Thai ID Chip, e-Passport |
| 🪪 ID Card | บัตรประชาชนไทย (OCR), พาสปอร์ต MRZ |
| 📷 QR/Bar | QR Code, Barcode, Crypto Wallet Address |

## 🔌 MCP Tools
| Tool | หน้าที่ |
|------|--------|
| `search` | Google Search |
| `search_news` | Google News |
| `search_maps` | Google Maps |
| `search_shopping` | ราคาสินค้า |
| `search_crypto` | ราคา BNB/ETH/BTC |
