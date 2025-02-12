import './Proficiencies.css';

function Proficiencies() {
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
          <label><input type="checkbox"></input>軽装(Light)</label>
        </div>
        <div className="ProficienciesGroupItem">
          <label><input type="checkbox"></input>中装(Medium)</label>
        </div>
        <div className="ProficienciesGroupItem">
          <label><input type="checkbox"></input>重装(Heavy)</label>
        </div>
        <div className="ProficienciesGroupItem">
          <label><input type="checkbox"></input>盾(Shield)</label>
        </div>
      </div>
      <div className="ProficienciesGroup">
        <div className="ProficienciesGroupCaption">
          <label>武器 (WEPONS)</label>
        </div>
        <textarea></textarea>
      </div>
      <div className="ProficienciesGroup">
        <div className="ProficienciesGroupCaption">
          <label>道具 (TOOLS)</label>
        </div>
        <textarea></textarea>
      </div>

    </div>
  );
}

export default Proficiencies;
