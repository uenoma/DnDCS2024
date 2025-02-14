import './SpellCastingAbility.css';
import { useEffect } from 'react';

function SpellCastingAbility(props) {

  useEffect(() => {
    if (props.data && props.data.spell_ability) {
      document.getElementById("SpellCastingModifier").value = props.data.spell_ability.modifier;
      document.getElementById("SpellCastingSaveDC").value = props.data.spell_ability.save_dc;
      document.getElementById("SpellCastingAttackBonus").value = props.data.spell_ability.attack_bonus;
    }
  }, [props]);


  return (
    <div className="SpellCastingAbility">
      <table>
        <tbody>
          <tr>
            <th colSpan="2" className="Sheet2SelectNone">呪文発動能力<br></br>(SPELLCASTING ABILITY)</th>
          </tr>
          <tr>
            <td><input id="SpellCastingModifier"></input></td>
            <td className="SpellCastingAbilityCaption Sheet2SelectNone">呪文発動能力修正値<br></br>(SPELLCASTING MODIFIER)</td>
          </tr>
          <tr>
            <td><input id="SpellCastingSaveDC"></input></td>
            <td className="SpellCastingAbilityCaption Sheet2SelectNone">呪文セーヴ難易度<br></br>(SPELLCASTING SAVE DC)</td>
          </tr>
          <tr>
            <td><input id="SpellCastingAttackBonus"></input></td>
            <td className="SpellCastingAbilityCaption Sheet2SelectNone">呪文攻撃ボーナス<br></br>(SPELLCASTING ATTACK BONUS)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SpellCastingAbility;
