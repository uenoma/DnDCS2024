import './Features.css';
import { useEffect } from 'react';

function Features(props) {

  useEffect(() => {
    if (props.data) {
      document.getElementById('class_features1').value = props.data.class_features[0];
      document.getElementById('class_features2').value = props.data.class_features[1];
    }
  }, [props]);

  return (
    <div className="Features">
      <div className="FeaturesTitle">
        <label>クラス特徴 (CLASS FEATURES)</label>
      </div>
      <div className="FeaturesContent">
        <div className="FeaturesContentLeft">
          <textarea id="class_features1"></textarea>
        </div>
        <div className="FeaturesContentRight">
          <textarea id="class_features2"></textarea>
        </div>
      </div>

    </div>
  );
}

export default Features;
