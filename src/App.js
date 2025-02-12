import './App.css';
import Sheet from './Sheet';
import { useState } from 'react';

function App() {

  const [data, setData] = useState(null)

  const exportFile = (e) => {
    const saveData = {
      name: document.getElementById('BasicInfoCharacterName').value,
      background: document.getElementById('BasicInfoBackground').value,
      class: document.getElementById('BasicInfoClass').value,
      species: document.getElementById('BasicInfoSpecies').value,
      subclass: document.getElementById('BasicInfoSubclass').value,

      level: document.getElementById('LevelLevel').value,
      xp: document.getElementById('LevelXP').value,

      acarmor_class: {
        value: document.getElementById('ArmorClassValue').value,
        shield: document.getElementById('ArmorClassShield').checked,
      }
    };
    console.log("saveData = ", saveData)


  };

  const selectedFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const data = JSON.parse(reader.result);
      setData(data);
    }
  }

  return (
    <div className="App">
      <div className="AppHeader">
        <button className="AppHeaderSave" onClick={(e) => { exportFile(e) }}>保存</button>
        <input type="file" accept=".json" onChange={(e) => { selectedFile(e) }}></input>
      </div>
      <Sheet data={data} />
    </div>
  );
}

export default App;
