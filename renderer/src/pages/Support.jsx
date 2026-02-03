import './Support.css';

export default function Support() {
  return (
    <div className="support-page">
      <h1>สนับสนุน</h1>
      <p className="support-intro">
        ช่องทางช่วยเหลือภายในระบบ — คู่มือ Unicorn, วิธีการใช้งาน, FAQ
      </p>
      <div className="support-cards">
        <div className="support-card">
          <span className="support-card__badge">Forum</span>
          <h3>เปิดฟอรัม</h3>
          <p>ลิงก์หรือเปิดในแอป</p>
        </div>
        <div className="support-card">
          <span className="support-card__badge">Contact</span>
          <h3>ติดต่อ / Feedback</h3>
          <p>ฟอร์มหรือลิงก์</p>
        </div>
        <div className="support-card">
          <span className="support-card__badge">Report</span>
          <h3>รายงานปัญหา</h3>
          <p>ฟอร์มหรือลิงก์</p>
        </div>
      </div>
    </div>
  );
}
