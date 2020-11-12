import React from 'react';
import gifts from '../../assets/images/gifts.svg'
import { ImageContainer, TitleContainer, ContentContainer, Image, Title, EmptyGiftContainer } from './style';
import MenuBar from '../MenuBar/Menubar.js'
import { Content } from '../Scanner/SelectFromImages/style';
import { FormattedMessage } from 'react-intl';

export const GiftsEmpty = () => {
    return (
        <>
            <EmptyGiftContainer>
                <ImageContainer>
                    <Image src={gifts} />
                </ImageContainer>
                <TitleContainer>
                    <Title>
                        <FormattedMessage id={"giftPage.NoGiftavailableTitle"} />
                    </Title>
                </TitleContainer>
                <ContentContainer>
                    <Content>
                        <FormattedMessage id={"giftPage.NoGiftavailableDescription1"} />
                        {/* <FormattedMessage id={"giftPage.NoGiftavailableDescription2"} /> */}
                    </Content>
                    {/* <Content>
                        <FormattedMessage id={"giftPage.NoGiftavailableDescription3"} />
                    </Content> */}
                </ContentContainer>
            </EmptyGiftContainer>
            <MenuBar />
        </>
    )
}