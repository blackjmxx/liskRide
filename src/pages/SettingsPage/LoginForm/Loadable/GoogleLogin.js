import React from "react";
import { GoogleLogin } from "react-google-login";
import { CircleButton, SocialIcon } from "../style";
import googleIcon from '../../../../assets/icons/googleIcon.svg'

const GoogleLoginHV = ({ responseGoogle }) => {
  return (
    <GoogleLogin
      clientId="953341342775-5mncp03s2n4o4d471tvd3hma7g1k9kth.apps.googleusercontent.com"
      buttonText="Google"
      disableMobileRedirect={false}
      render={renderProps => (
        <CircleButton onClick={renderProps.onClick}>
          <SocialIcon src={googleIcon} />
        </CircleButton>
      )}
      onSuccess={responseGoogle}
      // onFailure={response => this.responseGoogle(response, this.props)}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginHV;
