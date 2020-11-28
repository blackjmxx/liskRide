import React from "react";
import { PopupViewContainer } from "../popup/style";
import { FormattedMessage } from 'react-intl';
import { TextBubTitle, LogoutPopupContent, LogoutPopupContainer, ButtonContainer , TextSubTitle} from "../../components/LogoutPopup/style";
import { BlueButton } from '../../components/common/styles'
import '../popup/index.scss';
import './style/calendar.css'

const TravelModal = ({closeModal, handleAction, active, Title, travel}) => {
    return (
        <PopupViewContainer className={active ? 'active' : null }>
         <LogoutPopupContainer>
                <LogoutPopupContent>
                    <TextSubTitle>
                        Start travel with driver:{travel.asset.carId}
                    </TextSubTitle> 
                </LogoutPopupContent>
                <ButtonContainer>
                    <BlueButton onClick={handleAction}><FormattedMessage id={"global.yes"} /></BlueButton>
                    <BlueButton onClick={closeModal}> <FormattedMessage id={"global.no"} /></BlueButton>
                </ButtonContainer>
            </LogoutPopupContainer>
    </PopupViewContainer>
    );
}

export default TravelModal;