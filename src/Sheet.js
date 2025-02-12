import './Sheet.css';
import BasicInfo from './Header/BasicInfo';
import ArmorClass from './Header/ArmorClass';
import Level from './Header/Level';
import Status from './Header/Status';
import Ability from './Body/Ability';
import Proficiencies from './Body/Proficiencies';
import Weapon from './Body/Weapon';
import Features from './Body/Features';
import SpeciesTraits from './Body/SpeciesTraits';
import Feats from './Body/Feats';
import { useEffect } from 'react';

function Sheet(props) {

  useEffect(() => {
    if (props.data) {
      document.getElementById('initiative').value = props.data.initiative;
      document.getElementById('speed').value = props.data.speed.walk;
      document.getElementById('size').value = props.data.size;
      document.getElementById('passive_perception').value = props.data.passive_perception;
    }
  }, [props]);

  return (
    <div className="Sheet">
      <div className="SheetHeader">
        <BasicInfo data={props.data} />
        <Level data={props.data} />
        <ArmorClass data={props.data} />
        <Status data={props.data} />
      </div>
      <div className="SheetSeparator">
        <label>Dungeons & Dragons</label>
      </div>
      <div className="SheetBody">
        <div className="SheetBodyLeft">
          <Ability data={props.data} ></Ability>
          <Proficiencies data={props.data} ></Proficiencies>
        </div>
        <div className="SheetBodyRight">
          <div className="SheetBodyRightTop">
            <div className="SheetBodyRightTopItem">
              <label>イニシアチブ<br></br>(INITIATIVE)</label>
              <input id="initiative"></input>
            </div>
            <div className="SheetBodyRightTopItem">
              <label>移動速度<br></br>(SPEED)</label>
              <input id="speed"></input>
            </div>
            <div className="SheetBodyRightTopItem">
              <label>サイズ<br></br>(SIZE)</label>
              <input id="size"></input>
            </div>
            <div className="SheetBodyRightTopItem">
              <label>受動知覚<br></br>(PASSIVE PERCEPTION)</label>
              <input id="passive_perception"></input>
            </div>
          </div>
          <div className="SheetBodyRightMiddle">
            <Weapon data={props.data}></Weapon>
            <Features data={props.data}></Features>
          </div>
          <div className="SheetBodyRightBottom">
            <div className="SheetBodyRightBottomGroup">
              <SpeciesTraits data={props.data}></SpeciesTraits>
              <Feats data={props.data}></Feats>
            </div>
          </div>
        </div>
      </div>
      <div className="SheetFooter">
        このページはファンコンテンツ・ポリシーに沿った非公式のファンコンテンツです。ウィザーズ社の認可/許諾は得ていません。題材の一部に、ウィザーズ・オブ・ザ・コースト社の財産を含んでいます。©Wizards of the Coast LLC.
      </div>
    </div>
  );
}

export default Sheet;
