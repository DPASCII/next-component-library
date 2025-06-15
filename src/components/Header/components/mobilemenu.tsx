'use client'

import React from 'react'
import styled from 'styled-components'

const getThemeColors =
    (prop: string) =>
    ({ theme }: any) =>
        theme.colors[prop]

const getProps = (prop: string) => (props: any) => props[prop]

const MobileMenuWrapper = styled.div<{ $height: number; $toggle: boolean }>`
    visibility: ${({ $toggle }) => ($toggle ? 'visible' : 'hidden')};
    display: flex;
    flex-direction: column;
    position: absolute;
    top: ${getProps('height')}px;
    height: calc(100vh - ${getProps('height')}px);
    right: 0;
    background-color: ${getThemeColors('primary')};
    width: 100%;
    max-width: 300px;
    overflow-y: auto;
    z-index: 1000;
`

const MenuItem = styled.a`
    margin-left: 0.5rem;
    padding: 1rem;
    text-decoration: none;
    color: ${getThemeColors('text')};
    font-weight: bold;
    transition: background-color 0.3s linear;
    &:hover {
        background-color: ${getThemeColors('hoverBackground')};
    }
`

const SubMenuWrapper = styled.div`
    margin-left: 1rem;
    background-color: ${getThemeColors('primary')};
    position: relative;
    display: flex;
    flex-direction: column;
`
const SubMenuItem = styled.a`
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: ${getThemeColors('text')};
    font-weight: normal;
    transition: background-color 0.3s linear;
    &:hover {
        background-color: ${getThemeColors('hoverBackground')};
    }
`

export interface MobileMenuProps {
    isOpen: boolean
    height?: number
    pages: {
        iconComponent?: React.ReactNode
        name: string
        link: string
        subPages?: { subName: string; subLink: string }[]
    }[]
}

const MobileMenu: React.FC<MobileMenuProps> = (props) => {
    const { pages, height = 60, isOpen } = props
    return (
        <MobileMenuWrapper $toggle={isOpen} $height={height}>
            {pages.map(({ iconComponent, name, link, subPages }) => (
                <div key={link} style={{ display: 'grid' }}>
                    <MenuItem key={name} href={link}>
                        {iconComponent}
                        {name}
                    </MenuItem>
                    {subPages &&
                        subPages.map((subPage) => (
                            <SubMenuWrapper key={subPage.subName}>
                                <SubMenuItem href={subPage.subLink}>
                                    {subPage.subName}
                                </SubMenuItem>
                            </SubMenuWrapper>
                        ))}
                </div>
            ))}
        </MobileMenuWrapper>
    )
}

export default MobileMenu
