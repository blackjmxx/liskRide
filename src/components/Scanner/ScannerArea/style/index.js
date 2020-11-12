import styled from 'styled-components'
import {Image as SemanticImage} from "semantic-ui-react";
import './ScannerArea.scss';

export const ScanTitleContainer = styled.div`
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    background-color: transparent;
    z-index: 99;
`
export const ScanTitle = styled.div`
    font-family: 'Avenir Next';
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: ${({theme}) => theme.menuBarBg};
`
export const IconContainer = styled.div`
    display: flex;
    position: absolute;
    top: 4px;
    left: 12px;
    height: 7%;
    width: 7%;
    justify-content: center;
    align-items: center;
    z-index: 99;
`
export const Icon = styled(SemanticImage)`
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    fill: ${({theme}) => theme.menuBarBg};
    z-index: 99;
`

export const ScannerAreaContainer = styled.div`
    height: 100%;
`

