import styled from "styled-components";
import { iphone5SEMaxWidth } from "../../../../../components/Theme";
import {Image as SemanticImage} from "semantic-ui-react";

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
export const BlueButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.cyan};
    box-shadow: 0px 0px 6px rgba(50, 146, 255, 0.15);
    border-radius: 50px;
    font-family: 'Avenir Next';
    font-size: 16px;
    color: ${({theme}) => theme.menuBarBg};
    text-align: center;
    font-weight: bold;
    letter-spacing: 0;
    width: ${({size}) => size === 'small' ? "50%" : "100%"};
    margin: 0.5%;
    height: ${({size}) => size === 'small' ? "50%" : "100%"};
    &:focus {
        background-color: ${({theme}) => theme.blue};
    }
    
    .loader {
        &:after {
            border-color: #fff transparent transparent!important;
        }
        &:before {
            border: none!important;
        }
    }
    
    &[disabled] {
      pointer-events: none;
      opacity: 0.7;
    }

    @media (max-width: ${iphone5SEMaxWidth}px) {
        font-size: 14px;
    }
`

export const BlueButtonHref = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.cyan};
    box-shadow: 0px 0px 6px rgba(50, 146, 255, 0.15);
    border-radius: 50px;
    font-family: 'Avenir Next';
    font-size: 16px;
    color: ${({theme}) => theme.menuBarBg};
    text-align: center;
    font-weight: bold;
    letter-spacing: 0;
    width: 100%;
    margin: 0.5%;
    height: 100%;
    &:focus {
        background-color: ${({theme}) => theme.blue};
    }

    @media (max-width: ${iphone5SEMaxWidth}px) {
        font-size: 14px;
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 22%;
`
export const LoginInputsContainer = styled.div`
    display: flex;
    width: 85%;
    height: 40%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
export const ToggleButtonContainer = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 20%;
    top: 0;
    right: 0;
`
export const Icon = styled(SemanticImage)`
    display: flex;
    width: 50%;
    height: 50%
`