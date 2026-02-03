import capabilitiesData from '../data/capabilities.json';
import './Capabilities.css';

function Tick({ value }) {
  return value ? <span className="tick">✓</span> : <span className="dash">—</span>;
}

export default function Capabilities() {
  const { evidenceTypes, platformCapabilities, supportedRanges } = capabilitiesData;

  return (
    <div className="capabilities-page">
      <h1>หัวข้อและเทคโนโลยี</h1>
      <p className="capabilities-intro">
        สรุปความสามารถ ACESO/Unicorn ด้าน Android และ iOS (อ้างอิงเอกสารสรุปผู้บริหาร)
      </p>

      <section className="cap-section">
        <h2>ข้อมูลหลักฐานที่ดึงได้</h2>
        <div className="table-wrap">
          <table className="cap-table">
            <thead>
              <tr>
                <th>หมวด</th>
                <th>รายการ</th>
                <th>Android</th>
                <th>iOS</th>
                <th>หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>
              {evidenceTypes.map((row, i) => (
                <tr key={i}>
                  <td>{row.category}</td>
                  <td>{row.item}</td>
                  <td><Tick value={row.android} /></td>
                  <td><Tick value={row.ios} /></td>
                  <td>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="cap-section">
        <h2>ความสามารถแพลตฟอร์ม</h2>
        <div className="table-wrap">
          <table className="cap-table">
            <thead>
              <tr>
                <th>ความสามารถ</th>
                <th>Android</th>
                <th>iOS</th>
                <th>รายละเอียดย่อ</th>
              </tr>
            </thead>
            <tbody>
              {platformCapabilities.map((row, i) => (
                <tr key={i}>
                  <td>{row.name}</td>
                  <td><Tick value={row.android} /></td>
                  <td><Tick value={row.ios} /></td>
                  <td>{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="cap-ranges">
          <strong>ช่วงรุ่นที่รองรับ:</strong> iOS — {supportedRanges.ios}. Android — {supportedRanges.android}.
        </p>
      </section>
    </div>
  );
}
