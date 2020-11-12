import styled from "styled-components";
import {Image as SemanticImage} from "semantic-ui-react";

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    background-color: ${({theme}) => theme.cyan10};
    border-radius: 0 0 8px 8px;
    padding-left: 4%;
    padding-top: 3%;
    padding-bottom: 2%;
`
export const Title = styled(SemanticImage)`
    display: flex;
    font-family: 'Avenir Next';
    font-size: 16px;
    font-weight: bold;
    color: ${({theme}) => theme.cyan};
`
export const StepActive = styled.div`
    display: flex;
    font-family: 'Product Sans';
    font-size: 20px;
    font-weight: bold;

    text-align: center;
    color: ${({theme}) => theme.cyan};
`
export const StepDefault = styled(StepActive)`
    color: ${({theme}) => theme.gray60};
    font-weight: normal;
    font-size: 16px;
`
export const StepContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Product Sans';
    text-align: center;
    color: transparent;
    margin-left: auto;
    padding-right: 5%;
`
export const Icon = styled(SemanticImage)`
    display: flex;
    height: 24px;
    width: 24px;
    margin-right: 4%;
`