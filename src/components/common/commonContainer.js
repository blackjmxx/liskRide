import styled from "styled-components";

export const CommonContainerView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100vw;
    align-items: center;
    background-color: ${({theme}) => theme.cyan10};
    flex: 1;
`

export const CommonDetailContainerView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100vw;
    background-color: ${({theme}) => theme.cyan10};
    flex: 1;
`