import './Appearance.css';
import bg from '../../images/bg.png'
import { useState, useEffect } from 'react';

function Appearance(props) {

  const [image, setImage] = useState(bg);

  const changeImage = (e) => {
    const file = document.getElementById("ImageUrl").value;
    if (file) {
      setImage(file);
    } else {
      setImage(bg);
    }
  }

  useEffect(() => {
    if (props.data) {
      document.getElementById("Appearance").value = props.data.appearance.value;
      if (props.data.appearance.image_url) {
        document.getElementById("ImageUrl").value = props.data.appearance.image_url;
        setImage(props.data.appearance.image_url);
      }
    }
  }, [props]);

  return (
    <div className="Appearance">
      <div className="AppearanceTitle">
        <label>外見 (APPEARANCE)</label>
      </div>
      <div className="AppearanceContent">
        <img src={image}></img>
        <textarea id="Appearance"></textarea>
      </div>
      <div className="AppearanceContentURL">
        <label>画像URL</label>
        <input id="ImageUrl" onChange={(e) => changeImage(e)}></input>
      </div>
    </div>

  );
}

export default Appearance;
