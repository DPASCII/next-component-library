import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
    colors: {
        primary: '0, 112, 243',
        secondary: '28, 30 , 30',
        hoverBackground: '255,255,255',
        button: '0, 123, 255',
        buttonText: '0,0,0',
        buttonHover: '0, 86, 179',
        buttonHoverText: '255, 255, 255',
        text: '0,0,0',
        secondaryText: '255,255,255',
    },
    windowWidth: 1320,
    breakpoints: { desktop: 1320, tablet: 768, mobile: 375 },
}

export default theme
