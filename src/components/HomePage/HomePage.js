import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import AlgoliaPlaces from "algolia-places-react";
import Notifications from "../Notifications";
import Menubar from "../MenuBar/Menubar";
import BlueButtonLoading from "../../components/Buttons/BlueButtonLoading";
import pin from "../../assets/icons/pin.svg";
import calendar from "../../assets/icons/calendar.svg";
import seat from "../../assets/icons/seat.svg";
import Moment from "moment";
import _ from "lodash";
import CalendarModal from "../../components/CalendarModal/CalendarModal";
import { connect } from "react-redux";

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
import { User } from "parse";
// import { Theme } from "../Theme";
import GlobalRequireAuth from "../../pages/SettingsPage/GlobalRequireAuth";
import { FormattedMessage, injectIntl } from "react-intl";

class HomePage extends Component {
  state = {
    departure: undefined,
    pickUpLocation: undefined,
    pickUpDate: new Date(),
    availableSeatCount: 0,
    pricePerSeat: 0,
    travels:[],
    showCalendarModal: false,
    isLoading:false
  };
  constructor(props) {
    super(props);

    let currentUser = User.current();

    if (currentUser) {
      // loadUser and redirect
    }
  }

  handleForm = () => {
    const filteredByDestination = [];
    const filteredBypickUpLocation = [];
    const filteredBypickUpDate = [];
    const filteredByAvailableSeatCount = [];
    
    const {
      destination,
      pickUpLocation,
      pickUpDate,
      availableSeatCount,
    } = this.state;

    const travels = [];
    // if(!departure || !pickUpLocation || !pickUpDate || !availableSeatCount){
    //   return
    // }
    
    this.setState({isLoading:true})
    let destinationP = fetch(
      `http://localhost:2020/extended-api/transactions?asset=destination&contains=${destination}`
    );
    let pickUpLocationP = fetch(
      `http://localhost:2020/extended-api/transactions?asset=pickUpLocation&contains=${pickUpLocation}`
    );
    let pickUpDateP = fetch(
      `http://localhost:2020/extended-api/transactions?asset=pickUpDate&contains=${pickUpDate}`
    );


    var search = {
      availableSeatCount,
      pickUpDate,
      pickUpLocation,
      destination
    };

    debugger
    Promise.all([
      destinationP,
      pickUpLocationP,
      pickUpDateP,
    ])
      .then((values) => {
        let promises = [];
        values.forEach((value) => {
          promises.push(value.json());
        });
        Promise.all(promises).then((values) => {
          values.forEach((value) => {
            console.log(value);
            value.data.forEach((v) => travels.push({travelId:v.id, carId:v.carId,...v.asset}));
          });
          
          const filter = {pickUpDate, pickUpLocation, destination}

          let results = travels.filter(function(item) {
            for (var key in filter) {
              if (item[key] === undefined || item[key] != filter[key])
                return false;
            }
            return true;
          });
          this.setState({isLoading:false})
          let uniquResult = _.uniqBy(results, 'travelId');
          debugger
          this.props.updateTravels({travels:uniquResult, search})         
          this.props.history.push("/home/results");
        });
      })
      .catch((reason) => {
        this.setState({isLoading:false})
        console.log(reason);
      });
  };

  handleChangeDeparture = ({
    query,
    rawAnswer,
    suggestion,
    suggestionIndex,
  }) => {
    //this.setState()
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

  componentDidMount = () => {};

  render() {
    const { error } = this.props;
    if (error) {
      return <Redirect to="/404" />;
    }
    return (
      <>
        <GlobalRequireAuth {...this.props}>
          <HomeContainer>
          {this.state.showCalendarModal && (
          <CalendarModal
            closeModal={() => this.setState({ showCalendarModal: false })}
            handleChange={(data) =>
              this.handleChange({ name: "pickUpDate", data })
            }
          ></CalendarModal>
          )}
            <Notifications />
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
                  onClear={() =>
                    console.log("Fired when the input is cleared.")
                  }
                  onLimit={({ message }) =>
                    console.log(
                      "Fired when you reached your current rate limit."
                    )
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
                  isLoading={this.state.isLoading}
                  onClick={() => this.handleForm()}
                >
                  <FormattedMessage id={"global.search"} />
                </BlueButtonLoading>
              </ButtonContainer>
            </LoginInputsContainer>
          </HomeContainer>
          <Menubar />
        </GlobalRequireAuth>
      </>
    );
  }
}


export default injectIntl(HomePage);
