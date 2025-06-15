'use client'
import styled from 'styled-components'

const Bun = styled.button`
    width: 2.8rem;
    height: 2.8em;
    display: flex;
    flex-flow: column nowrap;
    border-radius: 6px;
    z-index: 10;
    cursor: pointer;
`

const Burger = styled.div<{
    $isOpen?: boolean
    $index?: number
    $burgerColor?: string
}>`
    width: ${(props) => (props.$isOpen && props.$index === 2 ? '0' : '2.5rem')};
    height: 0.4em;
    border-radius: 10px;
    background: ${(props) => props.theme?.colors?.secondary || 'black'};
    transform-origin: 1px;
    transition: all 0.3s linear;
    margin: auto;
    transform: ${(props) =>
        props.$isOpen &&
        (props.$index === 1
            ? 'rotate(45deg) translateX(5%);'
            : props.$index === 2
            ? 'translateX(0%)'
            : 'rotate(-45deg) translateX(5%);')};
`

export const Hamburger = ({ isOpen }: { isOpen?: boolean }) => (
    <Bun>
        <Burger $isOpen={isOpen} $index={1} />
        <Burger $isOpen={isOpen} $index={2} />
        <Burger $isOpen={isOpen} $index={3} />
    </Bun>
)

export default Hamburger
