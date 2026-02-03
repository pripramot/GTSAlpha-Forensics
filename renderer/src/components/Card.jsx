import './Card.css';

export default function Card({ title, description }) {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-desc">{description}</div>
      <button type="button" className="card-add" aria-label="เพิ่ม">+</button>
    </div>
  );
}
