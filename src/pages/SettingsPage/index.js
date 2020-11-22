import React, { Component } from "react";

import Loadable from 'react-loadable';
import {
  setClientManifest,
  getUser2
} from "../../utils/storage";

import MenuBar from "../../components/MenuBar/Menubar";
import RequireAuth from "./RequireAuth";

const UserInformationLoadable = Loadable({
  loader: () => import('./UserInformations'),
  loading: () => <div>...</div>
});
class SettingsPage extends Component {
  state = {
  };
  componentDidMount = () => {
    UserInformationLoadable.preload();
    let user = JSON.parse(getUser2());
    
    if (getUser2()) {
      this.props.receiveUserLogIn(JSON.parse(getUser2()));
      this.props.loadUserBalance(user.address)
    }
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
          <UserInformationLoadable {...this.props} /> 
          <MenuBar />
        </RequireAuth>
      </>
    );
  }
}

export default SettingsPage;
