import './SpellCastingAbility.css';
import { useEffect } from 'react';

function SpellCastingAbility(props) {

  useEffect(() => {
    if (props.data) {
    }
  }, [props]);


  return (
    <div className="SpellCastingAbility">
      <table>
        <tbody>
          <tr>
            <th colspan="2" className="Sheet2SelectNone">呪文発動能力<br></br>(SPELLCASTING ABILITY)</th>
          </tr>
          <tr>
            <td><input></input></td>
            <td className="SpellCastingAbilityCaption Sheet2SelectNone">呪文発動能力修正値<br></br>(SPELLCASTING MODIFIER)</td>
          </tr>
          <tr>
            <td><input></input></td>
            <td className="SpellCastingAbilityCaption Sheet2SelectNone">呪文セーヴ難易度<br></br>(SPELLCASTING SAVE DC)</td>
          </tr>
          <tr>
            <td><input></input></td>
            <td className="SpellCastingAbilityCaption Sheet2SelectNone">呪文攻撃ボーナス<br></br>(SPELLCASTING ATTACK BONUS)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SpellCastingAbility;
