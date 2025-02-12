import './Ability.css';

function Ability() {

  const abilityItemSet = () => {
    return (
      < div className="AbilityItemSet" >
        <div className="AbilityItemValueSet">
          <input className="AbilityItemModifier"></input>
          <div><label>修正値<br></br>(MODIFIER)</label></div>
        </div>
        <div className="AbilityItemValueSet">
          <input className="AbilityItemScore"></input>
          <div><label>能力値<br></br>(SCORE)</label></div>
        </div>
      </div >
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
            <input className="AbilityItemProficiency"></input>
          </div>
        </div>
        <div className="AbilityItem">
          <div className="AbilityItemCaption">
            <label>筋力 (STRENGTH)</label>
          </div>
          {abilityItemSet()}

          <div className="AbilityItemSavingThrow">
            <div className="AbilityItemSavingThrowItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSavingThrowValue"></input>
              <label>セーヴィング・スロー<br></br>(Saving Throw)</label>
            </div>
          </div>
          <div className="AbilityItemSkill">
            <div className="AbilityItemSkillItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSkillItemValue"></input>
              <label>運動 (Athletics)</label>
            </div>
          </div>

        </div>
        <div className="AbilityItem">
          <div className="AbilityItemCaption">
            <label>敏捷力 (DEXTERITY)</label>
          </div>
          {abilityItemSet()}

          <div className="AbilityItemSavingThrow">
            <div className="AbilityItemSavingThrowItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSavingThrowValue"></input>
              <label>セーヴィング・スロー<br></br>(Saving Throw)</label>
            </div>
          </div>
          <div className="AbilityItemSkill">
            <div className="AbilityItemSkillItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSkillItemValue"></input>
              <label>軽業 (Acrobatics)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSkillItemValue"></input>
              <label>手先の早業 <br></br>(Sleight of Hand)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSkillItemValue"></input>
              <label>隠密 (Stealth)</label>
            </div>
          </div>

        </div>
        <div className="AbilityItem">
          <div className="AbilityItemCaption">
            <label>耐久力 (CONSTITUTION)</label>
          </div>
          {abilityItemSet()}

          <div className="AbilityItemSavingThrow">
            <div className="AbilityItemSavingThrowItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSavingThrowValue"></input>
              <label>セーヴィング・スロー<br></br>(Saving Throw)</label>
            </div>
          </div>
        </div>
        <div className="AbilityItem Inspiration">
          <div className="AbilityItemCaption">
            <label>ヒロイック<br></br>インスピレーション<br></br>(HEROIC INSPIRATION)</label>
          </div>
          <div className="AbilityItemValue">
            <input className="AbilityItemValueCheck" type="checkbox"></input>
          </div>
        </div>
      </div>
      <div className="AbilityRight">
        <div className="AbilityItem">
          <div className="AbilityItemCaption">
            <label>知力 (INTELLIGENCE)</label>
          </div>
          {abilityItemSet()}

          <div className="AbilityItemSavingThrow">
            <div className="AbilityItemSavingThrowItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSavingThrowValue"></input>
              <label>セーヴィング・スロー<br></br>(Saving Throw)</label>
            </div>
          </div>
          <div className="AbilityItemSkill">
            <div className="AbilityItemSkillItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSkillItemValue"></input>
              <label>魔法学 (Arcana)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSkillItemValue"></input>
              <label>歴史 (History)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSkillItemValue"></input>
              <label>操作 (Investigation)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSkillItemValue"></input>
              <label>自然 (Nature)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSkillItemValue"></input>
              <label>宗教 (Religion)</label>
            </div>
          </div>
        </div>
        <div className="AbilityItem">
          <div className="AbilityItemCaption">
            <label>判断力 (WISDOM)</label>
          </div>
          {abilityItemSet()}

          <div className="AbilityItemSavingThrow">
            <div className="AbilityItemSavingThrowItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSavingThrowValue"></input>
              <label>セーヴィング・スロー<br></br>(Saving Throw)</label>
            </div>
          </div>
          <div className="AbilityItemSkill">
            <div className="AbilityItemSkillItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSkillItemValue"></input>
              <label>動物使い <br></br>(Animal Handling)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSkillItemValue"></input>
              <label>看破 (Insight)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSkillItemValue"></input>
              <label>医術 (Medicine)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSkillItemValue"></input>
              <label>知覚 (Perception)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSkillItemValue"></input>
              <label>生存 (Survival)</label>
            </div>
          </div>

        </div>
        <div className="AbilityItem">
          <div className="AbilityItemCaption">
            <label>魅力 (CHARISMA)</label>
          </div>
          {abilityItemSet()}

          <div className="AbilityItemSavingThrow">
            <div className="AbilityItemSavingThrowItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSavingThrowValue"></input>
              <label>セーヴィング・スロー<br></br>(Saving Throw)</label>
            </div>
          </div>
          <div className="AbilityItemSkill">
            <div className="AbilityItemSkillItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSkillItemValue"></input>
              <label>ペテン (Deception)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSkillItemValue"></input>
              <label>威圧 (Intimidation)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSkillItemValue"></input>
              <label>芸能 (Performance)</label>
            </div>
            <div className="AbilityItemSkillItem">
              <input type="checkbox"></input>
              <input className="AbilityItemSkillItemValue"></input>
              <label>説得 (Persuasion)</label>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Ability;
