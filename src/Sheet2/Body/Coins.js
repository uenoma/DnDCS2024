import './Coins.css';
import { useEffect } from 'react';

function Coins(props) {

  useEffect(() => {
    if (props.data && props.data.coins) {
      document.getElementById("Coins_cp").value = props.data.coins.cp;
      document.getElementById("Coins_sp").value = props.data.coins.sp;
      document.getElementById("Coins_gp").value = props.data.coins.gp;
      document.getElementById("Coins_ep").value = props.data.coins.ep;
      document.getElementById("Coins_pp").value = props.data.coins.pp;
    }
  }, [props]);

  return (
    <div className="Coins">
      <div className="CoinsTitle">
        <label>貨幣 (COINS)</label>
      </div>
      <div className="CoinsContent">
        <div>
          <div><label>CP</label></div>
          <input id="Coins_cp"></input>
        </div>
        <div>
          <div><label>SP</label></div>
          <input id="Coins_sp"></input>
        </div>
        <div>
          <div><label>GP</label></div>
          <input id="Coins_gp"></input>
        </div>
        <div>
          <div><label>EP</label></div>
          <input id="Coins_ep"></input>
        </div>
        <div>
          <div><label>PP</label></div>
          <input id="Coins_pp"></input>
        </div>

      </div>
    </div>

  );
}

export default Coins;
