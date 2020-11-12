import React from "react";
import { PopupContainer, IconContainer, Icon, Text, ButtonContainer, PopupContentContainer, ImageSquare } from "../RegisterPopup/style"
import { BlueButtonHref } from "../../pages/SettingsPage/LoginForm/LoginTab/style"
import ShareButton from "../../components/ShareButton";
import { TitleContainer, Title } from "./style"
import closeIcon from '../../assets/icons/closeIcon.svg'
import { PopupViewContainer } from "../popup/style";
import { FormattedMessage } from 'react-intl';

import '../popup/index.scss';

export const GiftPopup = ({ closeUseGift, active, image, title, description, shareLink }) => {
    return (
        <PopupViewContainer className={active ? 'active' : null }>
            <PopupContainer>
                <IconContainer onClick={closeUseGift}>
                    <Icon src={closeIcon} />
                </IconContainer>
                <ImageSquare src={image} />
                <TitleContainer>
                    <Title>
                        {title}
                    </Title>
                </TitleContainer>
                <PopupContentContainer>
                    <Text>
                    {description}
                    </Text>
                </PopupContentContainer>
                <ButtonContainer>
                    <BlueButtonHref
                      as="a"
                      href={shareLink}
                      target="_blank"
                    >                     
                    <FormattedMessage id={"giftPage.useIt"} />
                    </BlueButtonHref>
                    <ShareButton
                        config={{
                            params: {
                            title: "My share",
                            text: "Check out this amazing react-share-api library",
                            url: shareLink
                            },
                            /* tslint:disable-next-line:no-console */
                            onShareSuccess: () => console.log("Success"),
                            /* tslint:disable-next-line:no-console */
                            onShareError: error => console.log("error", error)
                        }}
                        >
                    <FormattedMessage id={"giftPage.shareIt"} />
                    </ShareButton>

                </ButtonContainer>
            </PopupContainer>
        </PopupViewContainer>
    )
}