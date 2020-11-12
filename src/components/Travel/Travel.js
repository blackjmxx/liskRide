import React, { Component } from 'react';
import { ContentContainer, AnimatedImage, ImageContainer, TitleContainer } from "./style"
import {
    Input,
    ToggleButtonContainer,
    Icon2,
    SecondInputContainer,
    LoginInputsContainer,
  } from "../HomePage/styles";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./style/calendar.css"
import { Title, IconContainer, Icon } from "../ForgotPassword/style"
import { CommonContainerView } from '../common/commonContainer';
import { Link } from 'react-router-dom'
import closeIcon from "../../assets/icons/closeIcon.svg";
import { FormattedMessage } from 'react-intl';
import $ from 'jquery';
import { connect } from 'react-redux'
import {loadLoyaltyCard, fetchInitLoyaltyCard, loadCachedLoyaltyCard, loadLoyaltyFakeCard, changeQrMode, addStampByValidationLink,
    closeValidationModal, addStampByMagicStamp } from '../../modules/home/actions'
    import {
        HomeContainer,
        ButtonContainer,
      } from "../../pages/InfosPage/styles";
import AlgoliaPlaces from "algolia-places-react";
import BlueButtonLoading from "../../components/Buttons/BlueButtonLoading";
import calendar from "../../assets/icons/calendar.svg";

const _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

class Travel extends Component {
    
    state = {
        stampTouching:false,
        value:new Date()
    }
    closeScannerPage = () => {
        this.props.history.push("/home");
      };

    componentDidMount() {
    }

    complete = () => {
        this.setState({ stampTouching: false });
    }

    displayCustomMessage = (helpMsg) => {
        $("#snowshoe-messages").children().replaceWith(helpMsg);
    };

    handleStampSuccess = (result) => {
        console.log('success')
    }

    handleStampError = (error) => {
        console.log(" :-( ");
    }

    handleChange = (data) => {
        
    }
    render() {
        return (
            <CommonContainerView>
                <Link to='/home'>
                    <IconContainer>
                        <Icon src={closeIcon} />
                    </IconContainer>
                </Link>
                <ToggleButtonContainer>
                <HomeContainer>
          <LoginInputsContainer>
            <Link
              style={{
                display: "flex",
                position: "relative",
                width: "100%",
              }}
              to={"/home/travel"}
            >
              Add travel
            </Link>
            <SecondInputContainer>
              <AlgoliaPlaces
                key="destinationId"
                placeholder="Pick "
                name={"departure"}
                options={{
                  appId: "plEXDWG96G11",
                  apiKey: "45fcb12e9304daabbb2dfc2a4a12271a",
                  language: "fr",
                  countries: ["fr"],
                  type: "address",
                }}
                onChange={this.handleChangeDeparture}
                onSuggestions={({ rawAnswer, query, suggestions }) =>
                  console.log(
                    "Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed."
                  )
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
            <AlgoliaPlaces
                key="pickUpLocationId"
                placeholder="Pick up location"
                name={"departure"}
                options={{
                  appId: "plEXDWG96G11",
                  apiKey: "45fcb12e9304daabbb2dfc2a4a12271a",
                  language: "fr",
                  countries: ["fr"],
                  type: "address",
                }}
                onChange={this.handleChangeDeparture}
                onSuggestions={({ rawAnswer, query, suggestions }) =>
                  console.log(
                    "Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed."
                  )
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
                <Link
                  style={{
                    display: "flex",
                    position: "relative",
                    width: "100%",
                  }}
                  to={"/home/search/start"}
                >
                  <Input
                    name="pickupdate"
                    type={"text"}
                    onChange={this.handleChange}
                    value={this.state.location}
                    placeholder="pick up date"
                  />
                </Link>
                <ToggleButtonContainer>
                  <Icon2 src={calendar} />
                </ToggleButtonContainer>
              </SecondInputContainer>
              <SecondInputContainer>
                  <Input
                    name="pickupdate"
                    type={"text"}
                    onChange={this.handleChange}
                    value={this.state.location}
                    placeholder="Price per seat"
                  />
                <ToggleButtonContainer>
                  <Icon2 src={calendar} />
                </ToggleButtonContainer>
              </SecondInputContainer>
              <SecondInputContainer>
                <div>Seats Count</div> 
                <BlueButtonLoading
                  size="small"
                  isLoading={this.state.loading}
                  onClick={() => this.onUp()}
                >
                  -
                </BlueButtonLoading>
                {12}
                <BlueButtonLoading
                  size="small"
                  isLoading={this.state.loading}
                  onClick={() => this.onDown()}
                >
                  +
                </BlueButtonLoading>
              </SecondInputContainer>
              <ButtonContainer>
                <BlueButtonLoading
                  isLoading={this.state.loading}
                  onClick={() => this.handleForm()}
                >
                  <FormattedMessage id={"global.search"} />
                </BlueButtonLoading>
              </ButtonContainer>
          </LoginInputsContainer>
        </HomeContainer>
               </ToggleButtonContainer>
            </CommonContainerView>
        );
    }
}


const mapStateTopProps = (state) => {
    return {
      isLoadingCard: state.home.isLoadingCard,
      currentCard: state.home.currentCard,
      error: state.home.error,
      card:state.home.card,
      qrscanMode:state.home.qrscanMode,
      isValidationSucceed:state.home.isValidationSucceed,
      hasValue:state.home.hasValue
    }
  }
  
  const mapActionCreators = {
    loadLoyaltyCard,
    fetchInitLoyaltyCard,
    loadCachedLoyaltyCard,
    loadLoyaltyFakeCard, 
    changeQrMode,
    addStampByValidationLink,
    closeValidationModal,
    addStampByMagicStamp
  }

export default connect(mapStateTopProps, mapActionCreators)(Travel)