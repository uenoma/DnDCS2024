import './BasicInfo.css';

function BasicInfo() {

  return (
    <div className="BasicInfo">
      <div className="BasicInfoItem">
        <input className="BasicInfoItemValueLarge" id="BasicInfoCharacterName"></input>
        <div className="BasicInfoItemCaption"><label>キャラクター名 (CHARACTER NAME)</label></div>
      </div>

      <div className="BasicInfoLine">
        <div className="BasicInfoItem">
          <input className="BasicInfoItemValueSmall" id="BasicInfoBackground"></input>
          <div className="BasicInfoItemCaption"><label>背景 (BACKGROUND)</label></div>
        </div>
        <div className="BasicInfoItem">
          <input className="BasicInfoItemValueSmall" id="BasicInfoClass"></input>
          <div className="BasicInfoItemCaption"><label>クラス (CLASS)</label></div>
        </div>
      </div>

      <div className="BasicInfoLine">
        <div className="BasicInfoItem">
          <input className="BasicInfoItemValueSmall" id="BasicInfoSpecies"></input>
          <div className="BasicInfoItemCaption"><label>種族 (SPECIES)</label></div>
        </div>
        <div className="BasicInfoItem">
          <input className="BasicInfoItemValueSmall" id="BasicInfoSubclass"></input>
          <div className="BasicInfoItemCaption"><label>サブクラス (SUBCLASS)</label></div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
