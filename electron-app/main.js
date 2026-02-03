const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

const UNICORN_DIR = path.join(__dirname, '..', 'Unicorn');
const UNICORN_DOCS = path.join(UNICORN_DIR, 'docs');

function readFileSafe(filePath, encoding = 'utf8') {
  try {
    if (fs.existsSync(filePath)) return fs.readFileSync(filePath, encoding);
  } catch (_) {}
  return null;
}

function listDocs() {
  try {
    if (!fs.existsSync(UNICORN_DOCS)) return [];
    return fs.readdirSync(UNICORN_DOCS)
      .filter(f => /\.(md|txt|html)$/i.test(f))
      .sort();
  } catch (_) {
    return [];
  }
}

const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (isDev) {
    win.loadURL('http://localhost:5173').catch(() => {});
    win.webContents.on('did-fail-load', (_, code, desc, url) => {
      if (url === 'http://localhost:5173/' || url.startsWith('http://localhost:5173')) {
        win.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent(`
          <!DOCTYPE html><html><head><meta charset="utf-8"><title>Unicorn</title>
          <style>body{font-family:sans-serif;background:#1a1d23;color:#fff;padding:40px;max-width:480px;margin:0 auto;}
          h1{font-size:1.25rem;}code{background:#2a3038;padding:2px 6px;border-radius:4px;}
          ol{margin:16px 0;padding-left:20px;}li{margin:8px 0;}</style></head><body>
          <h1>การเชื่อมต่อผิดพลาด</h1>
          <p>Electron ต้องการ Vite dev server (port 5173) ให้รันคำสั่งด้านล่างก่อน แล้วค่อยเปิด Electron อีกครั้ง</p>
          <ol>
            <li>เปิดเทอร์มินัลที่ 1 → <code>cd GTSAlpha-Forensics/renderer</code> แล้ว <code>npm run dev</code></li>
            <li>เปิดเทอร์มินัลที่ 2 → <code>cd GTSAlpha-Forensics/electron-app</code> แล้ว <code>npm start</code></li>
          </ol>
          <p>หรือรัน renderer ก่อน: <code>cd renderer && npm run dev</code> จากโฟลเดอร์ GTSAlpha-Forensics</p>
          </body></html>
        `));
      }
    });
  } else {
    win.loadFile(path.join(__dirname, '../renderer/dist/index.html'));
  }
  win.setTitle('GTSAlpha-Forensics | Unicorn');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

ipcMain.handle('get-unicorn-content', async () => {
  const readme = readFileSafe(path.join(UNICORN_DIR, 'README.md'));
  const memoryRef = readFileSafe(path.join(UNICORN_DIR, 'MEMORY_REFERENCE.md'));
  const readmeTh = readFileSafe(path.join(UNICORN_DIR, 'README_TH.txt'));
  const installSummary = readFileSafe(path.join(UNICORN_DIR, 'INSTALLATION_SUMMARY.txt'));
  const docList = listDocs();
  return {
    readme: readme || '(ไม่มีไฟล์ README.md)',
    memoryRef: memoryRef || '(ไม่มีไฟล์ MEMORY_REFERENCE.md)',
    readmeTh: readmeTh || '',
    installSummary: installSummary || '',
    docList,
    unicornPath: UNICORN_DIR,
  };
});

ipcMain.handle('get-doc-content', async (_, filename) => {
  const filePath = path.join(UNICORN_DOCS, filename);
  if (!path.normalize(filePath).startsWith(path.normalize(UNICORN_DOCS))) return null;
  return readFileSafe(filePath);
});
