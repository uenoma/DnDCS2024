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

      armor_class: {
        value: document.getElementById('ArmorClassValue').value,
        shield: document.getElementById('ArmorClassShield').checked,
      },

      hp: {
        value: document.getElementById('StatusHPCurrent').value,
        max: document.getElementById('StatusHPMax').value,
        temp: document.getElementById('StatusHPTemp').value,
        max: document.getElementById('StatusHPMax').value,

        hit_dive: document.getElementById('StatusHitDiceMax').value,
        hit_dice_spent: document.getElementById('StatusHitDiceSpent').value
      },

      death_saves: {
        successes: [
          document.getElementById('DeathSavesSuccess1').checked,
          document.getElementById('DeathSavesSuccess2').checked,
          document.getElementById('DeathSavesSuccess3').checked
        ],
        failures: [
          document.getElementById('DeathSavesFailure1').checked,
          document.getElementById('DeathSavesFailure2').checked,
          document.getElementById('DeathSavesFailure3').checked
        ]
      },

    };
    console.log("saveData = ", saveData)

    const fileName = saveData.name + "_Lv" + saveData.level + ".json";

    const blob = new Blob([JSON.stringify(saveData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);

  };

  const selectedFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        const data = JSON.parse(reader.result);
        setData(data);
      }
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
