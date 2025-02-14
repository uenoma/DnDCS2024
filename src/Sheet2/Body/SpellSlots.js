import './SpellSlots.css';
import { useEffect } from 'react';

function SpellSlots(props) {

  useEffect(() => {
    if (props.data && props.data.spell_slots) {
      const slotNum = [4, 3, 3, 3, 3, 2, 2, 1, 1];


      slotNum.forEach((num, index) => {
        const name = "SpellSlotsLv" + (index + 1);

        // statblockの場合は読み飛ばす
        if (props.data.spell_slots[index] && !props.data.spell_slots[index].limit) {

          document.getElementById(name).value = props.data.spell_slots[index].num;
          for (let numIndex = 0; numIndex < num; numIndex++) {
            document.getElementById(name + "_" + (numIndex + 1)).checked = props.data.spell_slots[index].checked[numIndex];
          }
        }
        index++;
      });
    }
  }, [props]);

  return (
    <div className="SpellSlots">
      <table>
        <tbody>
          <tr>
            <th colSpan="9" className="Sheet2SelectNone">
              呪文スロット<br></br>(SPELL SLOTS)
            </th>
          </tr>
          <tr className="SpellSlotsItems Sheet2SelectNone">
            <td></td>
            <td>合計<br></br>(Total)</td>
            <td className="SpellSlotsColTail">消費<br></br>(Expand)</td>
            <td></td>
            <td>合計<br></br>(Total)</td>
            <td className="SpellSlotsColTail">消費<br></br>(Expand)</td>
            <td></td>
            <td>合計<br></br>(Total)</td>
            <td className="SpellSlotsColTail">消費<br></br>(Expand)</td>
          </tr>
          <tr className="SpellSlotsItems">
            <td className="SpellSlotsLevel">1レベル<br></br>(LEVEL1)</td>
            <td className="SpellSlotsTotal"><input id="SpellSlotsLv1"></input></td>
            <td className="SpellSlotsColTail">
              <input type="checkbox" id="SpellSlotsLv1_1"></input><input type="checkbox" id="SpellSlotsLv1_2"></input><input type="checkbox" id="SpellSlotsLv1_3"></input><input type="checkbox" id="SpellSlotsLv1_4"></input>
            </td>
            <td className="SpellSlotsLevel">4レベル<br></br>(LEVEL4)</td>
            <td className="SpellSlotsTotal"><input id="SpellSlotsLv4"></input></td>
            <td className="SpellSlotsColTail">
              <input type="checkbox" id="SpellSlotsLv4_1"></input><input type="checkbox" id="SpellSlotsLv4_2"></input><input type="checkbox" id="SpellSlotsLv4_3"></input>
            </td>
            <td className="SpellSlotsLevel">7レベル<br></br>(LEVEL7)</td>
            <td className="SpellSlotsTotal"><input id="SpellSlotsLv7"></input></td>
            <td className="SpellSlotsColTail">
              <input type="checkbox" id="SpellSlotsLv7_1"></input><input type="checkbox" id="SpellSlotsLv7_2"></input>
            </td>
          </tr>
          <tr className="SpellSlotsItems">
            <td className="SpellSlotsLevel">2レベル<br></br>(LEVEL2)</td>
            <td className="SpellSlotsTotal"><input id="SpellSlotsLv2"></input></td>
            <td className="SpellSlotsColTail">
              <input type="checkbox" id="SpellSlotsLv2_1"></input><input type="checkbox" id="SpellSlotsLv2_2"></input><input type="checkbox" id="SpellSlotsLv2_3"></input>
            </td>
            <td className="SpellSlotsLevel">5レベル<br></br>(LEVEL5)</td>
            <td className="SpellSlotsTotal"><input id="SpellSlotsLv5"></input></td>
            <td className="SpellSlotsColTail">
              <input type="checkbox" id="SpellSlotsLv5_1"></input><input type="checkbox" id="SpellSlotsLv5_2"></input><input type="checkbox" id="SpellSlotsLv5_3"></input>
            </td>
            <td className="SpellSlotsLevel">8レベル<br></br>(LEVEL8)</td>
            <td className="SpellSlotsTotal"><input id="SpellSlotsLv8"></input></td>
            <td className="SpellSlotsColTail">
              <input type="checkbox" id="SpellSlotsLv8_1"></input>
            </td>
          </tr>
          <tr className="SpellSlotsItems">
            <td className="SpellSlotsLevel">3レベル<br></br>(LEVEL3)</td>
            <td className="SpellSlotsTotal"><input id="SpellSlotsLv3"></input></td>
            <td className="SpellSlotsColTail">
              <input type="checkbox" id="SpellSlotsLv3_1"></input><input type="checkbox" id="SpellSlotsLv3_2"></input><input type="checkbox" id="SpellSlotsLv3_3"></input>
            </td>
            <td className="SpellSlotsLevel">6レベル<br></br>(LEVEL6)</td>
            <td className="SpellSlotsTotal"><input id="SpellSlotsLv6"></input></td>
            <td className="SpellSlotsColTail">
              <input type="checkbox" id="SpellSlotsLv6_1"></input><input type="checkbox" id="SpellSlotsLv6_2"></input>
            </td>
            <td className="SpellSlotsLevel">9レベル<br></br>(LEVEL9)</td>
            <td className="SpellSlotsTotal"><input id="SpellSlotsLv9"></input></td>
            <td className="SpellSlotsColTail">
              <input type="checkbox" id="SpellSlotsLv9_1"></input>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  );
}

export default SpellSlots;
