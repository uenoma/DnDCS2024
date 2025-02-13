import { act } from 'react';
import './App.css';
import Sheet from './Sheet';
import { useState, useEffect } from 'react';

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

        hit_dice: document.getElementById('StatusHitDiceMax').value,
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

      proficiency: {
        armor: {
          light: document.getElementById('armor_light').checked,
          medium: document.getElementById('armor_medium').checked,
          heavy: document.getElementById('armor_heavy').checked,
        },
        shield: document.getElementById('shield').checked,
        weapons: document.getElementById('weapons').value,
        tools: document.getElementById('tools').value,
      },

      stats: {
        strength: document.getElementById('score_strength').value,
        dexterity: document.getElementById('score_dexterity').value,
        constitution: document.getElementById('score_constitution').value,
        intelligence: document.getElementById('score_intelligence').value,
        wisdom: document.getElementById('score_wisdom').value,
        charisma: document.getElementById('score_charisma').value,
      },

      saving_throws: {
        strength_save_checked: document.getElementById('strength_save_checked').checked,
        dexterity_save_checked: document.getElementById('dexterity_save_checked').checked,
        constitution_save_checked: document.getElementById('constitution_save_checked').checked,
        intelligence_save_checked: document.getElementById('intelligence_save_checked').checked,
        wisdom_save_checked: document.getElementById('wisdom_save_checked').checked,
        charisma_save_checked: document.getElementById('charisma_save_checked').checked,

        strength_save: document.getElementById('strength_save').value,
        dexterity_save: document.getElementById('dexterity_save').value,
        constitution_save: document.getElementById('constitution_save').value,
        intelligence_save: document.getElementById('intelligence_save').value,
        wisdom_save: document.getElementById('wisdom_save').value,
        charisma_save: document.getElementById('charisma_save').value,
      },

      proficiency_bonus: document.getElementById('proficiency_bonus').value,
      inspiration: document.getElementById('inspiration').checked,

      skills: {
        acrobatics_checked: document.getElementById('acrobatics_checked').checked,
        animal_handling_checked: document.getElementById('animal_handling_checked').checked,
        arcana_checked: document.getElementById('arcana_checked').checked,
        athletics_checked: document.getElementById('athletics_checked').checked,
        deception_checked: document.getElementById('deception_checked').checked,
        history_checked: document.getElementById('history_checked').checked,
        insight_checked: document.getElementById('insight_checked').checked,
        intimidation_checked: document.getElementById('intimidation_checked').checked,
        investigation_checked: document.getElementById('investigation_checked').checked,
        medicine_checked: document.getElementById('medicine_checked').checked,
        nature_checked: document.getElementById('nature_checked').checked,
        perception_checked: document.getElementById('perception_checked').checked,
        performance_checked: document.getElementById('performance_checked').checked,
        persuasion_checked: document.getElementById('persuasion_checked').checked,
        religion_checked: document.getElementById('religion_checked').checked,
        sleight_of_hand_checked: document.getElementById('sleight_of_hand_checked').checked,
        stealth_checked: document.getElementById('stealth_checked').checked,
        survival_checked: document.getElementById('survival_checked').checked,

        acrobatics: document.getElementById('acrobatics').value,
        animal_handling: document.getElementById('animal_handling').value,
        arcana: document.getElementById('arcana').value,
        athletics: document.getElementById('athletics').value,
        deception: document.getElementById('deception').value,
        history: document.getElementById('history').value,
        insight: document.getElementById('insight').value,
        intimidation: document.getElementById('intimidation').value,
        investigation: document.getElementById('investigation').value,
        medicine: document.getElementById('medicine').value,
        nature: document.getElementById('nature').value,
        perception: document.getElementById('perception').value,
        performance: document.getElementById('performance').value,
        persuasion: document.getElementById('persuasion').value,
        religion: document.getElementById('religion').value,
        sleight_of_hand: document.getElementById('sleight_of_hand').value,
        stealth: document.getElementById('stealth').value,
        survival: document.getElementById('survival').value,
      },

      initiative: document.getElementById('initiative').value,
      speed: {
        walk: document.getElementById('speed').value,
      },
      size: document.getElementById('size').value,
      passive_perception: document.getElementById('passive_perception').value,

      actions: [
        {
          name: document.getElementById('col_name0').value,
          attack_bonus: document.getElementById('col_attack_bonus0').value,
          damage_dice: document.getElementById('col_damage_dice0').value,
          desc: document.getElementById('col_desc0').value,
        },
        {
          name: document.getElementById('col_name1').value,
          attack_bonus: document.getElementById('col_attack_bonus1').value,
          damage_dice: document.getElementById('col_damage_dice1').value,
          desc: document.getElementById('col_desc1').value,
        },
        {
          name: document.getElementById('col_name2').value,
          attack_bonus: document.getElementById('col_attack_bonus2').value,
          damage_dice: document.getElementById('col_damage_dice2').value,
          desc: document.getElementById('col_desc2').value,
        },
        {
          name: document.getElementById('col_name3').value,
          attack_bonus: document.getElementById('col_attack_bonus3').value,
          damage_dice: document.getElementById('col_damage_dice3').value,
          desc: document.getElementById('col_desc3').value,
        },
        {
          name: document.getElementById('col_name4').value,
          attack_bonus: document.getElementById('col_attack_bonus4').value,
          damage_dice: document.getElementById('col_damage_dice4').value,
          desc: document.getElementById('col_desc4').value,
        },
        {
          name: document.getElementById('col_name5').value,
          attack_bonus: document.getElementById('col_attack_bonus5').value,
          damage_dice: document.getElementById('col_damage_dice5').value,
          desc: document.getElementById('col_desc5').value,
        },
        {
          name: document.getElementById('col_name6').value,
          attack_bonus: document.getElementById('col_attack_bonus6').value,
          damage_dice: document.getElementById('col_damage_dice6').value,
          desc: document.getElementById('col_desc6').value,
        },        

      ],


      class_features: [
        document.getElementById('class_features1').value,
        document.getElementById('class_features2').value,
      ],

      species_traits: document.getElementById('species_traits').value,
      feats: document.getElementById('feats').value,

    };

    const name = saveData.name.length > 0 ? saveData.name : "noname";
    const fileName = name + "_Lv" + saveData.level + ".json";

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

  const handleBeforeUnload = () => {

    if (document.getElementById('autoSave').checked) {
      exportFile();
    }
  }
  
  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [handleBeforeUnload])

  return (
    <div className="App">
      <div className="AppHeader">
        <button className="AppHeaderSave" onClick={(e) => { exportFile(e) }}>保存</button>
        <input type="file" accept=".json" onChange={(e) => { selectedFile(e) }}></input>
        <label className="AppHeaderAutoSave"><input type="checkbox" id="autoSave" ></input>自動保存</label>
      </div>
      <Sheet data={data} />
    </div>
  );
}

export default App;
