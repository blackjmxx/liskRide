import styled from "styled-components";

export const RecoveryPopupContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 87%;
    height: 37%;
    background-color: ${({theme}) => theme.menuBarBg};
    box-shadow: 0px 2px 32px rgba(50, 146, 255, 0.2);
    border-radius: 12px;
`
export const RecoveryPopupTitleContainer = styled.div`
    display: flex;
    width: 85%;
    height: 27%;
    justify-content: center;
    align-items: flex-end;
`
export const Title = styled.div`
    display: flex;
    font-family: 'Avenir Next';
    font-size: 20px;
    line-height: 28px;
    color: ${({theme}) => theme.gray};
    text-align: center;
`
export const RecoveryPopupSubtitleContainer = styled.div`
    display: flex;
    width: 85%;
    height: 29%;
    justify-content: center;
    align-items: center;
`
export const Subtitle = styled.div`
    font-family: 'Avenir Next';
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    color: ${({theme}) => theme.gray80};
`
export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 19.50%;
    margin-top: 5%;
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