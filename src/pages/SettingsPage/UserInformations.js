import React , { Component }from "react";
import { FormattedMessage } from 'react-intl';
import { User } from "parse";
import { LogoutPopup } from "../../components/LogoutPopup/LogoutPopup";
import { BlueButton } from "./LoginForm/LoginTab/style";

import { CardsContainer } from "../../components/HomePage/styles";
import { removeUser } from '../../utils/storage';

import {
  UserInformationContainer,
  TitleContainer,
  TopInformationContainer,
  IconContainer,
  Title,
  ImageContainer,
  Image,
  Icon,
  InfomationsContainer,
  InformationsContainer,
  HeaderInfromation,
  InformationItemContainer,
  ContentInformation,
  BottomContainer,
  ButtonContainer,
} from "./styles";

import doneIcon from "../../assets/icons/doneIcon.svg";
import personGreen from "../../assets/images/personGreen.svg";

class Informations extends Component {
    state = {
      showLogoutModal: false
    };

    handleLogout = () => {
      if (!this.state.showLogoutModal) {
        this.setState({ showLogoutModal: true });
  
        return;
      }
  
      User.logOut().then(() => {
        removeUser()
        this.props.history.push("/home/params");
        this.setState({ showLogoutModal: false });
      });
    };
  
    render() {
      const user = this.props.user || {};
      
      return (
        <>
          {this.state.showLogoutModal && (
            <LogoutPopup
              closeModalHandler={() => this.setState({ showLogoutModal: false })}
              handleLogout={this.handleLogout}
            />
          )}
          <InformationsContainer>
            <InformationItemContainer>
            <HeaderInfromation><FormattedMessage id={"paramsPage.address"} /></HeaderInfromation>
              <ContentInformation>
               {user.address}
              </ContentInformation>
            </InformationItemContainer>
            <InformationItemContainer>
              <HeaderInfromation><FormattedMessage id={"paramsPage.firstName"} /></HeaderInfromation>
              <ContentInformation>{user.name}</ContentInformation>
            </InformationItemContainer>
            <InformationItemContainer>
              <HeaderInfromation><FormattedMessage id={"paramsPage.balance"} /></HeaderInfromation>
              <ContentInformation>{user.balance}</ContentInformation>
            </InformationItemContainer>
          </InformationsContainer>
          <BottomContainer>
            <ButtonContainer>
              <BlueButton onClick={this.handleLogout}><FormattedMessage id={"paramsPage.logOut"} /></BlueButton>
            </ButtonContainer>
          </BottomContainer>
        </>
      );
    }
  }

const UserInformations = (props) => {
    return (  
      <UserInformationContainer>
      <TopInformationContainer>
        <IconContainer>
          <Icon src={doneIcon} />
        </IconContainer>
        <TitleContainer>
          <Title><FormattedMessage id={"paramsPage.progressSaved"} /></Title>
        </TitleContainer>
        <ImageContainer>
          <Image src={personGreen} />
        </ImageContainer>
      </TopInformationContainer>
      <CardsContainer>
      </CardsContainer>
      <InfomationsContainer>
        <Informations {...props} />
      </InfomationsContainer>
    </UserInformationContainer>
    );
  }

  export default UserInformations;