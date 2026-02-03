import './PlatformCard.css';

const BADGE_MAP = { ios: 'iOS', android: 'Android', desktop: 'PC', cloud: 'Cloud' };

export default function PlatformCard({
  title,
  subtitle,
  status,
  icon,
  disabled = false,
  active = false
}) {
  const badge = BADGE_MAP[icon] ?? icon;
  const displayStatus = status === 'offline' ? 'Offline' : status;

  return (
    <div
      className={`platform-card ${disabled ? 'platform-card--disabled' : ''} ${active ? 'platform-card--active' : ''}`}
      aria-disabled={disabled}
    >
      <div className="platform-card__badge">
        <span>{badge}</span>
      </div>
      <div className="platform-card__content">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        {!active && <span className="platform-card__status">{displayStatus}</span>}
      </div>
      <button type="button" className="platform-card__add" aria-label="เพิ่ม">+</button>
    </div>
  );
}
