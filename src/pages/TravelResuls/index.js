import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import Menubar from "../../components/MenuBar/Menubar";
import BlueButtonLoading from "../../components/Buttons/BlueButtonLoading";
import pin from "../../assets/icons/pin.svg";
import calendar from "../../assets/icons/calendar.svg";
import seat from "../../assets/icons/seat.svg";
import { api } from "../../components/Api";
import warningIcon from "../../assets/icons/warningIcon.svg";
import personImg from "../../assets/images/person.svg";
import closeIcon from "../../assets/icons/closeIcon.svg";
import BookTravelTransaction from "../../transactions/book-travel";

import {
  WarningInformationContainer2,
  IconContainer,
  WarningIcon,
  WarningText,
  WarningContentContainer,
  PersonIcon,
  WarningImageContainer,
  Icon,
  CommonContainerView,
} from "../SettingsPage/LoginForm/style";
import Moment from "react-moment";
import * as cryptography from '@liskhq/lisk-cryptography';


import {
  Input,
  ButtonContainer,
  SecondInputContainer,
  LoginInputsContainer,
  ButtonContainer2,
  ToggleButtonContainer,
  Icon2,
  HomeContainer,
} from "./styles";

// import IntroSlider from "react-intro-slider";

import {
  GiftItemContainer,
  GiftImageContainer,
  GiftImage,
  GiftItemContentContainer,
  TimeoutContentContainer,
  ItemsContainer,
  NotificationsViewContainer,
} from "./styles2";
import { Content, Title } from "../../components/NotificationItem/style";

import "./styles/index.scss";
// import shortcutIcon from "../../assets/icons/shortcutIcon.svg";
// import shortcutIconAndroid from "../../assets/icons/shortcutIconAndroid.svg";
import { User } from "parse";
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
const GifItem = ({ name, description, imageUrl, expireAt, handleUseGift }) => (
  <GiftItemContainer onClick={() => handleUseGift()}>
    <GiftImageContainer>
      <GiftImage src={imageUrl} />
    </GiftImageContainer>
    <GiftItemContentContainer>
      <Title>{name}</Title>
      <Content>{description}</Content>
      <TimeoutContentContainer>
        <Content>
          Expire - {<Moment format="DD MM YYYY">{expireAt}</Moment>}
        </Content>
      </TimeoutContentContainer>
    </GiftItemContentContainer>
  </GiftItemContainer>
);

class TravelResuls extends Component {
  state = {
    startDate: new Date(),
    newTravel: undefined,
    mytravels: [],
  };

  todayNotifications = [
    {
      title: `You've won a free donut`,
      content: "Locals Coffee",
    },
    {
      title: `You've won a free donut`,
      content: "Locals Coffee",
    },
    {
      title: `You've won a free donut`,
      content: "Locals Coffee",
    },
  ];

  componentDidMount() {}

  handleSelect = (travelId, carId) => {
    if(travelId){
      let accounts = {} // retrieve accoun
      let {user, search} = this.props // retrieve accoun
      
      const bookTravelTransaction = new BookTravelTransaction({
        asset: {
          passengerId : user.address,
          travelId,
          seatCount:search.availableSeatCount,
          carId
        },
        networkIdentifier: networkIdentifier,
        timestamp: dateToLiskEpochTimestamp(new Date()),
      });
  
      bookTravelTransaction.sign(user.passphrase);
      api.transactions
        .broadcast(bookTravelTransaction.toJSON())
        .then((response) => {;
          console.log("++++++++++++++++ API Response +++++++++++++++++");
          console.log(response.data);
          console.log("++++++++++++++++ Transaction Payload +++++++++++++++++");
          console.log(bookTravelTransaction.stringify());
          console.log("++++++++++++++++ End Script +++++++++++++++++");
        })
        .catch((err) => {
          console.log(JSON.stringify(err.errors, null, 2));
        });
    }
  }

  render() {
    return (
      <>
        <CommonContainerView>
            <Link to="/home">
              <IconContainer>
                <Icon src={closeIcon} />
              </IconContainer>
            </Link>
            <LoginInputsContainer>
            {this.props.travels.map((travel, i) => {
              return (
                <GifItem
                  handleUseGift={() => this.handleSelect(travel.travelId, travel.carId)}
                  name={travel.name}
                  imageUrl={travel.imageUrl}
                  pickupdate={travel.pickUpDate}
                  pickupLocation={travel.pickupLocation}
                />
              );
            })}
          </LoginInputsContainer>
        </CommonContainerView>
        <Menubar />
      </>
    );
  }
}

const mapStateTopProps = (state) => {
  return {
    user:state.settings.user,
    travels: state.home.travelsSearched
      ? state.home.travelsSearched.travels
      : [],
    search:state.home.travelsSearched
    ? state.home.travelsSearched.search
    : {}
  };
};

export default connect(mapStateTopProps, null)(TravelResuls);
