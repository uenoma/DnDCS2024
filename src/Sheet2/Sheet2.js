import './Sheet2.css';
import SpellCastingAbility from './Body/SpellCastingAbility';
import SpellList from './Body/SpellList';
import SpellSlots from './Body/SpellSlots';
import Appearance from './Body/Appearance';
import { useEffect } from 'react';
import Backstory from './Body/Backstory';
import Languages from './Body/Languages';
import Equipment from './Body/Equipment';
import Coins from './Body/Coins';

function Sheet2(props) {

  useEffect(() => {
    if (props.data) {
    }
  }, [props]);

  return (
    <div className="Sheet2">
      <div className="Sheet2Left">
        <div className="Sheet2Upper">
          <SpellCastingAbility data={props.data}></SpellCastingAbility>
          <div className="Sheet2UpperRight">
            <div className="Sheet2Logo">
              <label>DUNGEONS & DRAGONS</label>             
            </div>
            <SpellSlots data={props.data}></SpellSlots>
          </div>
        </div>
        <div className="Sheet2Lower">
          <SpellList data={props.data}></SpellList>
        </div>
      </div>
      <div className="Sheet2Right">
        <Appearance data={props.data}></Appearance>
        <Backstory data={props.data}></Backstory>
        <Languages data={props.data}></Languages>
        <Equipment data={props.data}></Equipment>
        <Coins data={props.data}></Coins>
      </div>
    </div>
  );
}

export default Sheet2;
