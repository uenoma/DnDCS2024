import './SpellSlots.css';
import { useEffect } from 'react';

function SpellSlots(props) {

  useEffect(() => {
    if (props.data) {
    }
  }, [props]);


  return (
    <div className="SpellSlots">
      <table>
        <tbody>
          <tr>
            <th colspan="9" className="Sheet2SelectNone">
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
            <td className="SpellSlotsTotal"><input></input></td>
            <td className="SpellSlotsColTail">
              <input type="checkbox"></input><input type="checkbox"></input><input type="checkbox"></input><input type="checkbox"></input>
            </td>
            <td className="SpellSlotsLevel">4レベル<br></br>(LEVEL4)</td>
            <td className="SpellSlotsTotal"><input></input></td>
            <td className="SpellSlotsColTail">
              <input type="checkbox"></input><input type="checkbox"></input><input type="checkbox"></input>
            </td>
            <td className="SpellSlotsLevel">7レベル<br></br>(LEVEL7)</td>
            <td className="SpellSlotsTotal"><input></input></td>
            <td className="SpellSlotsColTail">
              <input type="checkbox"></input><input type="checkbox"></input>
            </td>
          </tr>
          <tr className="SpellSlotsItems">
            <td className="SpellSlotsLevel">2レベル<br></br>(LEVEL2)</td>
            <td className="SpellSlotsTotal"><input></input></td>
            <td className="SpellSlotsColTail">
              <input type="checkbox"></input><input type="checkbox"></input><input type="checkbox"></input>
            </td>
            <td className="SpellSlotsLevel">5レベル<br></br>(LEVEL5)</td>
            <td className="SpellSlotsTotal"><input></input></td>
            <td className="SpellSlotsColTail">
              <input type="checkbox"></input><input type="checkbox"></input><input type="checkbox"></input>
            </td>
            <td className="SpellSlotsLevel">8レベル<br></br>(LEVEL8)</td>
            <td className="SpellSlotsTotal"><input></input></td>
            <td className="SpellSlotsColTail">
              <input type="checkbox"></input>
            </td>
          </tr>
          <tr className="SpellSlotsItems">
            <td className="SpellSlotsLevel">3レベル<br></br>(LEVEL3)</td>
            <td className="SpellSlotsTotal"><input></input></td>
            <td className="SpellSlotsColTail">
              <input type="checkbox"></input><input type="checkbox"></input><input type="checkbox"></input>
            </td>
            <td className="SpellSlotsLevel">6レベル<br></br>(LEVEL6)</td>
            <td className="SpellSlotsTotal"><input></input></td>
            <td className="SpellSlotsColTail">
              <input type="checkbox"></input><input type="checkbox"></input>
            </td>
            <td className="SpellSlotsLevel">9レベル<br></br>(LEVEL9)</td>
            <td className="SpellSlotsTotal"><input></input></td>
            <td className="SpellSlotsColTail">
              <input type="checkbox"></input>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  );
}

export default SpellSlots;
