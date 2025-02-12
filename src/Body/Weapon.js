import './Weapon.css';
import { useEffect } from 'react';

function Weapon(props) {

  useEffect(() => {
    if (props.data) {
      props.data.actions.forEach((action, index) => {
        if (index < 7) {
          document.getElementById('col_name' + index).value = action.name;
          document.getElementById('col_attack_bonus' + index).value = action.attack_bonus;
          document.getElementById('col_damage_dice' + index).value = action.damage_dice;
          document.getElementById('col_desc' + index).value = action.desc;
        }
        index++;
      });
    }
  }, [props]);

  const action = (index) => {
    const action = (
      <tr>
        <td className="WeaponTableCol1"><input id={"col_name" + index}></input></td>
        <td className="WeaponTableCol2"><input id={"col_attack_bonus" + index}></input></td>
        <td className="WeaponTableCol3"><input id={"col_damage_dice" + index}></input></td>
        <td className="WeaponTableCol4"><input id={"col_desc" + index}></input></td>
      </tr>
    );

    return (action);
  }

  return (
    <div className="Weapon">
      <div className="WeaponTitle">
      <label>武器 & ダメージ、初級呪文<br></br>(WEAPON & DAMAGE CANTRIPS)</label>
      </div>
      <table className="WeaponTable">
        <tbody>
          <tr>
            <th className="WeaponTableCol1"><label>名前<br></br>(Name)</label></th>
            <th className="WeaponTableCol2"><label>攻撃ボーナス/難易度<br></br>(Atk Bonus/DC)</label></th>
            <th className="WeaponTableCol3"><label>ダメージ & 種別<br></br>(Damage & Type)</label></th>
            <th className="WeaponTableCol4"><label>備考<br></br>(Notes)</label></th>
          </tr>
          {action(0)}
          {action(1)}
          {action(2)}
          {action(3)}
          {action(4)}
          {action(5)}
          {action(6)}
        </tbody>
      </table>

    </div>
  );
}

export default Weapon;
