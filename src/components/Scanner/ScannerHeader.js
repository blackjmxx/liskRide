import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Label } from 'semantic-ui-react';

const ScannerHeader = (props) => {
  const IconStyle = new function setStyle() {
    !props.qrscanModeIsqrcodescan && (this.color = 'black');
  }();
  return (
    <div>
      <Link to={'/home/card'} className="icon-close">
        <Icon name="close" size="big" {...IconStyle} />
      </Link>
      <div className="icon-info" onClick={props.toggleShowInfo} role="button" aria-pressed="true" tabIndex="0">
        <Icon name="help circle" size="big" {...IconStyle} />
      </div>
      {
    props.showInfo &&
    <Label as="a" basic color="red" pointing="right" className="info-label">
      {props.qrscanModeIsqrcodescan ? 'Scan to Validate' : 'Select Image to Validate'}
    </Label>
    }
    </div>
  );
};

export default ScannerHeader;
