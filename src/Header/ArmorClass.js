import './ArmorClass.css';

function ArmorClass() {
  return (
    <div className="ArmorClass">
      <div className="ArmorClassCaption"><label>アーマー<br></br>クラス<br></br>(ARMOR CLASS)</label></div>
      <input className="ArmorClassValue"></input>
      <div className="ArmorClassCaption"><label>盾 (SHIELD)</label></div>
      <input type="checkbox" className="ArmorClassShield"></input>
    </div>
  );
}

export default ArmorClass;
