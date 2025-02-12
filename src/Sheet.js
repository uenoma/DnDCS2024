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

function Sheet() {
  return (
    <div className="Sheet">
      <div className="SheetHeader">
        <BasicInfo />
        <Level />
        <ArmorClass />
        <Status />
      </div>
      <div className="SheetBody">
        <div className="SheetBodyLeft">
          <Ability></Ability>
          <Proficiencies></Proficiencies>
        </div>
        <div className="SheetBodyRight">
          <div className="SheetBodyRightTop">
            <div className="SheetBodyRightTopItem">
              <label>イニシアチブ<br></br>(INITIATIVE)</label>
              <input></input>
            </div>
            <div className="SheetBodyRightTopItem">
              <label>移動速度<br></br>(SPEED)</label>
              <input></input>
            </div>
            <div className="SheetBodyRightTopItem">
              <label>サイズ<br></br>(SIZE)</label>
              <input></input>
            </div>
            <div className="SheetBodyRightTopItem">
              <label>受動知覚<br></br>(PASSIVE PERCEPTION)</label>
              <input></input>
            </div>
          </div>
          <div className="SheetBodyRightMiddle">
            <Weapon></Weapon>
            <Features></Features>
          </div>
          <div className="SheetBodyRightBottom">
            <div className="SheetBodyRightBottomGroup">
              <SpeciesTraits></SpeciesTraits>
              <Feats></Feats>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sheet;
