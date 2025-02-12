import './Feats.css';
import { useEffect } from 'react';

function Feats(props) {

  useEffect(() => {
    if (props.data) {
      document.getElementById('feats').value = props.data.feats;
    }
  }, [props]);

  return (
    <div className="Feats">
      <div className="FeatsTitle">
        <label>特技 (FEATS)</label>
      </div>
      <div className="FeatsContent">
        <textarea id="feats"></textarea>
      </div>

    </div>
  );
}

export default Feats;
