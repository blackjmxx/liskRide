import React, { Component } from "react";
import { User } from "parse";
import { getCardId } from "../../utils/storage";
import Loadable from 'react-loadable';
import IntroSlider from "react-intro-slider";
import {
  setClientManifest,
  getUser2
} from "../../utils/storage";

import MenuBar from "../../components/MenuBar/Menubar";
import RequireAuth from "./RequireAuth";

import {
  title,
  nextButton,
  skipButton,
  dotActive,
  dotInactive,
  description,
  slideStyle,
  sliderStyle,
} from "../../components/HomePage/styles";
import { FormattedMessage } from 'react-intl';

const UserParse = User.extend("User");

const UserInformationLoadable = Loadable({
  loader: () => import('./UserInformations'),
  loading: () => <div>...</div>
});
class SettingsPage extends Component {
  state = {
  };
  componentDidMount = () => {
    const { fakeId } = this.props;
    UserInformationLoadable.preload();
    let user = JSON.parse(getUser2());
    
    if (getUser2()) {
      this.props.receiveUserLogIn(JSON.parse(getUser2()));
      this.props.loadUserBalance(user.address)
    }
  };

  handleSelectCard = index => {
    this.props.selectAndChangeCardId(index);
  };

  installAppHandler = () => {
    if (!this.state.InstallationPopup) {
      this.setState({ InstallationPopup: true });
      return;
    }
    this.setState({ InstallationPopup: false });
  }

  handleClose = () => {
    setClientManifest();
  };

  render() {
    return (
      <>
        <RequireAuth {...this.props}>
          <UserInformationLoadable {...this.props} handleSelectCard={this.handleSelectCard}/> 
          <MenuBar />
        </RequireAuth>
      </>
    );
  }
}

export default SettingsPage;
