import './SpeciesTraits.css';
import { useEffect } from 'react';

function SpeciesTraits(props) {

  useEffect(() => {
    if (props.data) {
      document.getElementById('species_traits').value = props.data.species_traits;
    }
  }, [props]);

  return (
    <div className="SpeciesTraits">
      <div className="SpeciesTraitsTitle">
        <label>種族特徴 (SPECIES TRAITS)</label>
      </div>
      <div className="SpeciesTraitsContent">
        <textarea id="species_traits"></textarea>
      </div>

    </div>
  );
}

export default SpeciesTraits;
