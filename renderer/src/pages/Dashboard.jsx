import state from '../data/platforms.state.json';
import Card from '../components/Card';
import PlatformCard from '../components/PlatformCard';
import './Dashboard.css';

const platforms = state?.platforms ?? [];

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Get Started */}
      <section className="get-started">
        <h1>เริ่มต้นใช้งาน Unicorn</h1>
        <div className="get-started-icons" aria-hidden>
          <span>iOS</span><span>Android</span><span>PC</span><span>Cloud</span>
        </div>
        <p className="get-started-subtitle">
          ก้าวแรกสู่การสรรค์สร้างผลงานสำหรับแพลตฟอร์มของ GTSAlpha-Forensics ทั้งหมด
        </p>
        <div className="card-grid">
          <Card
            title="เอกสาร Unicorn ล่าสุด"
            description="Manual, แนวทางการใช้งาน, และอื่นๆ"
          />
          <Card
            title="วิดีโอการอบรม"
            description="สื่อการอบรม, คู่มือวิดีโอ, เทคนิคต่างๆ"
          />
          <Card
            title="ถามคำถาม / สนับสนุน"
            description="Q&A, ติดต่อสอบถาม, รายงานปัญหา"
          />
        </div>
      </section>

      {/* แดชบอร์ด */}
      <section className="platform-section">
        <h2>แดชบอร์ด</h2>
        <div className="platform-list">
          {platforms.map((p, index) => {
            const firstEnabledIndex = platforms.findIndex(pp => pp.enabled);
            const active = index === firstEnabledIndex && p.enabled;
            return (
              <PlatformCard
                key={p.id}
                title={p.title}
                subtitle={p.subtitle}
                status={p.status}
                icon={p.icon}
                disabled={!p.enabled}
                active={active}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
