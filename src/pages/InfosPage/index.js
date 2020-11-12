import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import AlgoliaPlaces from "algolia-places-react";
import Menubar from "../../components/MenuBar/Menubar";
import BlueButtonLoading from "../../components/Buttons/BlueButtonLoading";
import pin from "../../assets/icons/pin.svg";
import calendar from "../../assets/icons/calendar.svg";
import seat from "../../assets/icons/seat.svg";
import warningIcon from "../../assets/icons/warningIcon.svg";
import personImg from "../../assets/images/person.svg";
import {
  WarningInformationContainer2,
  IconContainer,
  WarningIcon,
  WarningText,
  WarningContentContainer,
  PersonIcon,
  WarningImageContainer,
} from "../SettingsPage/LoginForm/style";
import Moment from "react-moment";

import {
  Input,
  ButtonContainer,
  SecondInputContainer,
  LoginInputsContainer,
  ButtonContainer2,
  ToggleButtonContainer,
  Icon2,
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

class InfosPage extends Component {
  state = {
    startDate: new Date(),
    newTravel: undefined,
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

  componentDidMount = () => {
    //get all travel
  };

  addTravel = () => {
    if (this.setState.newTravel) {
      // add travel
    }
  };

  render() {
    const mytravels = [{}, {}, {}, {}, {}, {}];
    return (
      <>
        <NotificationsViewContainer>
          <ItemsContainer>
            <Link style={{
                display: "flex",
                position: "relative",
                width: "100%",
              }} to={"/home/car"}>
              {" "}
              <WarningInformationContainer2>
                <IconContainer>
                  <WarningIcon src={warningIcon} />
                </IconContainer>
                <WarningContentContainer>
                  <WarningText>
                    <FormattedMessage id={"paramsPage.manageCar"} />
                  </WarningText>
                </WarningContentContainer>
                <WarningImageContainer>
                  <PersonIcon src={personImg} />
                </WarningImageContainer>
              </WarningInformationContainer2>
            </Link>
            {mytravels.map((travel, i) => {
              return (
                <GifItem
                  handleUseGift={() => this.handleUseGift(i)}
                  name={travel.name}
                  imageUrl={travel.imageUrl}
                  pickupdate={travel.pickUpDate}
                  pickupLocation={travel.pickupLocation}
                />
              );
            })}
          </ItemsContainer>
        </NotificationsViewContainer>
        <Menubar />
      </>
    );
  }
}
export default InfosPage;
