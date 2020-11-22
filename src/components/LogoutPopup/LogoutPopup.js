import React from "react";
import { Text, LogoutPopupContent, LogoutPopupContainer, ButtonContainer } from "./style";
import { BlueButton } from '../../components/common/styles'
import closeIcon from "../../assets/icons/closeIcon.svg";
import { IconContainer, Icon } from "../RegisterPopup/style";
import { PopupViewContainer } from "../popup/style";
import { FormattedMessage } from 'react-intl';
import '../popup/index.scss';

export const LogoutPopup = ({ active, buttonTitle, contentText, closeModalHandler, handleLogout }) => {
    return (
        <PopupViewContainer className={active ? 'active' : null}>
            <LogoutPopupContainer>
                <IconContainer onClick={closeModalHandler}>
                    <Icon src={closeIcon} />
                </IconContainer>
                <LogoutPopupContent>
                    <Text>
                    {contentText} <FormattedMessage id={"paramsPage.validationPopupLogOutMessage"} />
                    </Text>
                </LogoutPopupContent>
                <ButtonContainer onClick={handleLogout}>
                    <BlueButton>{buttonTitle}  <FormattedMessage id={"global.yes"} /></BlueButton>
                </ButtonContainer>
            </LogoutPopupContainer>
        </PopupViewContainer>
    )
}