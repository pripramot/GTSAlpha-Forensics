import './Sidebar.css';

const NAV_ITEMS = [
  { label: 'แพลตฟอร์ม', pageId: 'dashboard' },
  { label: 'เครื่องมือ', pageId: 'tools' },
  { label: 'หัวข้อและเทคโนโลยี', pageId: 'capabilities' },
  { label: 'กรณี / รายงาน', pageId: 'reports' },
  { label: 'เอกสาร', pageId: 'docs' },
  { label: 'สนับสนุน', pageId: 'support' },
];

export default function Sidebar({ currentPage, onSelectPage }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-id">Unicorn</span>
      </div>
      <nav className="sidebar-section" aria-label="เมนูหลัก">
        {NAV_ITEMS.map(({ label, pageId }) => (
          <button
            type="button"
            key={pageId + label}
            className={`sidebar-item ${currentPage === pageId ? 'sidebar-item--active' : ''}`}
            onClick={() => onSelectPage?.(pageId)}
          >
            <span className="sidebar-item-label">{label}</span>
            <span className="sidebar-item-chevron" aria-hidden>›</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <span className="sidebar-footer-label">แดชบอร์ด</span>
      </div>
    </aside>
  );
}
