import './Status.css';

function Status() {
  return (
    <div className="Status">
      <div className="StatusHP">
        <div>
          <label>ヒットポイント (HP)</label>
        </div>
        <div className="StatusHPGroup">
          <div className="StatusHPLeft">
            <div><input className="StatusHPCurrent"></input></div>
            <div><label>現在 (CURRENT)</label></div>
          </div>
          <div className="StatusHPRight">
            <div>
              <div><input className="StatusHPTemp"></input></div>
              <div><label>一時的 (TEMP)</label></div>
            </div>
            <div>
              <div><input className="StatusHPMax"></input></div>
              <div><label>最大 (MAX)</label></div>
            </div>
          </div>

        </div>
      </div>
      <div className="StatusHitDice">
        <label>ヒットダイス <br></br>(HIT DIEC)</label>
        <div className="StatusHitDiceGroup">
          <input></input>
          <label>消費 (SPENT)</label>
          <input></input>
          <label>最大 (MAX)</label>
        </div>
      </div>
      <div className="StatusDeathSaves">
        <label>死亡セーヴ <br></br>(DEATH SAVES)</label>
        <div className="StatusDeathSavesGroup">
          <div className="StatusDeathSavesGroupItem">
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
          </div>
          <label>成功<br></br>(SUCCESSES)</label>
          <div className="StatusDeathSavesGroupItem">
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
          </div>
          <label>失敗<br></br>(FAILURES)</label>
        </div>
      </div>
    </div>
  );
}

export default Status;
