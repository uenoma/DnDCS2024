import './Equipment.css';
import { useEffect } from 'react';

function Equipment(props) {

  useEffect(() => {
    if (props.data) {
      document.getElementById("Equipment").value = props.data.equipment.value;
      document.getElementById("MagicItem1").value = props.data.equipment.magic_item[0].name;
      document.getElementById("MagicItem2").value = props.data.equipment.magic_item[1].name;
      document.getElementById("MagicItem3").value = props.data.equipment.magic_item[2].name;
      document.getElementById("MagicItemChecked1").checked = props.data.equipment.magic_item[0].checked;
      document.getElementById("MagicItemChecked2").checked = props.data.equipment.magic_item[1].checked;
      document.getElementById("MagicItemChecked3").checked = props.data.equipment.magic_item[2].checked;
    }
  }, [props]);

  return (
    <div className="Equipment">
      <div className="EquipmentTitle">
        <label>装備 (EQUIPMENT)</label>
      </div>
      <div className="EquipmentContent">
        <textarea id="Equipment"></textarea>
      </div>
      <div className="EquipmentMagicItems">
        <div className="EquipmentMagicItemsCaption"><label>魔法のアイテムの同調 (Magic Item Attunement)</label></div>
        <div><label><input type="checkbox" id="MagicItemChecked1"></input><input className="EquipmentMagicItemName" id="MagicItem1"></input></label></div>
        <div><label><input type="checkbox" id="MagicItemChecked2"></input><input className="EquipmentMagicItemName" id="MagicItem2"></input></label></div>
        <div><label><input type="checkbox" id="MagicItemChecked3"></input><input className="EquipmentMagicItemName" id="MagicItem3"></input></label></div>
      </div>
    </div>

  );
}

export default Equipment;
