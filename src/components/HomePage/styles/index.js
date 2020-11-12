import styled from "styled-components";
import {Image as SemanticImage} from "semantic-ui-react";
import { Theme, iphone6MaxWidth, iphone5SEMaxWidth } from "../../Theme";
import DayPickerInput from 'react-day-picker/DayPickerInput';

const circleSize = 130;
const modifiedCircleSize = circleSize * 0.9;

export const BackgroundCircle = styled.div`
  background: #9e978e;
  height: ${circleSize}vw;
  width: ${modifiedCircleSize}vw;
  background-color: ${({theme}) => theme.cyan};
  position: absolute;
  height: 17%;
  border-bottom-left-radius: ${modifiedCircleSize}vw;
  border-bottom-right-radius: ${modifiedCircleSize}vw;
`

export const CardsContainer = styled.div`
    position: relative;
    width: 100vw;
    display: flex;
    justify-content: center;
    height: 25%;
`;

export const SingleCard = styled.div`
    width: 80vw;
`;

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100vw;
    align-items: center;
    background-color: ${({theme}) => theme.cyan10};
    flex: 1;
`

export const Icon = styled(SemanticImage)`
    display: flex;
    width: 16px;
    height: 16px;
`

export const Icon2 = styled(SemanticImage)`
    display: flex;
    width: 50%;
    height: 50%
`

export const ShortcutContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    z-index: 99;
    margin: 5%;
    
    img {
        -webkit-animation: mover 1s infinite  alternate;
        animation: mover 1s infinite  alternate;
    }
    
    @-webkit-keyframes mover {
        0% { transform: translateY(2px); }
        100% { transform: translateY(-2px); }
    }
    @keyframes mover {
        0% { transform: translateY(2px); }
        100% { transform: translateY(-2px); }
    }
        
    @media (width: ${iphone5SEMaxWidth}px) {
        margin: 3vw;
    }
    @media (max-width: ${iphone6MaxWidth}px) {
        margin: 3vw;
    }
`
export const ShortcutContent = styled.div`
    font-family: 'Avenir Next';
    font-size: 14px;
    line-height: 140%;
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 12px;
    color: ${({theme}) => theme.cyan50};
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15%;
`

export const ButtonContainer2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 45%;
`

export const Input = styled.input`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.menuBarBg};
    box-shadow: 0px 0px 6px rgba(50, 146, 255, 0.15);
    border: 0 solid transparent;
    border-radius: 30px;
    padding: 0;
    margin: 0;
    padding-left: 15px;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${({theme}) => theme.gray60};
        font-family: 'Avenir Next';
        font-size: 16px;
    }
`

export const FirstInputContainer = styled.div`
    display: flex;
    width: 100%;
    height: 22%;
    margin-bottom: 7%;
`

export const SecondInputContainer = styled(FirstInputContainer)`
    margin-bottom: 5;
    position: relative;
`

export const LoginInputsContainer = styled.div`
    display: flex;
    width: 85%;
    height: 55%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ToggleButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 20%;
    top: 0;
    right: 0;
`

export const DayPickerInputCustom = styled(DayPickerInput)`
    border-color: antiquewhite !important; 
}
`

export const sliderStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: Theme.cyan10,
}

export const slideStyle = {
    width: '82%',
}

export const title = {
    order: 1,
    fontFamily: 'Avenir Next',
    fontSize: '20px',
    lineHeight: '28px',
    textAlign: 'center',
    color: Theme.gray80,
    height: 'auto',
    fontWeight: 'bold',
};

export const buttonContent = {
    fontFamily: 'Avenir Next',
    lineHeight: '140%',
    fontSize: '24px',
    display: 'flex',
    textAlign: 'center',
}

export const description = {
    fontFamily: 'Avenir Next',
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'center',
    color: Theme.gray80,
};

export const nextButton = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: Theme.cyan,
    boxShadow: '0px 0px 6px rgba(50, 146, 255, 0.15)',
    borderRadius: '60px',
    fontFamily: 'Avenir Next',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: '16px',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: '0',
    height: '32%',
    width: '95%',
};

export const skipButton = {
    fontFamily: 'Avenir Next',
    textAlign: 'center',
    color: Theme.cyan,
    borderRadius: '50px',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    letterSpacing: '0',
    paddingBottom: '5%',
}

export const dotActive = {
    backgroundColor: Theme.cyan,
}

export const dotInactive = {
    backgroundColor: Theme.cyan20
}