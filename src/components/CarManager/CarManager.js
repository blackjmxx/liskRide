import React, { Component } from "react";
import {
  ContentContainer,
  AnimatedImage,
  ImageContainer,
  TitleContainer,
} from "./style";

import {
  Input,
  ToggleButtonContainer,
  Icon2,
  SecondInputContainer,
  LoginInputsContainer,
  ButtonContainer
} from "../HomePage/styles";

import BlueButtonLoading from "../../components/Buttons/BlueButtonLoading";


import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./style/calendar.css";
import { Title, IconContainer, Icon } from "../ForgotPassword/style";
import { CommonContainerView } from "../common/commonContainer";
import { Link } from "react-router-dom";
import closeIcon from "../../assets/icons/closeIcon.svg";
import { FormattedMessage } from "react-intl";
import $ from "jquery";
import { connect } from "react-redux";
import calendar from "../../assets/icons/calendar.svg";
import {
  loadLoyaltyCard,
  fetchInitLoyaltyCard,
  loadCachedLoyaltyCard,
  loadLoyaltyFakeCard,
  changeQrMode,
  addStampByValidationLink,
  closeValidationModal,
  addStampByMagicStamp,
} from "../../modules/home/actions";

const _keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

class CarManager extends Component {
  state = {
    stampTouching: false,
    value: new Date(),
  };
  closeScannerPage = () => {
    this.props.history.push("/home/travel");
  };

  componentDidMount() {}

  complete = () => {
    this.setState({ stampTouching: false });
  };

  displayCustomMessage = (helpMsg) => {
    $("#snowshoe-messages").children().replaceWith(helpMsg);
  };

  handleStampSuccess = (result) => {
    console.log("success");
  };

  handleStampError = (error) => {
    console.log(" :-( ");
  };

  handleChange = (data) => {};
  render() {
    return (
      <CommonContainerView>
        <Link to="/home">
          <IconContainer>
            <Icon src={closeIcon} />
          </IconContainer>
        </Link>
        <LoginInputsContainer>
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
      </CommonContainerView>
    );
  }
}

const mapStateTopProps = (state) => {
  return {
    isLoadingCard: state.home.isLoadingCard,
    currentCard: state.home.currentCard,
    error: state.home.error,
    card: state.home.card,
    qrscanMode: state.home.qrscanMode,
    isValidationSucceed: state.home.isValidationSucceed,
    hasValue: state.home.hasValue,
  };
};

const mapActionCreators = {
  loadLoyaltyCard,
  fetchInitLoyaltyCard,
  loadCachedLoyaltyCard,
  loadLoyaltyFakeCard,
  changeQrMode,
  addStampByValidationLink,
  closeValidationModal,
  addStampByMagicStamp,
};

export default connect(mapStateTopProps, mapActionCreators)(CarManager);