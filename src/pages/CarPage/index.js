import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import * as cryptography from '@liskhq/lisk-cryptography';
import { api } from '../../components/Api';
import Menubar from "../../components/MenuBar/Menubar";
import BlueButtonLoading from "../../components/Buttons/BlueButtonLoading";
import calendar from "../../assets/icons/calendar.svg";
import { IconContainer, Icon } from "../../components/RegisterPopup/style";
import closeIcon from "../../assets/icons/closeIcon.svg";


import RegisterCarTransaction from "../../transactions/register-car";

import {
  Input,
  ButtonContainer,
  SecondInputContainer,
  LoginInputsContainer,
  ToggleButtonContainer,
  Icon2,
} from "./styles";

// import IntroSlider from "react-intro-slider";
import {
  // Icon,
  // ShortcutContainer,
  // ShortcutContent,
  HomeContainer,
  // BackgroundCircle,
  // StampCardDetails,
  // CardsContainer
} from "./styles";
import "./styles/index.scss";
// import shortcutIcon from "../../assets/icons/shortcutIcon.svg";
// import shortcutIconAndroid from "../../assets/icons/shortcutIconAndroid.svg";
// import { Theme } from "../Theme";
import GlobalRequireAuth from "../../pages/SettingsPage/GlobalRequireAuth";
import { FormattedMessage, injectIntl } from "react-intl";

const networkIdentifier = cryptography.getNetworkIdentifier(
  "23ce0366ef0a14a91e5fd4b1591fc880ffbef9d988ff8bebf8f3666b0c09597d",
  "Lisk",
);

const dateToLiskEpochTimestamp = date => (
  Math.floor(new Date(date).getTime() / 1000) - Math.floor(new Date(Date.UTC(2016, 4, 24, 17, 0, 0, 0)).getTime() / 1000)
);


class CarPage extends Component {
  state = {
    numberPlate: "",
    carModel: "",
  };

  componentDidMount() {
    api.transactions.get({ type: 30, limit: 1, senderId: "814022546161084406L", sort:"timestamp:desc" })
    .then((response) => {
      console.log("++++++++++++++++ API Response +++++++++++++++++");
      this.setState(response.data[0].asset)
      console.log("++++++++++++++++ Transaction Payload +++++++++++++++++");
    })
    .catch((err) => {
      console.log(JSON.stringify(err.errors, null, 2));
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCreate = () => {

    const {numberPlate,carModel} = this.state;
    let accounts = {} // retrieve accoun
    let {user} = this.props // retrieve accoun
    const registerCarTransaction = new RegisterCarTransaction({
      asset: {
        carId : user.address,
        numberPlate,
        carModel,
      },
      networkIdentifier: networkIdentifier,
      timestamp: dateToLiskEpochTimestamp(new Date()),
    });

    registerCarTransaction.sign(user.passphrase);

    api.transactions
      .broadcast(registerCarTransaction.toJSON())
      .then((response) => {
        // res.app.locals.payload = {
        //   res: response.data,
        //   tx: registerCarTransaction.toJSON(),
        // };
        console.log("++++++++++++++++ API Response +++++++++++++++++");
        console.log(response.data);
        console.log("++++++++++++++++ Transaction Payload +++++++++++++++++");
        console.log(registerCarTransaction.stringify());
        console.log("++++++++++++++++ End Script +++++++++++++++++");
      })
      .catch((err) => {
        console.log(JSON.stringify(err.errors, null, 2));
        // res.app.locals.payload = {
        //   res: err,
        //   tx: registerCarTransaction.toJSON(),
        // };
        // res.redirect("/payload");
      });
  };

  handleRemove = () => {

    const {numberPlate,carModel} = this.state;
    let accounts = {} // retrieve accoun
    let {user} = this.props // retrieve accoun
    const registerCarTransaction = new RegisterCarTransaction({
      asset: {
        carId : user.address,
        numberPlate,
        carModel,
      },
      networkIdentifier: networkIdentifier,
      timestamp: dateToLiskEpochTimestamp(new Date()),
    });

    registerCarTransaction.sign(user.passphrase);

    api.transactions
      .broadcast(registerCarTransaction.toJSON())
      .then((response) => {
        // res.app.locals.payload = {
        //   res: response.data,
        //   tx: registerCarTransaction.toJSON(),
        // };
        console.log("++++++++++++++++ API Response +++++++++++++++++");
        console.log(response.data);
        console.log("++++++++++++++++ Transaction Payload +++++++++++++++++");
        console.log(registerCarTransaction.stringify());
        console.log("++++++++++++++++ End Script +++++++++++++++++");
      })
      .catch((err) => {
        console.log(JSON.stringify(err.errors, null, 2));
        // res.app.locals.payload = {
        //   res: err,
        //   tx: registerCarTransaction.toJSON(),
        // };
        // res.redirect("/payload");
      });
  };

  render() {
    return (
      <>
        <HomeContainer>
          <LoginInputsContainer>
          <Link
                style={{
                  display: "flex",
                  position: "relative",
                  width: "100%",
                }}
                to={"/home/car"}>
          <IconContainer onClick={this.closeModalHandler}>
                  <Icon src={closeIcon} />
            </IconContainer>
            </Link>
            <SecondInputContainer>
              <Input
                name="numberPlate"
                type={"text"}
                onChange={this.handleChange}
                value={this.state.numberPlate}
                placeholder="Number plate"
              />
              <ToggleButtonContainer>
                <Icon2 src={calendar} />
              </ToggleButtonContainer>
            </SecondInputContainer>
            <SecondInputContainer>
              <Input
                name="carModel"
                type={"text"}
                onChange={this.handleChange}
                value={this.state.carModel}
                placeholder="Car model"
              />
              <ToggleButtonContainer>
                <Icon2 src={calendar} />
              </ToggleButtonContainer>
            </SecondInputContainer>
            <ButtonContainer>
              <BlueButtonLoading
                isLoading={this.state.loading}
                onClick={() => this.handleCreate()}
              >
                <FormattedMessage id={"global.create"} />
              </BlueButtonLoading>
            </ButtonContainer>
          </LoginInputsContainer>
        </HomeContainer>
        <Menubar />
      </>
    );
  }
}
export default CarPage;
