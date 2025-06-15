import React from 'react'
import styled from 'styled-components'

const getThemeColors =
    (prop: string) =>
    ({ theme }: any) =>
        theme.colors[prop]

const StyledButton = styled.button`
    background-color: ${getThemeColors('button')};
    color: ${getThemeColors('buttonText')};
    cursor: pointer;
    &:hover {
        background-color: ${getThemeColors('buttonHover')};
        color: ${getThemeColors('buttonHoverText')};
    }
`

const Button = ({ children, ...rest }: { children: React.ReactNode }) => {
    return <StyledButton {...rest}>{children}</StyledButton>
}

export default Button
