import './Equipment.css';
import { useEffect } from 'react';

function Equipment(props) {

  useEffect(() => {
    if (props.data) {
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
        <div><label><input type="checkbox"></input><input className="EquipmentMagicItemName"></input></label></div>
        <div><label><input type="checkbox"></input><input className="EquipmentMagicItemName"></input></label></div>
        <div><label><input type="checkbox"></input><input className="EquipmentMagicItemName"></input></label></div>
      </div>
    </div>

  );
}

export default Equipment;
