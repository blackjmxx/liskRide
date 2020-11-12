import React from 'react'
import { HeaderContainer, Icon, Title, StepContainer, StepActive, StepDefault } from './style/index'
import closeIcon from '../../assets/icons/closeIcon.svg'

export const Header = ({name, stepActive}) => {
    return (
        <HeaderContainer>
            <Icon src={closeIcon}></Icon>
            <Title>{name}</Title>
            {stepActive 
            ? 
            <StepContainer>
                <StepActive>5/</StepActive><StepDefault>10</StepDefault>
            </StepContainer>
            :
            null}
        </HeaderContainer>
    )
}