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
          <SpellCastingAbility></SpellCastingAbility>
          <div>
            <div className="Sheet2Logo">
              <label>DUNGEONS & DRAGONS</label>             
            </div>
            <SpellSlots></SpellSlots>
          </div>
        </div>
        <div className="Sheet2Lower">
          <SpellList></SpellList>
        </div>
      </div>
      <div className="Sheet2Right">
        <Appearance></Appearance>
        <Backstory></Backstory>
        <Languages></Languages>
        <Equipment></Equipment>
        <Coins></Coins>
      </div>
    </div>
  );
}

export default Sheet2;
