import styled from "styled-components"
import {Image as SemanticImage} from "semantic-ui-react";

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 85%;
    height: 28%;
    margin-bottom: 3%;
`
export const Title = styled.div`
    display: flex;
    font-family: 'Avenir Next';
    font-size: 20px;
    line-height: 28px;
    color: ${({theme}) => theme.gray};
    text-align: center;
`
export const SubtitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
    height: 5%;
    margin-bottom: 8%;
    margin-top: 5%;
`
export const Subtitle = styled.div`
    font-family: 'Avenir Next';
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    color: ${({theme}) => theme.gray80};
    width: 80%;
`
export const BottomContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 86%;
    height: 25%;
`
export const EmailInput = styled.input`
    display: flex;
    width: 100%;
    height: 29%;
    background-color: ${({theme}) => theme.menuBarBg};
    box-shadow: 0px 0px 6px rgba(50, 146, 255, 0.15);
    border: 0 solid transparent;
    border-radius: 30px;
    padding: 0;
    margin: 0;
    padding-left: 15px;
    color: ${({theme}) => theme.cyan};
    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${({theme}) => theme.gray60};
        font-family: 'Avenir Next';
        font-size: 16px;
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
    width: 100%;
    height: 31.15%;
`
export const Button = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.cyan};
    box-shadow: 0px 2px 24px rgba(50, 146, 255, 0.3);
    border-radius: 50px;
`
export const ButtonContent = styled.div`
    font-family: 'Avenir Next';
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    color: ${({theme}) => theme.menuBarBg};
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
export const Icon = styled(SemanticImage)`
    width: 100%;
    height: 100%;
    display: flex;
`