import React, { Component } from "react";
import { Mnemonic } from '@liskhq/lisk-passphrase';
import { getAddressAndPublicKeyFromPassphrase } from '@liskhq/lisk-cryptography';

import { LoadableGoogleLogin, LoadableFacebookLogin } from "./Loadable";
// import AppleLogin from 'react-apple-login'

import LoginTab from "./LoginTab/LoginTab";
import RegisterTab from "./RegisterTab/RegisterTab";

import "./styles.css";
import { LoginRegisterHeader } from "../../../components/LoginRegisterHeader/LoginRegisterHeader";
import {LoginViewContainer, TitleContainer, TitleBottomContent, ButtonContainer, BottomLoginContainer, ErrorInformationContent, ErrorContainer, LinkForgotPassword, WarningInformationContainer, IconContainer, WarningIcon, WarningImageContainer, WarningText, WarningContentContainer, PersonIcon } from "./style";
import MenuBar from '../../../components/MenuBar/Menubar';
// import { RegisterPopup } from "../../../components/RegisterPopup/RegisterPopup";
import warningIcon from '../../../assets/icons/warningIcon.svg';
import personImg from '../../../assets/images/person.svg';
import { FormattedMessage } from 'react-intl';

class LoginForm extends Component {
  tabs = [
    { menuItem: <FormattedMessage id={"paramsPage.login"} />,  render: props => <LoginTab {...props} /> },
    { menuItem: <FormattedMessage id={"paramsPage.register"} />, render: props => <RegisterTab {...props} /> }
  ];

  constructor(props) {
    super(props);
    this.state = {
      registeraddress: "",
      loginaddress: "",
      publicKey: "",
      registerpassphrase: "",
      loginpassphrase: "",
      activeTab: this.tabs[0].menuItem,
      showRegisterModal: false,
    };
  }

  handleRegister = () => {

    const { email, password, password2 }  = this.state;

    if (password !== password2) {
      return this.props.displayError({ message: "Password not match" });
    }

    const { objectId } = this.props.card;
    this.props.registerUser(email, password, objectId, this.props.history);
  };
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = () => {
    const { loginpassphrase } = this.state;
    this.props.logIn(loginpassphrase, this.props.history);
  };

  handleForgotPassword = () => {
    this.props.history.push('/home/forgotPassword');
  }

  createPassPhrase = () => {
    let registerpassphrase = Mnemonic.generateMnemonic();
    const { address, publicKey } = getAddressAndPublicKeyFromPassphrase(registerpassphrase);
    this.setState({ registerpassphrase, registeraddress:address, publicKey })
  }

  isLoginTabActive = () => this.state.activeTab === this.tabs[0].menuItem

  changeTab = (activeTab) => this.setState({ activeTab });

  componentDidMount() {
    if (this.props.moveToRegister) {
      this.setState({
        activeTab: this.tabs[1].menuItem
      })
    }
  }

  render() {
    const { error, isLoadingUser, isVerified = true } = this.props;
    
    return (
      <>
      {/* {this.state.showRegisterModal && <RegisterPopup handleRegister={this.handleRegister} closeModalHandler={() => this.setState({ showRegisterModal: false })}/>} */}
      <LoginRegisterHeader tabs={this.tabs} changeTab={this.changeTab} activeTab={this.state.activeTab} />
      <LoginViewContainer>
      { this.isLoginTabActive()
      ?
      <WarningInformationContainer>
        <IconContainer>
          <WarningIcon src={warningIcon} />
        </IconContainer>
        <WarningContentContainer>
          <WarningText><FormattedMessage id={"paramsPage.bannerMessagePart2"} /></WarningText>
        </WarningContentContainer>
        <WarningImageContainer>
          <PersonIcon src={personImg}/>
        </WarningImageContainer>
      </WarningInformationContainer>
      :
      null}
      <ErrorContainer>
        <ErrorInformationContent>
          {error && error.message}
          {!isVerified && <FormattedMessage id={"global.notVerified"} />}
        </ErrorInformationContent>
      </ErrorContainer>
      { this.isLoginTabActive() ?
        <>
          <LoginTab
              loading={isLoadingUser}
            handleRegister={this.handleRegister}
            handleLogin={this.handleLogin}
            handleChange={this.handleChange}
            loginaddress={this.state.loginaddress}
            loginpassphrase={this.state.loginpassphrase} />
          <LinkForgotPassword onClick={this.handleForgotPassword}><FormattedMessage id={"global.forgotPassword"} /></LinkForgotPassword>
        </>
        :
        <RegisterTab
        loading={isLoadingUser}
        handleRegister={this.handleRegister}
        handleLogin={this.handleLogin}
        handleChange={this.handleChange}
        registeraddress={this.state.registeraddress}
        registerpassphrase={this.state.registerpassphrase} 
        createPassPhrase={this.createPassPhrase}/>
       }
      <BottomLoginContainer>
        <TitleContainer>
          <TitleBottomContent>
            <FormattedMessage id={"global.or"} /> {this.isLoginTabActive() ? <FormattedMessage id={"global.login"} /> : <FormattedMessage id={"global.register"} />} <FormattedMessage id={"paramsPage.with"} />
          </TitleBottomContent>
        </TitleContainer>
        <ButtonContainer>
        </ButtonContainer>
      </BottomLoginContainer>
      </LoginViewContainer>
      <MenuBar/>
      </>
    );
  }
}

export default LoginForm;