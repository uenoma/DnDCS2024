import './Languages.css';
import { useEffect } from 'react';

function Languages(props) {

  useEffect(() => {
    if (props.data) {
      document.getElementById("Languages").value = props.data.languages ? props.data.languages : '';
    }
  }, [props]);

  return (
    <div className="Languages">
      <div className="LanguagesTitle">
        <label>言語 (LANGUAGES)</label>
      </div>
      <div className="LanguagesContent">
        <textarea id="Languages"></textarea>
      </div>
    </div>

  );
}

export default Languages;
