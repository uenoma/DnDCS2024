import './ArmorClass.css';
import { useEffect } from 'react';

function ArmorClass(props) {

  useEffect(() => {
    if (props.data) {
      document.getElementById('ArmorClassValue').value = props.data.armor_class.value;
      document.getElementById('ArmorClassShield').checked = props.data.armor_class.shield;
    }
  }, [props]);

  return (
    <div className="ArmorClass">
      <div className="ArmorClassCaption"><label>アーマー<br></br>クラス<br></br>(ARMOR CLASS)</label></div>
      <input className="ArmorClassValue" id="ArmorClassValue"></input>
      <div className="ArmorClassCaption" ><label>盾 (SHIELD)</label></div>
      <input type="checkbox" className="ArmorClassShield" id="ArmorClassShield"></input>
    </div>
  );
}

export default ArmorClass;
