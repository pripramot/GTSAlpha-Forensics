# 🌌 Unicorn Forensic Curriculum: Brain Simulation

## Project: GTSAlpha-Forensics

## Role: นางน้อย (nangnoy) - Lead AI Assistant

This document outlines the conceptual framework for the 9-point curriculum. **STATUS: SIMULATION ONLY (Do not imprint yet).**

---

### 1. 📱 Android Forensics

- **Capabilities:** ADB extraction, Physical dumping, Logical backup analysis.
- **Tools:** ADB, Fastboot, Custom recovery scripts.
- **Aceso Integration:** Parsing Android app data (WhatsApp, Telegram, etc.) from `AcesoExtracted`.

### 2. 🍎 iOS Forensics

- **Capabilities:** iTunes backup parsing, Keychain extraction, File system imaging (checkm8/legacy).
- **Tools:** libimobiledevice, idevicebackup2.
- **Aceso Integration:** Decrypting iOS backup files using Unicorn tools.

### 3. 💻 Computer PC Forensics

- **Capabilities:** Disk imaging (E01, RAW), Registry analysis, Memory forensics.
- **Tools:** Volatility, Autopsy integration, Sleuth Kit.
- **Aceso Integration:** External storage parsing via Unicorn plugins.

### 4. 🔐 Social Accounts (Facebook, LINE, etc.)

- **Capabilities:** Token extraction, Decryption of local databases (`ChatHistory.db`, etc.).
- **Focus:** Decrypting End-to-End Encryption where keys are stored on-device.
- **Automation:** Using Unicorn scripts to automate social media report generation.

### 5. ⌚ General Devices

- **Capabilities:** IoT, Wearables (Apple Watch, Galaxy Watch), SIM Card reading.
- **Focus:** Extracting location history, health data, and SMS from secondary devices.

### 6. 🛠️ Device Recovery

- **Capabilities:** Pattern/PIN bypass techniques, Data carving (deleted files).
- **Focus:** Recovery from corrupted partitions or partially formatted NAND.

### 7. 🚀 UX/UI Warp

- **Concept:** A modern, futuristic dashboard (Apple Developer-ish style) that "warps" the user between forensic tasks.
- **Tech:** React/Next.js (Vite) + Tailwind (or Vanilla CSS) with Glassmorphism.
- **Real-time:** Live progress bars and 3D visualization of device data.

### 8. 🌑 Off-State Case (Powered Off)

- **Capabilities:** ISP (In-System Programming), JTAG, Chip-off imaging.
- **Focus:** Handling devices that won't boot or have BIOS/Bootloader locks.

### 9. 🧠 Custom AI Training & Unicorn Integration

- **Concept:** Training specialized LLM models to analyze forensic reports automatically.
  - **Supabase Cloud Sync:** Syncing metadata, logs, and report statuses to the GTSAlpha-Forensics project.
  - **Docker DB (PostgreSQL):** Storing large-scale forensic indexes locally for the AI to query.
  - **Pattern Recognition:** AI-assisted detection of consistent behavior across social media chats.
  - **Language Support:** Automatic Thai-to-English translation for international forensic standards.
  - **Unicorn Control:** AI triggers (Unicorn scripts) for automated device detection and extraction.

---
**Note to self/system:** This is a roadmap. Detailed implementation for each module will follow after the Unicorn core is successfully extracted and mapped.
