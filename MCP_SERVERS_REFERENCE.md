# การตั้งค่า MCP Servers (แจ้งอ้างอิง)

เอกสารนี้เก็บการตั้งค่า MCP ที่ใช้ — อ้างอิงจาก `MCP_SERVERS_REFERENCE.json`

---

## mcpServers

| ชื่อ | คำอธิบาย | Path / Command |
|------|-----------|----------------|
| **BoonTing-Files** | ไฟล์ระบบ → โฟลเดอร์ Case-Files | `C:\Users\usEr\Desktop\Case-Files` |
| **BoonTing-Forensics** | ไฟล์ระบบ → โฟลเดอร์ gts-forensics | `C:\Users\usEr\Desktop\gts-forensics` |
| **BoonTing-System** | MCP ผ่าน uv + Python (Cursor Touch) | `uv.exe` → Claude Extensions `ant.dir.cursortouch.windows-mcp` → `main.py` |

---

## preferences

- `menuBarEnabled`: true

---

**หมายเหตุ:** ใช้กับ Cursor / Claude ที่รองรับ MCP — วาง config นี้ในส่วน MCP ของแอป (เช่น Cursor Settings → MCP) ถ้าต้องการเปิดใช้เซิร์ฟเวอร์เหล่านี้
