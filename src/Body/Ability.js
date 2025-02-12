import './Ability.css';
import { useEffect } from 'react';

function Ability(props) {

  useEffect(() => {
    if (props.data) {

      document.getElementById("score_strength").value = props.data.stats.strength;
      document.getElementById("score_dexterity").value = props.data.stats.dexterity;
      document.getElementById("score_constitution").value = props.data.stats.constitution;
      document.getElementById("score_intelligence").value = props.data.stats.intelligence;
      document.getElementById("score_wisdom").value = props.data.stats.wisdom;
      document.getElementById("score_charisma").value = props.data.stats.charisma;

      document.getElementById("strength_save_checked").checked = props.data.saving_throws.strength_save_checked;
      document.getElementById("dexterity_save_checked").checked = props.data.saving_throws.dexterity_save_checked;
      document.getElementById("constitution_save_checked").checked = props.data.saving_throws.constitution_save_checked;
      document.getElementById("intelligence_save_checked").checked = props.data.saving_throws.intelligence_save_checked;
      document.getElementById("wisdom_save_checked").checked = props.data.saving_throws.wisdom_save_checked;
      document.getElementById("charisma_save_checked").checked = props.data.saving_throws.charisma_save_checked;

      document.getElementById("strength_save").value = props.data.saving_throws.strength_save;
      document.getElementById("dexterity_save").value = props.data.saving_throws.dexterity_save;
      document.getElementById("constitution_save").value = props.data.saving_throws.constitution_save;
      document.getElementById("intelligence_save").value = props.data.saving_throws.intelligence_save;
      document.getElementById("wisdom_save").value = props.data.saving_throws.wisdom_save;
      document.getElementById("charisma_save").value = props.data.saving_throws.charisma_save;

      document.getElementById("proficiency_bonus").value = props.data.proficiency_bonus;
      document.getElementById("inspiration").checked = props.data.inspiration;

      document.getElementById("acrobatics_checked").checked = props.data.skills.acrobatics_checked;
      document.getElementById("animal_handling_checked").checked = props.data.skills.animal_handling_checked;
      document.getElementById("arcana_checked").checked = props.data.skills.arcana_checked;
      document.getElementById("athletics_checked").checked = props.data.skills.athletics_checked;
      document.getElementById("deception_checked").checked = props.data.skills.deception_checked;
      document.getElementById("history_checked").checked = props.data.skills.history_checked;
      document.getElementById("insight_checked").checked = props.data.skills.insight_checked;
      document.getElementById("intimidation_checked").checked = props.data.skills.intimidation_checked;
      document.getElementById("investigation_checked").checked = props.data.skills.investigation_checked;
      document.getElementById("medicine_checked").checked = props.data.skills.medicine_checked;
      document.getElementById("nature_checked").checked = props.data.skills.nature_checked;
      document.getElementById("perception_checked").checked = props.data.skills.perception_checked;
      document.getElementById("performance_checked").checked = props.data.skills.performance_checked;
      document.getElementById("persuasion_checked").checked = props.data.skills.persuasion_checked;
      document.getElementById("religion_checked").checked = props.data.skills.religion_checked;
      document.getElementById("sleight_of_hand_checked").checked = props.data.skills.sleight_of_hand_checked;
      document.getElementById("stealth_checked").checked = props.data.skills.stealth_checked;
      document.getElementById("survival_checked").checked = props.data.skills.survival_checked;

      document.getElementById("acrobatics").value = props.data.skills.acrobatics;
      document.getElementById("animal_handling").value = props.data.skills.animal_handling;
      document.getElementById("arcana").value = props.data.skills.arcana;
      document.getElementById("athletics").value = props.data.skills.athletics;
      document.getElementById("deception").value = props.data.skills.deception;
      document.getElementById("history").value = props.data.skills.history;
      document.getElementById("insight").value = props.data.skills.insight;
      document.getElementById("intimidation").value = props.data.skills.intimidation;
      document.getElementById("investigation").value = props.data.skills.investigation;
      document.getElementById("medicine").value = props.data.skills.medicine;
      document.getElementById("nature").value = props.data.skills.nature;
      document.getElementById("perception").value = props.data.skills.perception;
      document.getElementById("performance").value = props.data.skills.performance;
      document.getElementById("persuasion").value = props.data.skills.persuasion;
      document.getElementById("religion").value = props.data.skills.religion;
      document.getElementById("sleight_of_hand").value = props.data.skills.sleight_of_hand;
      document.getElementById("stealth").value = props.data.skills.stealth;
      document.getElementById("survival").value = props.data.skills.survival;


    }
    updateModifier();
  }, [props]);

  const changeScore = (e, type) => {
    document.getElementById("modifier_" + type).value = modifier(document.getElementById("score_" + type).value);
  }

  const modifier = (score) => {

    if (!score) {
      return "";
    }
    const value = Math.floor((score - 10) / 2);
    return value > 0 ? "+" + value : value;
  }

  const updateModifier = () => {
    document.getElementById("modifier_strength").value = modifier(document.getElementById("score_strength").value);
    document.getElementById("modifier_dexterity").value = modifier(document.getElementById("score_dexterity").value);
    document.getElementById("modifier_constitution").value = modifier(document.getElementById("score_constitution").value);
    document.getElementById("modifier_intelligence").value = modifier(document.getElementById("score_intelligence").value);
    document.getElementById("modifier_wisdom").value = modifier(document.getElementById("score_wisdom").value);
    document.getElementById("modifier_charisma").value = modifier(document.getElementById("score_charisma").value);
  }

  const abilityItemSet = (type) => {
    return (
      < div className="AbilityItemSet" >
        <div className="AbilityItemValueSet">
          <input className="AbilityItemModifier" id={"modifier_" + type}></input>
          <div><label>修正値<br></br>(MODIFIER)</label></div>
        </div>
        <div className="AbilityItemValueSet">
          <input className="AbilityItemScore" id={"score_" + type} onChange={(e) => changeScore(e, type)}></input>
          <div><label>能力値<br></br>(SCORE)</label></div>
        </div>
      </div >
    );
  }

  const savingThrow = (type) => {
    return (
      <div className="AbilityItemSavingThrow">
        <div className="AbilityItemSavingThrowItem">
          <input type="checkbox" id={type + "_save_checked"}></input>
          <input className="AbilityItemSavingThrowValue" id={type + "_save"}></input>
          <label>セーヴィング・スロー<br></br>(Saving Throw)</label>
        </div>
      </div>
    );

  }

  return (
    <div className="Ability">
      <div className="AbilityLeft">
        <div className="AbilityItem">
          <div className="AbilityItemCaption">
            <label>習熟ボーナス <br></br>(PROFICIENCY BONUS)</label>
          </div>
          <div className="AbilityItemValue">
            <input className="AbilityItemProficiency" id="proficiency_bonus"></input>
          </div>
        </div>
        <div className="AbilityItem">
          <div className="AbilityItemCaption">
            <label>筋力 (STRENGTH)</label>
          </div>
          {abilityItemSet("strength")}
          {savingThrow("strength")}

          <div className="AbilityItemSkill">
            <div className="AbilityItemSkillItem">
              <input type="checkbox" id="athletics_checked"></input>
              <input className="AbilityItemSkillItemValue" id="athletics"></input>
              <label>運動 (Athletics)</label>
            </div>
          </div>

        </div>
        <div className="AbilityItem">
          <div className="AbilityItemCaption">
            <label>敏捷力 (DEXTERITY)</label>
          </div>
          {abilityItemSet("dexterity")}
          {savingThrow("dexterity")}

          <div className="AbilityItemSkill">
            <div className="AbilityItemSkillItem">
              <input type="checkbox" id="acrobatics_checked"></input>
              <input className="AbilityItemSkillItemValue" id="acrobatics"></input>
              <label>軽業 (Acrobatics)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox" id="sleight_of_hand_checked"></input>
              <input className="AbilityItemSkillItemValue" id="sleight_of_hand"></input>
              <label>手先の早業 <br></br>(Sleight of Hand)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox" id="stealth_checked"></input>
              <input className="AbilityItemSkillItemValue" id="stealth"></input>
              <label>隠密 (Stealth)</label>
            </div>
          </div>

        </div>
        <div className="AbilityItem">
          <div className="AbilityItemCaption">
            <label>耐久力 (CONSTITUTION)</label>
          </div>
          {abilityItemSet("constitution")}
          {savingThrow("constitution")}
        </div>
        <div className="AbilityItem Inspiration">
          <div className="AbilityItemCaption">
            <label>ヒロイック<br></br>インスピレーション<br></br>(HEROIC INSPIRATION)</label>
          </div>
          <div className="AbilityItemValue">
            <input className="AbilityItemValueCheck" type="checkbox" id="inspiration"></input>
          </div>
        </div>
      </div>
      <div className="AbilityRight">
        <div className="AbilityItem">
          <div className="AbilityItemCaption">
            <label>知力 (INTELLIGENCE)</label>
          </div>
          {abilityItemSet("intelligence")}
          {savingThrow("intelligence")}
          <div className="AbilityItemSkill">
            <div className="AbilityItemSkillItem">
              <input type="checkbox" id="arcana_checked"></input>
              <input className="AbilityItemSkillItemValue" id="arcana"></input>
              <label>魔法学 (Arcana)</label>
            </div>
            <div className="AbilityItemSkillItem">
            <input type="checkbox" id="history_checked"></input>
              <input className="AbilityItemSkillItemValue" id="history"></input>
              <label>歴史 (History)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox" id="investigation_checked"></input>
              <input className="AbilityItemSkillItemValue" id="investigation"></input>
              <label>捜査 (Investigation)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox" id="nature_checked"></input>
              <input className="AbilityItemSkillItemValue" id="nature"></input>
              <label>自然 (Nature)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox" id="religion_checked"></input>
              <input className="AbilityItemSkillItemValue" id="religion"></input>
              <label>宗教 (Religion)</label>
            </div>
          </div>
        </div>
        <div className="AbilityItem">
          <div className="AbilityItemCaption">
            <label>判断力 (WISDOM)</label>
          </div>
          {abilityItemSet("wisdom")}
          {savingThrow("wisdom")}
          <div className="AbilityItemSkill">
            <div className="AbilityItemSkillItem">
              <input type="checkbox" id="animal_handling_checked"></input>
              <input className="AbilityItemSkillItemValue" id="animal_handling"></input>
              <label>動物使い <br></br>(Animal Handling)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox" id="insight_checked"></input>
              <input className="AbilityItemSkillItemValue" id="insight"></input>
              <label>看破 (Insight)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox" id="medicine_checked"></input>
              <input className="AbilityItemSkillItemValue" id="medicine"></input>
              <label>医術 (Medicine)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox" id="perception_checked"></input>
              <input className="AbilityItemSkillItemValue" id="perception"></input>
              <label>知覚 (Perception)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox" id="survival_checked"></input>
              <input className="AbilityItemSkillItemValue" id="survival"></input>
              <label>生存 (Survival)</label>
            </div>
          </div>

        </div>
        <div className="AbilityItem">
          <div className="AbilityItemCaption">
            <label>魅力 (CHARISMA)</label>
          </div>
          {abilityItemSet("charisma")}
          {savingThrow("charisma")}
          <div className="AbilityItemSkill">
            <div className="AbilityItemSkillItem">
              <input type="checkbox" id="deception_checked"></input>
              <input className="AbilityItemSkillItemValue" id="deception"></input>
              <label>ペテン (Deception)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox" id="intimidation_checked"></input>
              <input className="AbilityItemSkillItemValue" id="intimidation"></input>
              <label>威圧 (Intimidation)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox" id="performance_checked"></input>
              <input className="AbilityItemSkillItemValue" id="performance"></input>
              <label>芸能 (Performance)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox" id="persuasion_checked"></input>
              <input className="AbilityItemSkillItemValue" id="persuasion"></input>
              <label>説得 (Persuasion)</label>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Ability;
