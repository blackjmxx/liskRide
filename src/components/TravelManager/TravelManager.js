import React, { Component } from "react";
import AlgoliaPlaces from "algolia-places-react";
import CalendarModal from "../../components/CalendarModal/CalendarModal";
import Moment from "moment";
import { Mnemonic } from '@liskhq/lisk-passphrase';
import { getAddressAndPublicKeyFromPassphrase } from '@liskhq/lisk-cryptography';
import ShortUniqueId from 'short-unique-id';

import {
  Input,
  ToggleButtonContainer,
  Icon2,
  SecondInputContainer,
  LoginInputsContainer,
  ButtonContainer,
} from "../HomePage/styles";
import { api } from '../../components/Api';

import BlueButtonLoading from "../../components/Buttons/BlueButtonLoading";
import RegisterTravelTransaction from "../../transactions/register-travel";

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
import * as cryptography from '@liskhq/lisk-cryptography';
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

const networkIdentifier = cryptography.getNetworkIdentifier(
  "23ce0366ef0a14a91e5fd4b1591fc880ffbef9d988ff8bebf8f3666b0c09597d",
  "Lisk",
);

const dateToLiskEpochTimestamp = date => (
  Math.floor(new Date(date).getTime() / 1000) - Math.floor(new Date(Date.UTC(2016, 4, 24, 17, 0, 0, 0)).getTime() / 1000)
);

const date = new Date();

class TravelManager extends Component {
  state = {
    departure: undefined,
    pickUpLocation: undefined,
    pickUpDate: date,
    availableSeatCount: 0,
    pricePerSeat: 0,
    value: new Date(),
    showCalendarModal: false,
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

  handleChange = (value) => {
    if (value.name === "destination" || value.name === "pickUpLocation") {
      this.setState({ [value.name]: value.data.suggestion.name });
      return;
    }
    if (value.name === "pickUpDate") {
      this.setState({ [value.name]: Moment(value.data).format("MM-DD-YYYY") });
      return;
    }
    this.setState({ [value.target.name]: value.target.value });
  };

  addTravel = () => {
    
    const { pickUpLocation, pickUpDate, availableSeatCount, pricePerSeat, destination} = this.state;

    let accounts = {} // retrieve accoun
    let {user} = this.props // retrieve accoun
    const uid = new ShortUniqueId();
    let registerpassphrase = Mnemonic.generateMnemonic();
    const { address, publicKey } = getAddressAndPublicKeyFromPassphrase(registerpassphrase);
    
    const registerTravelTransaction = new RegisterTravelTransaction({
      asset: {
        carId : user.address,
        travelId:address,
        pickUpLocation,
        destination,
        pickUpDate,
        availableSeatCount,
        pricePerSeat
      },
      networkIdentifier: networkIdentifier,
      timestamp: dateToLiskEpochTimestamp(new Date()),
    });

    registerTravelTransaction.sign(user.passphrase);
    api.transactions
      .broadcast(registerTravelTransaction.toJSON())
      .then((response) => {;
        console.log("++++++++++++++++ API Response +++++++++++++++++");
        console.log(response.data);
        console.log("++++++++++++++++ Transaction Payload +++++++++++++++++");
        console.log(registerTravelTransaction.stringify());
        console.log("++++++++++++++++ End Script +++++++++++++++++");
      })
      .catch((err) => {
        console.log(JSON.stringify(err.errors, null, 2));
      });
  }

  render() {
    return (
      <CommonContainerView>
        {this.state.showCalendarModal && (
          <CalendarModal
            closeModal={() => this.setState({ showCalendarModal: false })}
            handleChange={(data) =>
              this.handleChange({ name: "pickUpDate", data })
            }
          ></CalendarModal>
        )}
        <Link to="/home">
          <IconContainer>
            <Icon src={closeIcon} />
          </IconContainer>
        </Link>
        <LoginInputsContainer>
          <SecondInputContainer>
            <AlgoliaPlaces
              key="destinationId"
              placeholder="Destination"
              name={"destination"}
              options={{
                appId: "plEXDWG96G11",
                apiKey: "45fcb12e9304daabbb2dfc2a4a12271a",
                language: "fr",
                countries: ["fr"],
                type: "city",
              }}
              onChange={(data) =>
                this.handleChange({ name: "destination", data: data })
              }
              onError={({ message }) =>
                console.log(
                  "Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit."
                )
              }
            />
          </SecondInputContainer>
          <SecondInputContainer>
            <AlgoliaPlaces
              key="pickUpLocationId"
              placeholder="Pick up location"
              name={"pickUpLocation"}
              options={{
                appId: "plEXDWG96G11",
                apiKey: "45fcb12e9304daabbb2dfc2a4a12271a",
                language: "fr",
                countries: ["fr"],
                type: "city",
              }}
              onChange={(data) =>
                this.handleChange({ name: "pickUpLocation", data: data })
              }
              onCursorChanged={({
                rawAnswer,
                query,
                suggestion,
                suggestonIndex,
              }) =>
                console.log(
                  "Fired when arrows keys are used to navigate suggestions."
                )
              }
              onClear={() => console.log("Fired when the input is cleared.")}
              onLimit={({ message }) =>
                console.log("Fired when you reached your current rate limit.")
              }
              onError={({ message }) =>
                console.log(
                  "Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit."
                )
              }
            />
          </SecondInputContainer>
          <SecondInputContainer>
            <Input
              as="button"
              onClick={() => this.setState({ showCalendarModal: true })}
              name="pickupdate"
              value={Moment(this.state.pickUpDate).format("MM-DD-YYYY")}
              placeholder="pick up date"
            />
            <ToggleButtonContainer>
              <Icon2 src={calendar} />
            </ToggleButtonContainer>
          </SecondInputContainer>
          <SecondInputContainer>
            <Input
              name="pricePerSeat"
              type={"number"}
              onChange={this.handleChange}
              value={this.state.pricePerSeat}
              placeholder="Price per seat"
            />
            <ToggleButtonContainer>
              <Icon2 src={calendar} />
            </ToggleButtonContainer>
          </SecondInputContainer>
          <SecondInputContainer>
            <Input
              name="availableSeatCount"
              type={"number"}
              max={6}
              onChange={this.handleChange}
              value={this.state.availableSeatCount}
              placeholder="Price per seat"
            />
            <ToggleButtonContainer>
              <Icon2 src={calendar} />
            </ToggleButtonContainer>
          </SecondInputContainer>
          <ButtonContainer>
            <BlueButtonLoading
              isLoading={this.state.loading}
              onClick={() => this.addTravel()}
            >
              <FormattedMessage id={"global.addTravel"} />
            </BlueButtonLoading>
          </ButtonContainer>
        </LoginInputsContainer>
      </CommonContainerView>
    );
  }
}

const mapStateTopProps = (state) => {
  return {
    user: state.settings.user,
  }
}

const mapActionCreators = {
}

export default connect(mapStateTopProps, mapActionCreators)(TravelManager);
