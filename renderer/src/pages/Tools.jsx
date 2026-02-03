import toolsData from '../data/tools.json';
import './Tools.css';

export default function Tools() {
  return (
    <div className="tools-page">
      <h1>เครื่องมือ</h1>
      <p className="tools-intro">
        เครื่องมือ Forensic สำหรับวิเคราะห์และดึงข้อมูลหลักฐาน
      </p>
      <div className="tools-grid">
        {toolsData.map((t) => (
          <div key={t.id} className="tool-card">
            <div className="tool-card__badge">{t.title.split(' ')[0].slice(0, 2)}</div>
            <h3>{t.title}</h3>
            <p>{t.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
