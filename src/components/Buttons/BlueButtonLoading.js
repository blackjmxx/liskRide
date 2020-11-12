import {Loader} from "semantic-ui-react";
import {BlueButton} from "../../pages/SettingsPage/LoginForm/LoginTab/style";
import React from "react";

export default function BlueButtonLoading ({ isLoading, children, onClick, size }) {
    return (
        <BlueButton size={size} disabled={isLoading} onClick={() => onClick()}>
            {
                isLoading ? (
                    <Loader size="small" active inline='centered' />
                ) : (
                    children
                )
            }
        </BlueButton>
    )
}