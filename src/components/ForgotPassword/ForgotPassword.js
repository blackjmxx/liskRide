import React, { useState } from "react";
import MenuBar from "../MenuBar/Menubar.js";
import closeIcon from "../../assets/icons/closeIcon.svg";
import {
  TitleContainer,
  BottomContainer,
  Title,
  SubtitleContainer,
  Subtitle,
  EmailInput,
  ButtonContainer,
  Button,
  ButtonContent,
  IconContainer,
  Icon
} from "./style/index.js";
import { RecoveryPopup } from "../RecoveryPopup/RecoveryPopup.js";
import { Link } from "react-router-dom";
import { CommonContainerView } from "../common/commonContainer.js";
import { FormattedMessage } from "react-intl";

export const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState("");
  const [sendEmail, setSendEmail] = useState(false);

  const handleSendEmail = () => {
    if (!sendEmail) {
      setSendEmail(true);
      return;
    }

    setSendEmail(false);
    setEmail("");
    history.push("/home/params");
  };
  return (
    <>
      {sendEmail && (
        <RecoveryPopup
          active
          title={"Success"}
          subtitle={"A recovery link was sent to"}
          buttonTitle={"Got it"}
          email={email}
          recoveryHandle={handleSendEmail}
        />
      )}
      <CommonContainerView>
        <Link to="/home/params">
          <IconContainer>
            <Icon src={closeIcon} />
          </IconContainer>
        </Link>
        <TitleContainer>
          <Title>
            <FormattedMessage id={"passRecoveryPage.enterEmai"} />
          </Title>
        </TitleContainer>
        <SubtitleContainer>
          <Subtitle>
            <FormattedMessage id={"passRecoveryPage.infoReset"} />
          </Subtitle>
        </SubtitleContainer>
        <BottomContainer>
          <EmailInput
            onChange={e => setEmail(e.target.value)}
            value={email}
            placeholder={<FormattedMessage id={"global.email"} />}
          />
          <ButtonContainer>
            <Button onClick={handleSendEmail}>
              <ButtonContent>
                <FormattedMessage id={"passRecoveryPage.send"} />
              </ButtonContent>
            </Button>
          </ButtonContainer>
        </BottomContainer>
      </CommonContainerView>
      <MenuBar />
    </>
  );
};
