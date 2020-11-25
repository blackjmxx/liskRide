import React, { Component } from "react";

import {
  Input,
  ToggleButtonContainer,
  IconForm,
  SecondInputContainer,
  LoginInputsContainer,
  ButtonContainer,
  Icon3,
  IconContainer
} from "../../components/common/styles";


import BlueButtonLoading from "../../components/Buttons/BlueButtonLoading";
import "react-calendar/dist/Calendar.css";
import "./style/calendar.css";
import { CommonContainerView } from "../common/commonContainer";
import { Link } from "react-router-dom";
import closeIcon from "../../assets/icons/closeIcon.svg";
import { FormattedMessage } from "react-intl";
import $ from "jquery";
import { connect } from "react-redux";
import calendar from "../../assets/icons/calendar.svg";

class CarManager extends Component {
  state = {
    stampTouching: false,
    value: new Date(),
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
        <Link to="/home/params">
          <IconContainer>
            <Icon3 src={closeIcon} />
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
              <IconForm src={calendar} />
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
              <IconForm src={calendar} />
            </ToggleButtonContainer>
          </SecondInputContainer>
          <ButtonContainer>
            <BlueButtonLoading
              isLoading={this.state.loading}
              onClick={() => this.handleCreate()}
            >
              <FormattedMessage id={"global.update"} />
            </BlueButtonLoading>
          </ButtonContainer>
        </LoginInputsContainer>
      </CommonContainerView>
    );
  }
}

const mapStateTopProps = (state) => {
  return {
    error: state.home.error,
    isValidationSucceed: state.home.isValidationSucceed,
    hasValue: state.home.hasValue,
  };
};

const mapActionCreators = {
};

export default connect(mapStateTopProps, mapActionCreators)(CarManager);
