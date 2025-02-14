import './SpellList.css';
import { useEffect } from 'react';

function SpellList(props) {

  useEffect(() => {
    if (props.data) {
    }
  }, [props]);

  const spellItem = () => {
    return (
      <tr className="SpellListRow">
        <td className="SpellListLevel Sheet2SeparatorR"><input></input></td>
        <td className="SpellListName Sheet2SeparatorR"><input></input></td>
        <td className="SpellListCastingTime Sheet2SeparatorR"><input></input></td>
        <td className="SpellListRange Sheet2SeparatorR"><input></input></td>
        <td className="SpellListButton Sheet2SeparatorR">
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
    for (let index = 0; index < 39; index++) {
      contents.push(spellItem());
    }
    return contents;
  }

  return (
    <div className="SpellList">
    <table>
      <tbody>
        <tr>
          <th colspan="8" className="Sheet2SelectNone">初級呪文 & 準備呪文 (CANTRIPS & PREPARED SPELLS)</th>
        </tr>
        <tr className="SpellListCaption Sheet2SelectNone">
          <td>レベル<br></br>(Level)</td>
          <td>呪文名<br></br>(Name)</td>
          <td>発動時間<br></br>(Casting Time)</td>
          <td>射程<br></br>(Range)</td>
          <td>精神集中, 儀式, 物質要素<br></br>(Concentration, Ritual<br></br>& Required Material)</td>
          <td>備考<br></br>(Notes)</td>
        </tr>
        {spellItems()}
      </tbody>
    </table>
  </div>
);
}

export default SpellList;
