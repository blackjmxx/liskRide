import styled from "styled-components";
import {Image as SemanticImage} from "semantic-ui-react";

export const ImageContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 80%;
    height: 50%;
`
export const Image = styled(SemanticImage)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 67%;
    height: 67%;
`
export const TitleContainer = styled.div`
    width: 85%;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`
export const TitleContent = styled.div`
    font-family: 'Avenir Next';
    font-size: 20px;
    color: ${({theme}) => theme.red};
    text-align: center;
`
export const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 25%;
`
export const Content = styled(TitleContent)`
    font-size: 16px;
    color: ${({theme}) => theme.gray80};
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 85%;
    height: 7.20%;
`