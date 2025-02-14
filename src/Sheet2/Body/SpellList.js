import './SpellList.css';
import { useEffect } from 'react';

function SpellList(props) {

  const sSpellNum = 39;

  useEffect(() => {
    if (props.data) {
      for(let index = 0; index < sSpellNum; index++) {

        if (props.data.spell_list) {
          document.getElementById("SpellLevel" + index).value = props.data.spell_list[index].level;
          document.getElementById("SpellName" + index).value = props.data.spell_list[index].name;
          document.getElementById("SpellCastingTime" + index).value = props.data.spell_list[index].casting_time;
          document.getElementById("SpellRange" + index).value = props.data.spell_list[index].range;
          document.getElementById("SpellC" + index).checked = props.data.spell_list[index].c;
          document.getElementById("SpellR" + index).checked = props.data.spell_list[index].r;
          document.getElementById("SpellM" + index).checked = props.data.spell_list[index].m;
          document.getElementById("SpellNotes" + index).value = props.data.spell_list[index].notes;
        }
      }
    }
  }, [props]);

  const spellItem = (index) => {
    return (
      <tr className="SpellListRow">
        <td className="SpellListLevel Sheet2SeparatorR"><input id={"SpellLevel" + index}></input></td>
        <td className="SpellListName Sheet2SeparatorR"><input id={"SpellName" + index}></input></td>
        <td className="SpellListCastingTime Sheet2SeparatorR"><input id={"SpellCastingTime" + index}></input></td>
        <td className="SpellListRange Sheet2SeparatorR"><input id={"SpellRange" + index}></input></td>
        <td className="SpellListButton Sheet2SeparatorR">
          <label><input type="checkbox" id={"SpellC" + index}></input>C</label>
          <label><input type="checkbox" id={"SpellR" + index}></input>R</label>
          <label><input type="checkbox" id={"SpellM" + index}></input>M</label>
        </td>
        <td className="Sheet2SpellLisNotes"><input id={"SpellNotes" + index}></input></td>
      </tr>
    );

  }

  const spellItems = () => {
    var contents = [];
    for (let index = 0; index < sSpellNum; index++) {
      contents.push(spellItem(index));
    }
    return contents;
  }

  return (
    <div className="SpellList">
    <table>
      <tbody>
        <tr>
          <th colSpan="6" className="Sheet2SelectNone">初級呪文 & 準備呪文 (CANTRIPS & PREPARED SPELLS)</th>
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
