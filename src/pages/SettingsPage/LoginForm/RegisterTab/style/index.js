import styled from "styled-components";

export const InputRegister = styled.input`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.menuBarBg};
    box-shadow: 0px 0px 6px rgba(50, 146, 255, 0.15);
    border: 0 solid transparent;
    border-radius: 30px;
    padding: 0;
    margin: 0;
    padding-left: 15px;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${({theme}) => theme.gray60};
        font-family: 'Avenir Next';
        font-size: 16px;
    }
`
export const TermsPoliciesLink = styled.div`
    font-family: 'Avenir Next';
    font-size: 16px;
    text-align: center;
    color: ${({theme}) => theme.gray};
`
export const RegisterInputsContainer = styled.div`
    display: flex;
    width: 85%;
    height: 60%;
    margin-top: 6.8%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15%;
`
export const InputRegisterContainer = styled.div`
    display: flex;
    width: 100%;
    height: 15%;
    margin-bottom: 7%;
`

export const SecondInputRegisterContainer = styled(InputRegisterContainer)`
    position: relative;
`