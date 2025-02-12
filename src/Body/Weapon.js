import './Weapon.css';

function Weapon() {
  return (
    <div className="Weapon">
      <div className="WeaponTitle">
      <label>武器 & ダメージ、初級呪文<br></br>(WEAPON & DAMAGE CANTRIPS)</label>
      </div>
      <table className="WeaponTable">
        <tr>
          <th className="WeaponTableCol1"><label>名前<br></br>(Name)</label></th>
          <th className="WeaponTableCol2"><label>攻撃ボーナス/難易度<br></br>(Atk Bonus/DC)</label></th>
          <th className="WeaponTableCol3"><label>ダメージ & 種別<br></br>(Damage & Type)</label></th>
          <th className="WeaponTableCol4"><label>備考<br></br>(Notes)</label></th>
        </tr>
        <tr>
          <td className="WeaponTableCol1"><input></input></td>
          <td className="WeaponTableCol2"><input></input></td>
          <td className="WeaponTableCol3"><input></input></td>
          <td className="WeaponTableCol4"><input></input></td>
        </tr>
        <tr>
          <td className="WeaponTableCol1"><input></input></td>
          <td className="WeaponTableCol2"><input></input></td>
          <td className="WeaponTableCol3"><input></input></td>
          <td className="WeaponTableCol4"><input></input></td>
        </tr>
        <tr>
          <td className="WeaponTableCol1"><input></input></td>
          <td className="WeaponTableCol2"><input></input></td>
          <td className="WeaponTableCol3"><input></input></td>
          <td className="WeaponTableCol4"><input></input></td>
        </tr>
        <tr>
          <td className="WeaponTableCol1"><input></input></td>
          <td className="WeaponTableCol2"><input></input></td>
          <td className="WeaponTableCol3"><input></input></td>
          <td className="WeaponTableCol4"><input></input></td>
        </tr>
        <tr>
          <td className="WeaponTableCol1"><input></input></td>
          <td className="WeaponTableCol2"><input></input></td>
          <td className="WeaponTableCol3"><input></input></td>
          <td className="WeaponTableCol4"><input></input></td>
        </tr>
        <tr>
          <td className="WeaponTableCol1"><input></input></td>
          <td className="WeaponTableCol2"><input></input></td>
          <td className="WeaponTableCol3"><input></input></td>
          <td className="WeaponTableCol4"><input></input></td>
        </tr>
        <tr>
          <td className="WeaponTableCol1"><input></input></td>
          <td className="WeaponTableCol2"><input></input></td>
          <td className="WeaponTableCol3"><input></input></td>
          <td className="WeaponTableCol4"><input></input></td>
        </tr>
      </table>

    </div>
  );
}

export default Weapon;
