'use client'

import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import Hamburger from './components/hamburger'
import DesktopMenu from './components/desktopmenu'
import MobileMenu from './components/mobilemenu'

const getThemeColors =
    (prop: string) =>
    ({ theme }: any) =>
        theme.colors[prop]

const getThemeWidth =
    (prop: string) =>
    ({ theme }: any) =>
        theme[prop]

const NavBarContainer = styled.div<{
    $height: number
}>`
    background-color: ${getThemeColors('primary')};
    height: ${({ $height }) => $height}px;
    display: grid;
`

const NavBarWrapper = styled.div`
    justify-self: center;
    justify-items: end;
    display: grid;
    height: 100%;
    width: 100%;
    max-width: ${getThemeWidth('windowWidth')}px;
`

const LogoWrapper = styled.div`
    position: relative;
    height: 100%;
    width: auto;
`

const MenuWrapper = styled.div<{ $number: number }>`
    display: none;
    @media (min-width: ${getThemeWidth('windowWidth')}px) {
        display: grid;
        grid-template-columns: repeat(${(props) => props.$number}, 1fr);
    }
`

const Trigger = styled.div`
    display: grid;
    height: 100%;
    width: fit-content;
    align-content: center;
    justify-self: end;
    padding: 0 1rem;
    @media (min-width: ${getThemeWidth('windowWidth')}px) {
        display: none;
    }
`

const StyledImage = styled(Image)`
    justify-self: start;
    @media (min-width: ${getThemeWidth('windowWidth')}px) {
        justify-self: center;
    }
`

export interface NavBarProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    height: number
    logo?: string
    alt?: string
    menuWidth?: number
    pages: {
        iconComponent?: React.ReactNode
        name: string
        link: string
        subPages?: { subName: string; subLink: string }[]
    }[]
}

const Header: React.FC<NavBarProps> = (props) => {
    const {
        height = 60,
        logo,
        alt = 'logo',
        menuWidth = 120,
        pages,
        ...rest
    } = props

    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    const theme = useTheme()
    const desktopBreakpoint = theme.windowWidth

    const toggleHamburger = useCallback(
        () => setHamburgerOpen((prev) => !prev),
        []
    )

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= desktopBreakpoint) {
                setHamburgerOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [desktopBreakpoint])

    return (
        <NavBarContainer $height={height} {...rest}>
            <NavBarWrapper>
                {logo && (
                    <LogoWrapper>
                        <StyledImage
                            src={logo}
                            alt={alt}
                            layout="fill"
                            style={{ objectFit: 'contain' }}
                        />
                    </LogoWrapper>
                )}
                <Trigger onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen} />
                </Trigger>
                <MenuWrapper $number={pages.length}>
                    {pages.map((item, index) => (
                        <DesktopMenu
                            page={item}
                            key={index}
                            menuWidth={menuWidth}
                        />
                    ))}
                </MenuWrapper>
                <MobileMenu
                    height={height}
                    isOpen={hamburgerOpen}
                    pages={pages}
                />
            </NavBarWrapper>
        </NavBarContainer>
    )
}

export default Header
