import './Backstory.css';
import { useEffect } from 'react';

function Backstory(props) {

  useEffect(() => {
    if (props.data) {
      document.getElementById("Backstory").value = props.data.backstory ? props.data.backstory : '';
      document.getElementById("Alignment").value = props.data.alignment;
    }
  }, [props]);

  return (
    <div className="Backstory">
      <div className="BackstoryTitle">
        <label>背景 & 人格 (BACKSTORY & PERSONALITY)</label>
      </div>
      <div className="BackstoryContent">
        <textarea id="Backstory"></textarea>
      </div>
      <div className="BackstoryAlignment">
        <div><label>属性 (Alignment)</label></div>
        <input id="Alignment"></input>
      </div>
    </div>

  );
}

export default Backstory;
