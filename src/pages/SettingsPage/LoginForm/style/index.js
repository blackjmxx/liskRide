import styled from "styled-components";
import {Image as SemanticImage} from "semantic-ui-react";

export const LoginViewContainer = styled.div`
    display: flex;
    width: 100%;
    height: 82%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${({theme}) => theme.cyan10};
`
export const LinkForgotPassword = styled.div`
    font-family: 'Avenir Next';
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${({theme}) => theme.cyan};
`
export const BottomLoginContainer = styled.div`
    display: flex;
    width: 80%;
    height: 20%;
    background-color: ${({theme}) => theme.cyan10};
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8%;
`
export const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    height: 40%;
    align-items: center;
    justify-content: center;
`
export const TitleBottomContent = styled.div`
    font-family: 'Avenir Next';
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: ${({theme}) => theme.gray80};
`
export const WarningText = styled(TitleBottomContent)`
    display: flex;
    text-align: left;
    color: ${({theme}) => theme.menuBarBg};
    line-height: 18px;
`
export const ButtonContainer = styled.div`
    display: flex;
    height: 50%; 
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
`
export const CircleButton = styled.div`
    display: flex;
    height: 12vw;
    width: 12vw;
    border-radius: 100%;
    background-color: ${({theme}) => theme.menuBarBg};
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 6px rgba(50, 146, 255, 0.15);
`
export const SocialIcon = styled(SemanticImage)`
    display: flex;
    width: 6vw;
    height: 6vw;
    padding: 0;
    margin: 0;
`
export const WarningIcon = styled(SemanticImage)`
    display: flex;
    width: 50%;
    height: 50%;
`
export const PersonIcon = styled(SemanticImage)`
    display: flex;
    width: 100%;
    height: 80%;
`
export const WarningInformationContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 87%;
    height: 14%;
    margin-top: 5%;
    background-color: ${({theme}) => theme.yellow};
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    border-radius: 8px;
`

export const WarningInformationContainer2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 87%;
    height: 50%;
    margin-top: 5%;
    background-color: ${({theme}) => theme.yellow};
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    border-radius: 8px;
`


export const IconContainer = styled.div`
    display: flex;
    position: absolute;
    top: 6px;
    left: 15px;
    height: 7%;
    width: 7%;
    justify-content: center;
    align-items: center;
`
export const WarningContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 47%;
    height: 100%;
    align-items: flex-start;
    justify-content: center;
`

export const WarningImageContainer = styled.div`
    display: flex;
    height: 100%;
    width: 40%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export const ErrorContainer = styled.div`
    height: 5%;
    width: 80%;
    display: flex;
    align-items: flex-end;
    padding-left: 15px;
    flex-direction: row;

`
export const ErrorInformationContent = styled.div`
    font-family: 'Avenir Next';
    font-size: 12px;
    line-height: 16px;
    color: ${({theme}) => theme.red};
`

export const Icon = styled(SemanticImage)`
    width: 100%;
    height: 100%;
    display: flex;
`

export const CommonContainerView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100vw;
    align-items: center;
    background-color: ${({theme}) => theme.cyan10};
    flex: 1;
`