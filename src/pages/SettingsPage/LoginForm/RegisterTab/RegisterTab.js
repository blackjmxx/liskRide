import React, { useState, useEffect, useRef } from 'react';
import { TermsPoliciesLink, RegisterInputsContainer, InputRegister, ButtonContainer, InputRegisterContainer, SecondInputRegisterContainer } from './style/index.js'
import { ToggleButtonContainer, Icon } from '../LoginTab/style';
import eyeShowIcon from '../../../../assets/icons/eyeShowIcon.svg';
import eyeHideIcon from '../../../../assets/icons/eyeHideIcon.svg';
import { FormattedMessage } from 'react-intl';
import BlueButtonLoading from "../../../../components/Buttons/BlueButtonLoading";

const RegisterTab = props => {

  const [showPassword, setShowPassword] = useState(true);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
        isFirstRun.current = false;
        props.createPassPhrase()
        return;
    }
  })

  return (
  <>
    <RegisterInputsContainer>
      <SecondInputRegisterContainer>
        <InputRegister
            name='registerpassphrase'
            type={showPassword ? 'password' : 'text'}
            onChange={props.handleChange}
            value={props.registerpassphrase}
            placeholder="Passphrase"
            />
          {showPassword 
              ?
              <ToggleButtonContainer onClick={() => setShowPassword(!showPassword)}>
                <Icon src={eyeShowIcon} />
              </ToggleButtonContainer>
              :
              <ToggleButtonContainer onClick={() => setShowPassword(!showPassword)}>
                <Icon src={eyeHideIcon} />
              </ToggleButtonContainer>
            }
      </SecondInputRegisterContainer>
      <InputRegisterContainer>
        <InputRegister
            name='registeraddress'
            onChange={props.handleChange}
            value={props.registeraddress}
            placeholder="Address"/>
      </InputRegisterContainer>
      <ButtonContainer>
        <TermsPoliciesLink>
          <FormattedMessage id={"paramsPage.agreementText"} />
        </TermsPoliciesLink>
      </ButtonContainer>
      <ButtonContainer>
        <BlueButtonLoading isLoading={props.loading} onClick={() => props.handleRegister()}>
          {
            <FormattedMessage id={"global.register"} />
          }
        </BlueButtonLoading>
      </ButtonContainer>
      </RegisterInputsContainer>
  </>
  );
};

export default RegisterTab;
