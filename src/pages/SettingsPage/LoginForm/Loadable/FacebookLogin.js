import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import facebookIcon from '../../../../assets/icons/facebookIcon.svg'
import { CircleButton, SocialIcon } from "../style";

const FacebookLoginHV = ({ responseFacebook }) => {
  return (
    <FacebookLogin
    appId="2458479804463784"
    autoLoad={false}
    disableMobileRedirect={true}
    fields="name,email"
    callback={responseFacebook}
    render={renderProps => (
       <CircleButton onClick={renderProps.onClick}>
        <SocialIcon src={facebookIcon}/>
      </CircleButton>
    )}
    />
  );
};

export default FacebookLoginHV;
