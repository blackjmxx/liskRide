import styled from "styled-components";
import {Image as SemanticImage} from "semantic-ui-react";


export const EmptyGiftContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.cyan10};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const TitleContainer = styled.div`
    width: 85%;
    height: 8%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`
export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 85%;
    height: 10%;
`
export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 85%;
    height: 57%;
`
export const Image = styled(SemanticImage)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 82%;
    height: 67%;
`

export const Title = styled.div`
    display: flex;
    font-family: 'Avenir Next';
    font-size: 20px;
    line-height: 28px;
    font-weight: bold;
    color: ${({theme}) => theme.gray};
    text-align: center;
`