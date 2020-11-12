import React from "react";
import { RecoveryPopupContainer, RecoveryPopupTitleContainer, Title, RecoveryPopupSubtitleContainer, Subtitle, ButtonContainer, Button, ButtonContent } from './style/index.js'
import { PopupViewContainer } from "../popup/style.js";
import '../popup/index.scss';

export const RecoveryPopup = ({ recoveryHandle, title, subtitle, email, buttonTitle, active }) => {
    return (
        <PopupViewContainer className={active ? 'active' : null}>
            <RecoveryPopupContainer>
                <RecoveryPopupTitleContainer>
                    <Title>{title}</Title>
                </RecoveryPopupTitleContainer>
                <RecoveryPopupSubtitleContainer>
                    <Subtitle>
                    {subtitle} {email}
                    </Subtitle>
                </RecoveryPopupSubtitleContainer>
                <ButtonContainer onClick={recoveryHandle}>
                    <Button>
                        <ButtonContent>{buttonTitle}</ButtonContent>
                    </Button>
                </ButtonContainer>
            </RecoveryPopupContainer>
        </PopupViewContainer>
    );
}