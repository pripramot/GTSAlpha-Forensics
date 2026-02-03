import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import './AppLayout.css';

export default function AppLayout({ children, currentPage, onSelectPage }) {
  return (
    <div className="app-shell">
      <Sidebar currentPage={currentPage} onSelectPage={onSelectPage} />
      <div className="app-main">
        <TopBar />
        <div className="app-content">{children}</div>
      </div>
    </div>
  );
}
