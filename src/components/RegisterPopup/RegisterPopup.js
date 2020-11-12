import React from "react";
import { PopupContainer, ButtonContainer, PopupContentContainer, Image, Text, Icon, IconContainer } from "./style";
import personBlue from "../../assets/images/personBlue.svg";
import { BlueButton } from '../../pages/SettingsPage/LoginForm/LoginTab/style'
import closeIcon from "../../assets/icons/closeIcon.svg";
import { PopupViewContainer } from "../popup/style";
import '../popup/index.scss';

export const RegisterPopup = ({buttonTitle, contentText, closeModalHandler, handleRegister, active}) => {
    console.log(handleRegister);
    return (
        <PopupViewContainer className={active ? 'active' : null}>
            <PopupContainer>
                <IconContainer onClick={closeModalHandler}>
                    <Icon src={closeIcon} />
                </IconContainer>
                <Image src={personBlue} />
                <PopupContentContainer>
                    <Text>
                    {contentText} Account creation is optional and<br/> 
                    everything can work without it. But it will<br/>
                    help if you lose or reset your phone
                    </Text>
                </PopupContentContainer>
                <ButtonContainer onClick={handleRegister}>
                    <BlueButton>{buttonTitle} Register</BlueButton>
                </ButtonContainer>
            </PopupContainer>
        </PopupViewContainer>
    )
}