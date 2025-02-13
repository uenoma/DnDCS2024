import './Sheet2.css';
import { useEffect } from 'react';

function Sheet2(props) {

  useEffect(() => {
    if (props.data) {
    }
  }, [props]);

  const spellItem = () => {
    return (
      <tr className="Sheet2SpellListRow">
        <td className="Sheet2SpellListLevel Sheet2SeparatorR"><input></input></td>
        <td className="Sheet2SpellListName Sheet2SeparatorR"><input></input></td>
        <td className="Sheet2SpellListCastingTime Sheet2SeparatorR"><input></input></td>
        <td className="Sheet2SpellListRange Sheet2SeparatorR"><input></input></td>
        <td className="Sheet2SpellListButton Sheet2SeparatorR" colspan="3">
          <label><input type="checkbox"></input>C</label>
          <label><input type="checkbox"></input>R</label>
          <label><input type="checkbox"></input>M</label>
        </td>
        <td className="Sheet2SpellLisNotes"><input></input></td>
      </tr>
    );

  }

  const spellItems = () => {
    var contents = [];
    for (let index = 0; index < 30; index++) {
      contents.push(spellItem());
    }
    return contents;
  }

  return (
    <div className="Sheet2">
      <div className="Sheet2Left">
        <div className="Sheet2Upper">
          <div className="Sheet2Ability">
            <table>
              <tbody>
                <tr>
                  <th colspan="2" className="Sheet2SelectNone">呪文発動能力<br></br>(SPELLCASTING ABILITY)</th>
                </tr>
                <tr>
                  <td><input></input></td>
                  <td className="Sheet2AbilityCaption Sheet2SelectNone">呪文発動能力修正値<br></br>(SPELLCASTING MODIFIER)</td>
                </tr>
                <tr>
                  <td><input></input></td>
                  <td className="Sheet2AbilityCaption Sheet2SelectNone">呪文セーヴ難易度<br></br>(SPELLCASTING SAVE DC)</td>
                </tr>
                <tr>
                  <td><input></input></td>
                  <td className="Sheet2AbilityCaption Sheet2SelectNone">呪文攻撃ボーナス<br></br>(SPELLCASTING ATTACK BONUS)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div className="Sheet2Logo">
            </div>
            <div className="Sheet2Slot">
              <table>
                <tbody>
                  <tr>
                    <th colspan="9" className="Sheet2SelectNone">
                      呪文スロット<br></br>(SPELL SLOTS)
                    </th>
                  </tr>
                  <tr className="Sheet2SlotItems Sheet2SelectNone">
                    <td></td>
                    <td>合計<br></br>(Total)</td>
                    <td className="Sheet2SlotColTail">消費<br></br>(Expand)</td>
                    <td></td>
                    <td>合計<br></br>(Total)</td>
                    <td className="Sheet2SlotColTail">消費<br></br>(Expand)</td>
                    <td></td>
                    <td>合計<br></br>(Total)</td>
                    <td className="Sheet2SlotColTail">消費<br></br>(Expand)</td>
                  </tr>
                  <tr className="Sheet2SlotItems">
                    <td className="Sheet2SlotLevel">1レベル<br></br>(LEVEL1)</td>
                    <td className="Sheet2SlotTotal"><input></input></td>
                    <td className="Sheet2SlotColTail">
                      <input type="checkbox"></input><input type="checkbox"></input><input type="checkbox"></input><input type="checkbox"></input>
                    </td>
                    <td className="Sheet2SlotLevel">4レベル<br></br>(LEVEL4)</td>
                    <td className="Sheet2SlotTotal"><input></input></td>
                    <td className="Sheet2SlotColTail">
                      <input type="checkbox"></input><input type="checkbox"></input><input type="checkbox"></input>
                    </td>
                    <td className="Sheet2SlotLevel">7レベル<br></br>(LEVEL7)</td>
                    <td className="Sheet2SlotTotal"><input></input></td>
                    <td className="Sheet2SlotColTail">
                      <input type="checkbox"></input><input type="checkbox"></input>
                    </td>
                  </tr>
                  <tr className="Sheet2SlotItems">
                    <td className="Sheet2SlotLevel">2レベル<br></br>(LEVEL2)</td>
                    <td className="Sheet2SlotTotal"><input></input></td>
                    <td className="Sheet2SlotColTail">
                      <input type="checkbox"></input><input type="checkbox"></input><input type="checkbox"></input>
                    </td>
                    <td className="Sheet2SlotLevel">5レベル<br></br>(LEVEL5)</td>
                    <td className="Sheet2SlotTotal"><input></input></td>
                    <td className="Sheet2SlotColTail">
                      <input type="checkbox"></input><input type="checkbox"></input><input type="checkbox"></input>
                    </td>
                    <td className="Sheet2SlotLevel">8レベル<br></br>(LEVEL8)</td>
                    <td className="Sheet2SlotTotal"><input></input></td>
                    <td className="Sheet2SlotColTail">
                      <input type="checkbox"></input>
                    </td>
                  </tr>
                  <tr className="Sheet2SlotItems">
                    <td className="Sheet2SlotLevel">3レベル<br></br>(LEVEL3)</td>
                    <td className="Sheet2SlotTotal"><input></input></td>
                    <td className="Sheet2SlotColTail">
                      <input type="checkbox"></input><input type="checkbox"></input><input type="checkbox"></input>
                    </td>
                    <td className="Sheet2SlotLevel">6レベル<br></br>(LEVEL6)</td>
                    <td className="Sheet2SlotTotal"><input></input></td>
                    <td className="Sheet2SlotColTail">
                      <input type="checkbox"></input><input type="checkbox"></input>
                    </td>
                    <td className="Sheet2SlotLevel">9レベル<br></br>(LEVEL9)</td>
                    <td className="Sheet2SlotTotal"><input></input></td>
                    <td className="Sheet2SlotColTail">
                      <input type="checkbox"></input>
                    </td>
                  </tr>
                </tbody>

              </table>
            </div>
          </div>
        </div>
        <div className="Sheet2Lower">
          <div className="Sheet2SpellList">
            <table>
              <tbody>
                <tr>
                  <th colspan="8" className="Sheet2SelectNone">初級呪文 & 準備呪文 (CANTRIPS & PREPARED SPELLS)</th>
                </tr>
                <tr className="Sheet2SpellListCaption Sheet2SelectNone">
                  <td>レベル<br></br>(Level)</td>
                  <td>呪文名<br></br>(Name)</td>
                  <td>発動時間<br></br>(Casting Time)</td>
                  <td>射程<br></br>(Range)</td>
                  <td colspan="3">精神集中, 儀式, 物質要素<br></br>(Concentration, Ritual<br></br>& Required Material)</td>
                  <td>備考<br></br>(Notes)</td>
                </tr>
                {spellItems()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="Sheet2Right">
        <div className="Appearance">
          <div className="AppearanceTitle">
            <label>特技 (FEATS)</label>
          </div>
          <div className="AppearanceContent">
            <textarea id="appearance"></textarea>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Sheet2;
