import React from "react";
import { PopupViewContainer } from "../popup/style";
import { FormattedMessage } from "react-intl";
import {
  Text,
  LogoutPopupContent,
  LogoutPopupContainer,
  ButtonContainer,
} from "../LogoutPopup/style";
import {
  BlueButton,
  SecondInputContainer
} from "../../components/common/styles";
import { Select } from "semantic-ui-react";
import BlueButtonLoading from "../../components/Buttons/BlueButtonLoading";

import "../popup/index.scss";

const BookModal = ({
  closeModal,
  handleAction,
  active,
  Title = "Book Travel",
  availableSeatCount,
  handleChangeSeatCount,
  isBookingLoading
}) => {

const options = []

 for (let index = 0; index < parseInt(availableSeatCount, 10); index++) {
     let newindex = index + 1;
     let key = newindex.toString();
     options.push({ key: key, value: key, text: key })
 }

  return (
    <PopupViewContainer className={active ? "active" : null}>
      <LogoutPopupContainer>
        <LogoutPopupContent>
          <Text>{Title}</Text>
        </LogoutPopupContent>
        <SecondInputContainer>
            Seat count :
            <Select placeholder='Select your country' options={options} onChange={handleChangeSeatCount}/>
        </SecondInputContainer>

        <ButtonContainer>
          <BlueButtonLoading isLoading={isBookingLoading} onClick={handleAction}>
            <FormattedMessage id={"paramsPage.book"} />
          </BlueButtonLoading>
          <BlueButton onClick={closeModal}>
            {" "}
            <FormattedMessage id={"global.cancel"} />
          </BlueButton>
        </ButtonContainer>
      </LogoutPopupContainer>
    </PopupViewContainer>
  );
};

export default BookModal;
