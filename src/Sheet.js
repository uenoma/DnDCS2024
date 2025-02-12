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

function Sheet(props) {

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
      <div className="SheetFooter">
        このページはファンコンテンツ・ポリシーに沿った非公式のファンコンテンツです。ウィザーズ社の認可/許諾は得ていません。題材の一部に、ウィザーズ・オブ・ザ・コースト社の財産を含んでいます。©Wizards of the Coast LLC.
      </div>
    </div>
  );
}

export default Sheet;
