import './Sheet1.css';
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

function Sheet1(props) {

  useEffect(() => {
    if (props.data) {
      document.getElementById('initiative').value = props.data.initiative;
      document.getElementById('speed').value = props.data.speed.walk;
      document.getElementById('size').value = props.data.size ? props.data.size : '';
      document.getElementById('passive_perception').value = props.data.passive_perception;
    }
  }, [props]);

  return (
    <div className="Sheet1">
      <div className="Sheet1Header">
        <BasicInfo data={props.data} />
        <Level data={props.data} />
        <ArmorClass data={props.data} />
        <Status data={props.data} />
      </div>
      <div className="Sheet1Separator">
        <label>Dungeons & Dragons</label>
      </div>
      <div className="Sheet1Body">
        <div className="Sheet1BodyLeft">
          <Ability data={props.data} ></Ability>
          <Proficiencies data={props.data} ></Proficiencies>
        </div>
        <div className="Sheet1BodyRight">
          <div className="Sheet1BodyRightTop">
            <div className="Sheet1BodyRightTopItem">
              <label>イニシアチブ<br></br>(INITIATIVE)</label>
              <input id="initiative"></input>
            </div>
            <div className="Sheet1BodyRightTopItem">
              <label>移動速度<br></br>(SPEED)</label>
              <input id="speed"></input>
            </div>
            <div className="Sheet1BodyRightTopItem">
              <label>サイズ<br></br>(SIZE)</label>
              <input id="size"></input>
            </div>
            <div className="Sheet1BodyRightTopItem">
              <label>受動知覚<br></br>(PASSIVE PERCEPTION)</label>
              <input id="passive_perception"></input>
            </div>
          </div>
          <div className="Sheet1BodyRightMiddle">
            <Weapon data={props.data}></Weapon>
            <Features data={props.data}></Features>
          </div>
          <div className="Sheet1BodyRightBottom">
            <div className="Sheet1BodyRightBottomGroup">
              <SpeciesTraits data={props.data}></SpeciesTraits>
              <Feats data={props.data}></Feats>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sheet1;
