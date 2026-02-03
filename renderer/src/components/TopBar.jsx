import './TopBar.css';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-title">Unicorn</div>
      <div className="topbar-right">
        <div className="topbar-status">
          <span className="dot" />
          OFFLINE
        </div>
      </div>
    </div>
  );
}
