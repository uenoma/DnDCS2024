import './Backstory.css';
import { useEffect } from 'react';

function Backstory(props) {

  useEffect(() => {
    if (props.data) {
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
        <input></input>
      </div>
    </div>

  );
}

export default Backstory;
