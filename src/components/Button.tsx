import React from 'react'
import styled from 'styled-components'

const getThemeColors =
    (prop: string) =>
    ({ theme }: any) =>
        theme.colors[prop]

const StyledButton = styled.button`
    background-color: rgb(${getThemeColors('button')});
    color: rgb(${getThemeColors('buttonText')});
    padding: 8px;
    border: 2px solid rgb(${getThemeColors('button')});
    border-radius: 24px;
    cursor: pointer;
    &:hover {
        background-color: rgb(${getThemeColors('buttonHover')});
        color: rgb(${getThemeColors('buttonHoverText')});
        border: 2px solid rgb(${getThemeColors('button')});
    }
`

const Button = ({ label, ...rest }: { label: string }) => {
    return <StyledButton {...rest}>{label}</StyledButton>
}

export default Button
