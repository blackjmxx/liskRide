import React from 'react';
import { IconContainer, Icon,Button, ButtonContent } from "../../ForgotPassword/style"
import meditaionImage from '../../../assets/images/meditation.svg'
import { ImageContainer, Image, ButtonContainer, TitleContainer, TitleContent, ContentContainer, Content } from "./style"
import closeIcon from '../../../assets/icons/closeIcon.svg'
import { Link } from 'react-router-dom'
import { CommonContainerView } from '../../common/commonContainer';

const SelectFromImages = (props) => {
  return (
      <CommonContainerView style={props.style}>
        <Link to={'/home/card'}>
        <IconContainer>
            <Icon src={closeIcon} />
        </IconContainer>
      </Link>
      <ImageContainer>
          <Image src={meditaionImage} />
      </ImageContainer>
      <TitleContainer>
          <TitleContent>
              Ooops!
          </TitleContent>
      </TitleContainer>
      <ContentContainer>
          <Content>
          Your browser is not campatible with scanner, you can try on Safari or upload a picture with this button
          </Content>
      </ContentContainer>
      <ButtonContainer onClick={props.openImageDialog}>
          <Button>
              <ButtonContent>
              Select From Images
              </ButtonContent>
          </Button>
      </ButtonContainer>
    </CommonContainerView>
  );
};

export default SelectFromImages;
