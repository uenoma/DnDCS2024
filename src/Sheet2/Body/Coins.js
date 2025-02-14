import './Coins.css';
import { useEffect } from 'react';

function Coins(props) {

  useEffect(() => {
    if (props.data) {
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
          <input></input>
        </div>
        <div>
          <div><label>SP</label></div>
          <input></input>
        </div>
        <div>
          <div><label>GP</label></div>
          <input></input>
        </div>
        <div>
          <div><label>EP</label></div>
          <input></input>
        </div>
        <div>
          <div><label>PP</label></div>
          <input></input>
        </div>

      </div>
    </div>

  );
}

export default Coins;
