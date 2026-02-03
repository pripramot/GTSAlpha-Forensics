import './Reports.css';

export default function Reports() {
  return (
    <div className="reports-page">
      <h1>กรณี/รายงาน</h1>
      <p className="reports-intro">
        รายงานสรุปการปฏิบัติงาน / Case — อ้างอิง compliance_cases, audit_logs
      </p>
      <div className="reports-placeholder">
        กำลังเตรียมส่วนนี้ — รายการ Case และรายงานจะแสดงที่นี่
      </div>
    </div>
  );
}
