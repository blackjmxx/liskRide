import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Menubar from "../../components/MenuBar/Menubar";
import { api } from "../../components/Api";
import closeIcon from "../../assets/icons/closeIcon.svg";
import BookTravelTransaction from "../../transactions/book-travel";
import { getUser } from "../../utils/storage";
import { networkIdentifier , dateToLiskEpochTimestamp} from "../../utils";
import BookModal from "../../components/BookModal/BookModal";

import { IconContainer, Icon } from "../SettingsPage/LoginForm/style";

import { Container } from "../../components/common/styles";

import {
  GiftItemContainer,
  GiftImageContainer,
  GiftItemContentContainer,
  TimeoutContentContainer,
  ItemsContainer,
} from "../../components/common/styles";

import { NotificationsViewContainer } from "../../components/common/styles"

import { Content, Title } from "../../components/NotificationItem/style";

import "./styles/index.scss";
class TravelResuls extends Component {
  state = {
    startDate: new Date(),
    newTravel: undefined,
    mytravels: [],
    selectedTravel: -1,
    sealctedSeatCount:-1,
    isBookingLoading:false
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

  handleOpenBookModal = (id, travelIndex) => {
    this.setState({ selectedTravel: travelIndex });
    this.setState({ showTravelModal: true });
  };

  handleBook = () => {
    this.setState({isBookingLoading:true})
    const { travels} = this.props;
    const {selectedTravel , sealctedSeatCount} = this.state
    
    if (travels[selectedTravel] && sealctedSeatCount > 0) {

      let travelId = travels[selectedTravel].travelId
      let carId = travels[selectedTravel].carId

      let user = JSON.parse(getUser());

      const bookTravelTransaction = new BookTravelTransaction({
        asset: {
          passengerId: user.address,
          travelId,
          seatCount: sealctedSeatCount,
          carId,
        },
        networkIdentifier: networkIdentifier,
        timestamp: dateToLiskEpochTimestamp(new Date()),
      });

      bookTravelTransaction.sign(user.passphrase);
      api.transactions
        .broadcast(bookTravelTransaction.toJSON())
        .then((response) => {
          this.setState({isBookingLoading:false})
          this.setState({showTravelModal:false})
        })
        .catch((err) => {
          this.setState({isBookingLoading:false})
          this.setState({showTravelModal:false})
        });
    } else{
      console.log('error')
    }
  };

  handleChangeSeatCount = (e, { value }) => {
    this.setState({sealctedSeatCount:value})
  }

  render() {
    const { travels } = this.props;
    const {selectedTravel, isBookingLoading} = this.state
    return (
      <>
        <NotificationsViewContainer>
          {this.state.showTravelModal && (
            <BookModal
              closeModal={() => this.setState({ showTravelModal: false })}
              travel={travels[selectedTravel]}
              availableSeatCount={travels[selectedTravel].availableSeatCount}
              handleAction={this.handleBook}
              handleChangeSeatCount={this.handleChangeSeatCount}
              isBookingLoading={isBookingLoading}
            ></BookModal>
          )}
          <Link to="/home">
            <IconContainer>
              <Icon src={closeIcon} />
            </IconContainer>
          </Link>
          <Container>
            <ItemsContainer>
              {travels.map((travel, i) => (
                <GiftItemContainer
                  key={i}
                  onClick={() =>
                    this.handleOpenBookModal(travel.travelId, i)
                  }
                >
                  <GiftImageContainer>
                  </GiftImageContainer>
                  <GiftItemContentContainer>
                    <Title>
                      {travel.pickUpLocation} {"-->"} {travel.destination}{" "}
                    </Title>
                    <Content>
                      <b>Price:{travel.pricePerSeat} LSK</b>
                    </Content>
                    <TimeoutContentContainer>
                      <Content>Start - {travel.pickUpDate}</Content>
                    </TimeoutContentContainer>
                  </GiftItemContentContainer>
                </GiftItemContainer>
              ))}
            </ItemsContainer>
          </Container>
        </NotificationsViewContainer>
        <Menubar />
      </>
    );
  }
}

const mapStateTopProps = (state) => {
  return {
    user: state.settings.user,
    travels: state.home.travelsSearched
      ? state.home.travelsSearched.travels
      : [],
    search: state.home.travelsSearched ? state.home.travelsSearched.search : {},
  };
};

export default connect(mapStateTopProps, null)(TravelResuls);
