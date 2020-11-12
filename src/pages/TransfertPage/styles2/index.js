import styled, { keyframes } from 'styled-components'
import {Image as SemanticImage} from "semantic-ui-react";

export const GiftViewContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.cyan10};
    flex-direction: column;
    align-items: center;
`
export const GiftItemContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 6px 0;
    flex-direction: row;
    background-color: ${({theme}) => theme.menuBarBg};
    box-shadow: 0px 0px 6px rgba(50, 146, 255, 0.15);
    border-radius: 8px;
`
export const GiftImageContainer = styled.div`
  display: flex;
  height: 77%;
  width: 36%;
  margin: 8px;
  align-items: center;
  justify-content: center;
`
export const GiftImage = styled(SemanticImage)`
  width: 100%;
  height: 100%;
  display: flex;
`
export const GiftItemContentContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    flex-direction: column;
    justify-content: flex-start;
    justify-content: center;
`
export const TimeoutContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 45%;
  width: 100%;

  padding: 0 10px 0px 0;
  justify-content: flex-end;
  align-items: flex-end;
`

export const Border = styled.div`
  margin: 0 auto;
  background-color: #000000;
  padding: 50px;
  padding-bottom: 30px;
  
  @media (min-height: 600px) {
    position: fixed;
    padding-bottom: 80px;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
  }
`
const intro = keyframes`
0% {transform: translateY(100%)}
100% {transform: translateY(0)}
`;

const outtro = keyframes`
0% {
  transform: translateY(0);
}
100% {transform: translateY(100%);}
}
`;

export const L9Div = styled.div`
&.page-enter {
  animation-name: ${intro};
  animation-duration: 0.4s;
  animation-iteration-count: 1;
}
&.page-exit {
  animation-name: ${outtro};
  animation-duration: 0.4s;
  animation-iteration-count: 1;
}
`

export const NotificationsViewContainer = styled.div`
    display: flex;
    width: 100%;
    flex-basis: 100%;
    background-color: ${({theme}) => theme.cyan10};
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    -webkit-overflow-scrolling: auto;
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  justify-content: flex-start;
  align-items: flex-start;
`