import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import AlgoliaPlaces from "algolia-places-react";
import Menubar from "../../components/MenuBar/Menubar";
import { cryptography, transactions } from "@liskhq/lisk-client";
import { transfer, utils } from "@liskhq/lisk-transactions";
import { api } from "../../components/Api";
import BlueButtonLoading from "../../components/Buttons/BlueButtonLoading";
import pin from "../../assets/icons/pin.svg";
import calendar from "../../assets/icons/calendar.svg";
import seat from "../../assets/icons/seat.svg";
import warningIcon from "../../assets/icons/warningIcon.svg";
import personImg from "../../assets/images/person.svg";
import { GenesisBlock } from 'lisk-genesis';

// import genesisBlock from GenesisBlock('applicationName');
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

const networkIdentifier = cryptography.getNetworkIdentifier(
  "23ce0366ef0a14a91e5fd4b1591fc880ffbef9d988ff8bebf8f3666b0c09597d",
  "Lisk"
);


const dateToLiskEpochTimestamp = (date) =>
  Math.floor(new Date(date).getTime() / 1000) -
  Math.floor(new Date(Date.UTC(2016, 4, 24, 17, 0, 0, 0)).getTime() / 1000);

class TransfertPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      amount: "",
      nonce: "",
      passphrase: "",
      response: { meta: { status: false } },
      transaction: {},
    };
  }

  componentDidMount = () => {
    //get all travel
  };

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    debugger
    try {
      const genesisBlock = new GenesisBlock('lisk-ride');

      genesisBlock.addTransfer({
        recipientId: "6886486208600170178L",
        amount: "1000"
      });
    } catch (error) {
      debugger
      console.log(error)
    }

    // api.accounts
    //   .get({ address: '6886486208600170178L'})
    //   .then((response1) => { 
    //     debugger
    //     const fundTransaction = transactions.transfer({
    //       amount: transactions.utils.convertLSKToBeddows('100'),
    //       recipientId: '6886486208600170178L',
    //       passphrase: 'creek own stem final gate scrub live shallow stage host concert they',
    //       senderPublicKey:"5c554d43301786aec29a09b13b485176e81d1532347a351aeafe018c199fd7ca",
    //       networkIdentifier,
    //       fee: transactions.utils.convertLSKToBeddows("0.1"),
    //       nonce:"1",
    //     });

    //     api.transactions
    //       .broadcast(fundTransaction)
    //       .then((response2) => {
    //         console.log("++++++++++++++++ API Response +++++++++++++++++");
    //         console.log(response2.data);
    //         console.log(
    //           "++++++++++++++++ Transaction Payload +++++++++++++++++"
    //         );
    //         console.log(fundTransaction);
    //         console.log("++++++++++++++++ End Script +++++++++++++++++");
    //       })
    //       .catch((err) => {
    //         console.log(JSON.stringify(err.errors, null, 2));
    //       });
    //   });
  };

  render() {
    return (
      <>
        <NotificationsViewContainer>
          <ItemsContainer>
            <div>
              <h2>Transfer</h2>
              <p>Send tokens from one account to another.</p>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Recipient:
                  <input
                    type="text"
                    id="address"
                    name="address"
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Amount (1 = 10^8 tokens):
                  <input
                    type="text"
                    id="amount"
                    name="amount"
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Nonce:
                  <input
                    type="text"
                    id="nonce"
                    name="nonce"
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Passphrase:
                  <input
                    type="text"
                    id="passphrase"
                    name="passphrase"
                    onChange={this.handleChange}
                  />
                </label>
                <input type="submit" value="Submit" />
              </form>
              {this.state.response.meta.status && (
                <div>
                  <pre>
                    Transaction:{" "}
                    {JSON.stringify(this.state.transaction, null, 2)}
                  </pre>
                  <p>
                    Response: {JSON.stringify(this.state.response, null, 2)}
                  </p>
                </div>
              )}
            </div>
          </ItemsContainer>
        </NotificationsViewContainer>
        <Menubar />
      </>
    );
  }
}
export default TransfertPage;
