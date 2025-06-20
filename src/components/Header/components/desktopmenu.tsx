import React, { useState } from 'react'
import styled from 'styled-components'

const getThemeColors =
    (prop: string) =>
    ({ theme }: any) =>
        theme.colors[prop]

const MenuWrapper = styled.div`
    background-color: ${getThemeColors('primary')};
    height: 80%;
    align-self: end;
    position: relative;
    display: flex;
`

const MenuItem = styled.a<{ $menuWidth: number }>`
    cursor: pointer;
    width: ${({ $menuWidth }) => $menuWidth}px;
    color: ${getThemeColors('text') || 'black'};
    text-align: center;
    align-content: center;
    justify-content: center;
    padding: 8px;
    transition: linear 0.3s;
    &:hover {
        background-color: ${getThemeColors('hoverBackground')};
    }
`
const SubMenuItem = styled.a`
    color: ${getThemeColors('text')};
    padding: 16px;
    white-space: nowrap;
    transition: linear 0.3s;
    &:hover {
        background-color: ${getThemeColors('hoverBackground')};
    }
`

const SubMenuWrapper = styled.div`
    background-color: ${getThemeColors('primary')};
    position: absolute;
    top: 100%;
    left: 0;
    transition: linear 0.3s;
    z-index: 1000;
    display: grid;
`
export interface DesktopMenuProps {
    menuWidth?: number
    page: {
        item: string
        link: string
        subPages?: { subItem: string; subLink: string }[]
    }
}

const DesktopMenu: React.FC<DesktopMenuProps> = (props) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false)

    const handleMouseEnter = () => {
        setDropdownVisible(true)
    }

    const handleMouseLeave = () => {
        setDropdownVisible(false)
    }
    const { page, menuWidth = 200 } = props
    return (
        <MenuWrapper
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <MenuItem $menuWidth={menuWidth} href={page.link}>
                {page.item || 'NO ITEM'}
            </MenuItem>
            {isDropdownVisible && (
                <SubMenuWrapper>
                    {page.subPages &&
                        page.subPages.map((subPages, index) => (
                            <SubMenuItem key={index} href={subPages.subLink}>
                                {subPages.subItem}
                            </SubMenuItem>
                        ))}
                </SubMenuWrapper>
            )}
        </MenuWrapper>
    )
}

export default DesktopMenu
