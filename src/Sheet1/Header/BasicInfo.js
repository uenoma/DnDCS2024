import './BasicInfo.css';
import { useEffect } from 'react';

function BasicInfo(props) {

  useEffect(() => {
    if (props.data) {
      const background = props.data.background.type ? props.data.background.type : props.data.background;
      document.getElementById('BasicInfoCharacterName').value = props.data.name;
      document.getElementById('BasicInfoBackground').value = background;
      if (props.data.class) {
        document.getElementById('BasicInfoClass').value = props.data.class;
      }
      if (props.data.subclass) {
        document.getElementById('BasicInfoSubclass').value = props.data.subclass;
      }
      document.getElementById('BasicInfoSpecies').value = props.data.species;
    }
  }, [props]);


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
