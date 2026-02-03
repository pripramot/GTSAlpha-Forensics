const contentEl = document.getElementById('content');
const toolbarEl = document.getElementById('toolbar');
const docListEl = document.getElementById('doc-list');

const ABOUT_HTML = `
<h3 style="margin-top:0;">GTSAlpha-Forensics | Unicorn</h3>
<p><strong>ชื่อโฟลเดอร์:</strong> GTSAlpha-Forensics<br><strong>ชื่อโปรแกรม:</strong> Unicorn</p>
<p><strong>Unicorn</strong> = ACESO และชุดเครื่องมือที่แตกจาก <strong>AcesoSetup.exe</strong> (นิติวิทยาศาสตร์มือถือ)</p>
<p>โปรเจกต์แยก Local อิสระ — เชื่อมเฉพาะ <strong>Supabase</strong> และ <strong>Docker</strong></p>
<ul>
  <li>Unicorn/docs — คู่มือ, การเข้าถึงอุปกรณ์, แนวทางติดตั้ง/ส่งมอบ</li>
  <li>Unicorn/scripts — ตรวจ USB, แตกไฟล์จากแชร์, สร้าง .docx</li>
  <li>Unicorn/database — gts_schema.sql (PostgreSQL/Supabase)</li>
</ul>
<p>เอกสารและเนื้อหาเกี่ยวกับโครงการอยู่ในเมนูด้านซ้าย</p>
`;

let data = null;

function setContent(title, body, isPre = true) {
  toolbarEl.textContent = title;
  if (isPre) {
    contentEl.innerHTML = '<pre>' + escapeHtml(body) + '</pre>';
  } else {
    contentEl.innerHTML = body;
  }
}

function escapeHtml(s) {
  const div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML;
}

function showAbout() {
  setContent('เกี่ยวกับโครงการ', ABOUT_HTML, false);
}

function showReadme() {
  if (!data) return;
  setContent('Unicorn README', data.readme);
}

function showMemory() {
  if (!data) return;
  setContent('Memory Reference', data.memoryRef);
}

function showReadmeTh() {
  if (!data) return;
  setContent('คู่มือ TH (README_TH.txt)', data.readmeTh || '(ไม่มีเนื้อหา)');
}

function showInstall() {
  if (!data) return;
  setContent('สรุปการติดตั้ง', data.installSummary || '(ไม่มีเนื้อหา)');
}

async function showDoc(filename) {
  toolbarEl.textContent = filename;
  contentEl.innerHTML = '<span class="loading">กำลังโหลด...</span>';
  const text = await window.unicorn.getDocContent(filename);
  contentEl.innerHTML = '<pre>' + escapeHtml(text || '(ไม่สามารถโหลดไฟล์ได้)') + '</pre>';
}

async function loadContent() {
  contentEl.innerHTML = '<span class="loading">กำลังโหลดเนื้อหา Unicorn...</span>';
  try {
    data = await window.unicorn.getContent();
    docListEl.innerHTML = '';
    (data.docList || []).forEach(name => {
      const div = document.createElement('div');
      div.className = 'doc-item';
      div.textContent = name;
      div.title = name;
      div.addEventListener('click', () => showDoc(name));
      docListEl.appendChild(div);
    });
    showAbout();
  } catch (e) {
    contentEl.innerHTML = '<pre class="placeholder">โหลดไม่สำเร็จ: ' + escapeHtml(String(e.message || e)) + '</pre>';
  }
}

document.querySelectorAll('.sidebar nav button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.sidebar nav button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const page = btn.getAttribute('data-page');
    if (page === 'about') showAbout();
    else if (page === 'readme') showReadme();
    else if (page === 'memory') showMemory();
    else if (page === 'readmeTh') showReadmeTh();
    else if (page === 'install') showInstall();
  });
});

document.querySelector('[data-page="about"]').classList.add('active');
loadContent();
