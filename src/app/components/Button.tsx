import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button<{
    $backgroundColor?: string
    $color?: string
}>`
    background-color: ${(props) =>
        props.$backgroundColor ? props.$backgroundColor : '#007bff'};
    color: ${(props) => (props.$color ? props.$color : '#000')};
    cursor: pointer;
    &:hover {
        background-color: ${(props) =>
            props.$backgroundColor ? props.$backgroundColor : '#0056b3'};
        color: ${(props) => (props.$color ? props.$color : '#fff')};
    }
`

export interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    backgroundColor?: string
    color?: string
}

const Button: React.FC<ButtonProps> = (props) => {
    const { children, backgroundColor, color, ...rest } = props
    return (
        <StyledButton
            $backgroundColor={backgroundColor}
            $color={color}
            {...rest}
        >
            {children}
        </StyledButton>
    )
}

export default Button
