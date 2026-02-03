import docsData from '../data/docs.json';
import './Docs.css';

export default function Docs() {
  return (
    <div className="docs-page">
      <h1>เอกสาร Unicorn</h1>
      <p className="docs-intro">
        รายการเอกสารต้นฉบับและสรุปสำหรับอ้างอิง (เก็บใน Unicorn/docs/)
      </p>
      <ul className="docs-list">
        {docsData.map((d) => (
          <li key={d.id} className="docs-item">
            <div className="docs-item__title">{d.title}</div>
            <div className="docs-item__desc">{d.description}</div>
            <div className="docs-item__file">{d.file}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
