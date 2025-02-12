import './Level.css';
import { useEffect } from 'react';

function Level(props) {

  useEffect(() => {
    if (props.data) {
      document.getElementById('LevelLevel').value = props.data.level;
      document.getElementById('LevelXP').value = props.data.xp;
    }
  }, [props]);


  return (
    <div className="Level">
      <div className="LevelItem">
        <input className="LevelItemValue" id="LevelLevel"></input>
        <div className="LevelItemRightCaption"><label>レベル (LEVEL)</label></div>
      </div>
      <div className="LevelItem">
        <input className="LevelItemValue" id="LevelXP"></input>
        <div className="LevelItemRightCaption"><label>経験値 (XP)</label></div>
      </div>
    </div>
  );
}

export default Level;
