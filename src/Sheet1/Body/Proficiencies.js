import './Proficiencies.css';
import { useState, useEffect } from 'react';

function Proficiencies(props) {

  useEffect(() => {
    if (props.data && props.data.proficiency) {
      document.getElementById('armor_light').checked = props.data.proficiency.armor.light;
      document.getElementById('armor_medium').checked = props.data.proficiency.armor.medium;
      document.getElementById('armor_heavy').checked = props.data.proficiency.armor.heavy;
      document.getElementById('shield').checked = props.data.proficiency.shield;
      document.getElementById('weapons').value = props.data.proficiency.weapons;
      document.getElementById('tools').value = props.data.proficiency.tools;
    }
  }, [props]);

  return (
    <div className="Proficiencies">
      <div className="ProficienciesTitle">
        <label>装備の訓練 & 習熟<br></br>(EQUIPMENT TRAINING & PROFICIENCIES)</label>
      </div>
      <div className="ProficienciesArmorGroup">
        <div className="ProficienciesGroupCaption">
          <label>鎧の訓練<br></br>(ARMOR TRAINING)</label>
        </div>
        <div className="ProficienciesGroupItem">
          <label><input type="checkbox" id="armor_light"></input>軽装(Light)</label>
        </div>
        <div className="ProficienciesGroupItem">
          <label><input type="checkbox" id="armor_medium"></input>中装(Medium)</label>
        </div>
        <div className="ProficienciesGroupItem">
          <label><input type="checkbox" id="armor_heavy"></input>重装(Heavy)</label>
        </div>
        <div className="ProficienciesGroupItem">
          <label><input type="checkbox" id="shield"></input>盾(Shield)</label>
        </div>
      </div>
      <div className="ProficienciesGroup">
        <div className="ProficienciesGroupCaption">
          <label>武器 (WEAPONS)</label>
        </div>
        <textarea id="weapons"></textarea>
      </div>
      <div className="ProficienciesGroup">
        <div className="ProficienciesGroupCaption">
          <label>道具 (TOOLS)</label>
        </div>
        <textarea id="tools"></textarea>
      </div>

    </div>
  );
}

export default Proficiencies;
