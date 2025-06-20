import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
    colors: {
        primary: '#B6D0E2',
        secondary: '#B5C7EB',
        hoverBackground: 'white',
        button: '#007bff',
        buttonText: '#000',
        buttonHover: '#0056b3',
        buttonHoverText: '#fff',
        text: 'black',
        secondaryText: 'black',
    },
    windowWidth: 1320,
    breakpoints: {
        desktop: 1366,
        tablet: 768,
        mobile: 360,
    },
}

export default theme
