import './Status.css';
import { useEffect } from 'react';

function Status(props) {

  useEffect(() => {
    if (props.data) {
      document.getElementById('StatusHPCurrent').value = props.data.hp.value;
      document.getElementById('StatusHPTemp').value = props.data.hp.temp;
      document.getElementById('StatusHPMax').value = props.data.hp.hit_dice;
      document.getElementById('StatusHitDiceSpent').value = props.data.hp.hit_dice_spent;
      document.getElementById('StatusHitDiceMax').value = props.data.hp.hit_dice;
      document.getElementById('DeathSavesSuccess1').checked = props.data.death_saves.successes[0];
      document.getElementById('DeathSavesSuccess2').checked = props.data.death_saves.successes[1];
      document.getElementById('DeathSavesSuccess3').checked = props.data.death_saves.successes[2];
      document.getElementById('DeathSavesFailure1').checked = props.data.death_saves.failures[0];
      document.getElementById('DeathSavesFailure2').checked = props.data.death_saves.failures[1];
      document.getElementById('DeathSavesFailure3').checked = props.data.death_saves.failures[2];
    }
  }, [props]);

  return (
    <div className="Status">
      <div className="StatusHP">
        <div>
          <label>ヒットポイント (HP)</label>
        </div>
        <div className="StatusHPGroup">
          <div className="StatusHPLeft">
            <div><input className="StatusHPCurrent" id="StatusHPCurrent"></input></div>
            <div><label>現在 (CURRENT)</label></div>
          </div>
          <div className="StatusHPRight">
            <div>
              <div><input className="StatusHPTemp" id="StatusHPTemp"></input></div>
              <div><label>一時的 (TEMP)</label></div>
            </div>
            <div>
              <div><input className="StatusHPMax" id="StatusHPMax"></input></div>
              <div><label>最大 (MAX)</label></div>
            </div>
          </div>

        </div>
      </div>
      <div className="StatusHitDice">
        <label>ヒットダイス <br></br>(HIT DIEC)</label>
        <div className="StatusHitDiceGroup">
          <input id="StatusHitDiceSpent"></input>
          <label>消費 (SPENT)</label>
          <input id="StatusHitDiceMax"></input>
          <label>最大 (MAX)</label>
        </div>
      </div>
      <div className="StatusDeathSaves">
        <label>死亡セーヴ <br></br>(DEATH SAVES)</label>
        <div className="StatusDeathSavesGroup">
          <div className="StatusDeathSavesGroupItem">
            <input type="checkbox" id="DeathSavesSuccess1"></input>
            <input type="checkbox" id="DeathSavesSuccess2"></input>
            <input type="checkbox" id="DeathSavesSuccess3"></input>
          </div>
          <label>成功<br></br>(SUCCESSES)</label>
          <div className="StatusDeathSavesGroupItem">
            <input type="checkbox" id="DeathSavesFailure1"></input>
            <input type="checkbox" id="DeathSavesFailure2"></input>
            <input type="checkbox" id="DeathSavesFailure3"></input>
          </div>
          <label>失敗<br></br>(FAILURES)</label>
        </div>
      </div>
    </div>
  );
}

export default Status;
