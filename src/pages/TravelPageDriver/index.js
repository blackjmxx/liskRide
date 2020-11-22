import React, { Component } from "react";
import Menubar from "../../components/MenuBar/Menubar";
import { api } from "../../components/Api";
import FinishTavelTransaction from "../../transactions/finnish-travel";
import TravelModal from "../../components/TravelModal/TravelModal";
import BlueButtonLoading from "../../components/Buttons/BlueButtonLoading";
import { networkIdentifier , dateToLiskEpochTimestamp} from "../../utils";
import GlobalRequireAuth from "../../pages/SettingsPage/GlobalRequireAuth";
import {
  WarningInformationContainer4,
} from "../SettingsPage/LoginForm/style";
import { getUser2 } from "../../utils/storage";
import { connect } from "react-redux";
import Avatar from 'react-avatar';

import {
  GiftItemContainer,
  GiftImageContainer,
  GiftItemContentContainer,
  TimeoutContentContainer,
  ItemsContainer,
  NotificationsViewContainer,
} from "../../components/common/styles";

import { Content, Title } from "../../components/NotificationItem/style";

import "./styles/index.scss";

import { FormattedMessage } from "react-intl";

class TravelPageDriver extends Component {
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

  componentDidMount() {
    let user = JSON.parse(getUser2());
    if(user){
      this.setState({isLoading:true})

      api.accounts
        .get({ address: user.address })
        .then((response) => {
          
          this.setState({ mytravels: response.data[0].asset.driverTravels || []});
        })
        .catch((err) => {
          console.log(JSON.stringify(err.errors, null, 2));
        });
    }
  }

  handleOpenTravelModal = (id, travelIndex) => {
    this.props.history.push("/home/travel/"+id);
  }

  addTravel = () => {
    if (this.setState.newTravel) {
      // add travel
    }
  };

  handleTravel = (id) => {
    let user = JSON.parse(getUser2());
    const { mytravels, selectedTravel } = this.state;
    const finishTavelTransaction = new FinishTavelTransaction({
      asset: {
        passengerId : user.address,
        travelId:mytravels[selectedTravel].asset.travelId,
      },
      networkIdentifier: networkIdentifier,
      timestamp: dateToLiskEpochTimestamp(new Date()),
    });

    finishTavelTransaction.sign(user.passphrase);
    api.transactions
      .broadcast(finishTavelTransaction.toJSON())
      .then((response) => {;
        console.log("++++++++++++++++ API Response +++++++++++++++++");
        console.log(response.data);
        console.log("++++++++++++++++ Transaction Payload +++++++++++++++++");
        console.log(finishTavelTransaction.stringify());
        console.log("++++++++++++++++ End Script +++++++++++++++++");
      })
      .catch((err) => {
        console.log(JSON.stringify(err.errors, null, 2));
      });
  }

  goTo = () => {
    this.props.history.push('/home/travel/manage')
  }

  render() {
    const { mytravels, selectedTravel } = this.state;
    return (
      <GlobalRequireAuth {...this.props}>
        <NotificationsViewContainer>
        {this.state.showTravelModal && (
          <TravelModal
            closeModal={() => this.setState({ showTravelModal: false })}
            travel={mytravels[selectedTravel]}
            handleAction={this.handleTravelAction}
          ></TravelModal>
          )}
          <ItemsContainer>
              <WarningInformationContainer4>
              <BlueButtonLoading
                  color={'#F1C310'}
                  onClick={() => this.goTo()}
                >
                  <FormattedMessage id={"paramsPage.manageTravel"} />
                </BlueButtonLoading>
              </WarningInformationContainer4>
            {mytravels.map((travel, i) => (
              <GiftItemContainer key={i}
              onClick={() => {this.handleOpenTravelModal(travel.travelId, i)}}
              >
                <GiftImageContainer>
                  <Avatar size='45px' name={travel.pickUpLocation + " " + travel.destination} />
                </GiftImageContainer>
                <GiftItemContentContainer>
                  <Title>
                    {travel.pickUpLocation}{"-->"}{travel.destination}{" "}
                  </Title>
                  <Content><b>Price:{travel.pricePerSeat} LSK</b></Content>
                  <TimeoutContentContainer>
                    <Content>Start - {travel.pickUpDate}</Content>
                  </TimeoutContentContainer>
                </GiftItemContentContainer>
              </GiftItemContainer>
            ))}
          </ItemsContainer>
        </NotificationsViewContainer>
        <Menubar />
      </GlobalRequireAuth>
    );
  }
}

const mapStateTopProps = (state) => {
  return {
    user: state.settings.user,
  };
};

export default connect(mapStateTopProps, null)(TravelPageDriver);
