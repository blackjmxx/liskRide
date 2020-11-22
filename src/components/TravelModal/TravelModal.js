import React from "react";
import { PopupViewContainer } from "../popup/style";
import { FormattedMessage } from 'react-intl';
import { Text, LogoutPopupContent, LogoutPopupContainer, ButtonContainer } from "../../components/LogoutPopup/style";
import { BlueButton } from '../../components/common/styles'
import '../popup/index.scss';
import './style/calendar.css'

const TravelModal = ({closeModal, handleAction, travelId, active, travel, Title='Start Travel'}) => {
    return (
        <PopupViewContainer className={active ? 'active' : null }>
         <LogoutPopupContainer>
                <LogoutPopupContent>
                    <Text>
                        {Title}
                    </Text>
                </LogoutPopupContent>
                <ButtonContainer>
                    <BlueButton onClick={handleAction}><FormattedMessage id={"global.yes"} /></BlueButton>
                    <BlueButton onClick={closeModal}> <FormattedMessage id={"global.no"} /></BlueButton>
                </ButtonContainer>
            </LogoutPopupContainer>
    </PopupViewContainer>
    );
}

export default TravelModal
;