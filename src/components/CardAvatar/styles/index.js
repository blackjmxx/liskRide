import styled from "styled-components";
import {Image as SemanticImage} from "semantic-ui-react";
import ReactImageLoader from "react-load-image";
import { iphone5SEMaxWidth, iphone6MaxWidth } from '../../Theme';
import './index.scss';

export const Image = styled(SemanticImage)`
    &&& {
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 2px 32px rgba(50, 146, 255, 0.2);
        border-radius: 10px;
        transition: width 300ms linear;
        height: 100%;
    }
`
export const ImageLoader = styled(ReactImageLoader)`
    background-color: 'tranparent';
    min-width: 70vw;
    height: 100%;
`
export const CurrentStepContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    align-items: baseline;
    bottom: 7%;
`
export const CurrentStepContentActive = styled.div`
    font-family: 'Product Sans';
    font-weight: bold;
    font-size: 2em;
    line-height: 50px;
    text-align: center;
    color: ${({theme}) => theme.green};
    position: relative;
    bottom: 0px;

    @media (max-width: ${iphone5SEMaxWidth}px) {
        line-height: 45px;
        font-size: 35px;
        font-size: 1.7em;
    }

    @media (max-width: ${iphone6MaxWidth}px) {
        line-height: 47.5px;
        font-size: 1.8em;
    }
`
export const CurrentStepContent = styled(CurrentStepContentActive)`
    font-family: 'Product Sans';
    font-size: 20px;
    color: ${({theme}) => theme.gray80};
    
    @media (max-width: ${iphone5SEMaxWidth}px) {
        font-size: 15px;
    }

    @media (max-width: ${iphone6MaxWidth}px) {
        font-size: 16px;
    }
`
export const NextRewardImage = styled(SemanticImage)`
&&& {
    width: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
}`

export const Subtitle = styled.div`
    font-size: 'Avenir Next';
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${({theme}) => theme.gray80};

    @media (max-width: ${iphone5SEMaxWidth}px) {
        font-size: 10px;
        line-height: 17px;
        margin-top: 5%;
    }

`