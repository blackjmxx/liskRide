import React from "react";
import webShare from './webShare';
import { BlueButton } from "../pages/SettingsPage/LoginForm/LoginTab/style"

const ShareButton = ({isSupported, children, share, ...rest})  => {
    return  <BlueButton {...rest} disabled={!isSupported} onClick={share}>{children}</BlueButton>
};

export default webShare(ShareButton);
