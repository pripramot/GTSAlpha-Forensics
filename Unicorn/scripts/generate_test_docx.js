/**
 * สร้างเอกสาร .docx สำหรับการทดสอบทั้งหมด (อุปกรณ์ที่เสียบกับคอมพิวเตอร์)
 * รัน: node ACESO/scripts/generate_test_docx.js
 */
const fs = require("fs");
const path = require("path");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType } = require("docx");

function createCell(text, opts = {}) {
  return new TableCell({
    children: [new Paragraph({ children: [new TextRun({ text })] })],
    ...opts,
  });
}

const doc = new Document({
  title: "เอกสารการทดสอบทั้งหมด - อุปกรณ์ที่เสียบกับคอมพิวเตอร์",
  creator: "ACESO",
  sections: [
    {
      children: [
        new Paragraph({
          children: [new TextRun({ text: "เอกสารการทดสอบทั้งหมด", bold: true, size: 32 })],
          heading: "Title",
          spacing: { after: 400 },
        }),
        new Paragraph({
          children: [new TextRun({ text: "สำหรับ: อุปกรณ์ที่เสียบกับคอมพิวเตอร์ (รวมมือถือ 1 ชิ้น)", italics: true })],
          spacing: { after: 200 },
        }),
        new Paragraph({ text: "" }),

        new Paragraph({
          children: [new TextRun({ text: "1. วัตถุประสงค์การทดสอบ", bold: true, size: 28 })],
          spacing: { before: 300, after: 200 },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "ตรวจสอบว่าคอมพิวเตอร์เห็นอุปกรณ์ที่เสียบ (USB) และสามารถเข้าถึงข้อมูลที่แสดงได้จริง โดยไม่มั่ว",
            }),
          ],
          spacing: { after: 200 },
        }),

        new Paragraph({
          children: [new TextRun({ text: "2. อุปกรณ์ที่ใช้ในการทดสอบ", bold: true, size: 28 })],
          spacing: { before: 300, after: 200 },
        }),
        new Paragraph({
          children: [new TextRun({ text: "• คอมพิวเตอร์ (เครื่องทดสอบ)" })],
        }),
        new Paragraph({
          children: [new TextRun({ text: "• อุปกรณ์ที่เสียบ 1 ชิ้น: มือถือ (หรืออุปกรณ์ USB อื่น) — อาจยังไม่แสดงเป็นไดรฟ์/รายการจนเครื่องเห็นชัดเจน" })],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "หมายเหตุ: ถ้ามือถือที่เสียบยังไม่ถูกมองเห็นเป็น USB Mass Storage / USB Composite Device / Generic USB Hub ให้ทำตามแนวทางในหัวข้อ 4",
            }),
          ],
          spacing: { after: 200 },
        }),

        new Paragraph({
          children: [new TextRun({ text: "3. ผลการตรวจสอบ (ตัวอย่างจริง)", bold: true, size: 28 })],
          spacing: { before: 300, after: 200 },
        }),
        new Paragraph({
          children: [new TextRun({ text: "3.1 อุปกรณ์ USB ที่ Windows ตรวจจับได้", bold: true })],
        }),
        new Paragraph({ children: [new TextRun({ text: "• USB Mass Storage Device (OK)" })] }),
        new Paragraph({ children: [new TextRun({ text: "• USB Composite Device (หลายตัว, OK)" })] }),
        new Paragraph({ children: [new TextRun({ text: "• Generic USB Hub, USB Root Hub (OK)" })] }),
        new Paragraph({ text: "" }),
        new Paragraph({
          children: [new TextRun({ text: "3.2 ไดรฟ์ที่มองเห็นได้", bold: true })],
        }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: [
                createCell("ไดรฟ์"),
                createCell("ประเภท"),
                createCell("ขนาด (โดยประมาณ)"),
              ],
            }),
            new TableRow({
              children: [
                createCell("C:"),
                createCell("Fixed"),
                createCell("464.83 GB"),
              ],
            }),
            new TableRow({
              children: [
                createCell("D:"),
                createCell("Removable"),
                createCell("14.94 GB"),
              ],
            }),
          ],
        }),
        new Paragraph({ text: "" }),
        new Paragraph({
          children: [new TextRun({ text: "3.3 ข้อมูลที่เข้าถึงได้บน D: (ที่อ่านได้จริง)", bold: true })],
        }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: [
                createCell("ชื่อไฟล์"),
                createCell("ขนาด (bytes)"),
                createCell("แก้ไขล่าสุด"),
              ],
            }),
            new TableRow({
              children: [
                createCell("AcesoSetup.exe"),
                createCell("2,090,376,656"),
                createCell("14/1/2025 10:59 AM"),
              ],
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "สรุป: ตอนตรวจสอบ เครื่องเข้าถึง D: ได้ และใน D: มีไฟล์ AcesoSetup.exe ไฟล์เดียว (ขนาดประมาณ 2 GB) — นี่คือข้อมูลจริงจากระบบ",
            }),
          ],
          spacing: { after: 200 },
        }),

        new Paragraph({
          children: [new TextRun({ text: "4. แนวทางให้มือถือที่เสียบแสดงเป็นที่เครื่องเห็น", bold: true, size: 28 })],
          spacing: { before: 300, after: 200 },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "ถ้ามือถือที่เสียบกับคอมพิวเตอร์ยังไม่ถูกมองเห็นเป็น USB Mass Storage Device, USB Composite Device หรือ Generic USB Hub ให้ลองดังนี้:",
            }),
          ],
        }),
        new Paragraph({
          children: [new TextRun({ text: "4.1 บนมือถือ Android", bold: true })],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• เสียบสาย USB แล้วดึงแถบการแจ้งเตือนลง → แตะ \"การชาร์จผ่าน USB\" หรือ \"USB\" → เลือก \"ถ่ายโอนไฟล์\" (File transfer / MTP) เพื่อให้ Windows มองเห็นเป็นไดรฟ์หรืออุปกรณ์เก็บข้อมูล",
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• เปิด \"Developer options\" → เปิด \"USB debugging\" ถ้าต้องการใช้ ADB (ต้องติดตั้ง Android Platform Tools บน PC)",
            }),
          ],
        }),
        new Paragraph({
          children: [new TextRun({ text: "4.2 บน iPhone / iPad" })],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• เสียบสายแล้วปลดล็อกหน้าจอ และกด \"Trust\" บนเครื่อง ถ้า Windows ยังไม่เห็น ให้ติดตั้ง iTunes หรือ Apple Mobile Device Support / Driver",
            }),
          ],
        }),
        new Paragraph({
          children: [new TextRun({ text: "4.3 บน PC (Windows)" })],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• ตรวจสอบ Device Manager ว่ามีอุปกรณ์ Unknown หรือมีเครื่องหมายเตือนหรือไม่ ถ้ามี ให้อัปเดต Driver หรือติดตั้ง USB driver ของผู้ผลิตมือถือ",
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "• รันสคริปต์ตรวจสอบอีกครั้ง: powershell -ExecutionPolicy Bypass -File ACESO\\scripts\\check_usb_devices.ps1",
            }),
          ],
          spacing: { after: 200 },
        }),

        new Paragraph({
          children: [new TextRun({ text: "5. สคริปต์/เครื่องมือที่ใช้", bold: true, size: 28 })],
          spacing: { before: 300, after: 200 },
        }),
        new Paragraph({
          children: [new TextRun({ text: "• ACESO\\scripts\\check_usb_devices.ps1 — ตรวจรายการ USB และไดรฟ์" })],
        }),
        new Paragraph({
          children: [new TextRun({ text: "• คำสั่ง dir D:\\ — ดูเนื้อหาในไดรฟ์ D:" })],
        }),
        new Paragraph({
          children: [new TextRun({ text: "• เอกสารตัวอย่างจริง: ACESO\\docs\\การเข้าถึงอุปกรณ์ที่เสียบ_ตัวอย่างจริง.md" })],
          spacing: { after: 200 },
        }),

        new Paragraph({
          children: [new TextRun({ text: "— จบเอกสารการทดสอบ —", italics: true })],
          spacing: { before: 400 },
          alignment: "center",
        }),
      ],
    },
  ],
});

const outDir = path.join(__dirname, "..", "docs");
const outPath = path.join(outDir, "การทดสอบทั้งหมด_อุปกรณ์ที่เสียบ.docx");

Packer.toBuffer(doc).then((buffer) => {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outPath, buffer);
  console.log("สร้างเอกสารเรียบร้อย:", outPath);
});
