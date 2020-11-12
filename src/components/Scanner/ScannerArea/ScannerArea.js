import React from 'react';
import QrReader from 'react-qr-reader';
import SelectFromImages from '../SelectFromImages/SelectFromImages.js'
import closeIconWhite from "../../../assets/icons/closeIconWhite.svg";
import { IconContainer, Icon, ScannerAreaContainer, ScanTitleContainer, ScanTitle } from './style'
import { FormattedMessage } from 'react-intl';

class ScannerArea extends React.Component {
  qrReader1 = React.createRef();

  showSelectFromImages = () =>
    this.props.mode === 'selectFromPhotos' ? 'flex' : 'none'

  showQrScanner = () =>
    this.props.mode !== 'selectFromPhotos' ? 'initial' : 'none'

  openImageDialog = () => {
    this.qrReader1.current.openImageDialog();
  }

  render() {
    return (
      <>
        <SelectFromImages
          style={{ display: this.showSelectFromImages()}}
          openImageDialog={this.openImageDialog}
          qrscanModeIsqrcodescan={this.props.qrscanModeIsqrcodescan}
        />
        <ScannerAreaContainer style={{ display: this.showQrScanner()}}>
          <IconContainer onClick={this.props.handleOnClickCloseIcon}>
            <Icon src={closeIconWhite} />
          </IconContainer>
        <ScanTitleContainer>
            <ScanTitle><FormattedMessage id={"cardPage.scanQrCode"} /></ScanTitle>
          </ScanTitleContainer>
          <QrReader
            ref={this.qrReader1}
            delay={Number(300)}
            resolution={Number(1000)}
            onError={this.props.handleError}
            onScan={this.props.handleScan}
            className="qrReader"
            legacyMode={!this.props.qrscanModeIsqrcodescan}>
          </QrReader>

          <div className="scanner-overlay">
            <div className="scanner-animation" />
          </div>
        </ScannerAreaContainer>
      </>
    );
  }
}

export default ScannerArea;
