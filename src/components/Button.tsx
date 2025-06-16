import React from 'react'
import styled from 'styled-components'

const getThemeColors =
    (prop: string) =>
    ({ theme }: any) =>
        theme.colors[prop]

const StyledButton = styled.button`
    background-color: ${getThemeColors('button')};
    color: ${getThemeColors('buttonText')};
    padding: 8px;
    border: 2px solid ${getThemeColors('button')};
    border-radius: 24px;
    cursor: pointer;
    &:hover {
        background-color: ${getThemeColors('buttonHover')};
        color: ${getThemeColors('buttonHoverText')};
        border: 2px solid ${getThemeColors('button')};
    }
`

const Button = ({ label, ...rest }: { label: string }) => {
    return <StyledButton {...rest}>{label}</StyledButton>
}

export default Button
