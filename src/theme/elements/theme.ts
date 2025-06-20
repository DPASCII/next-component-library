import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
    colors: {
        primary: '#0070f3',
        secondary: '#1c1c1e',
        hoverBackground: 'white',
        button: '#007bff',
        buttonText: '#000',
        buttonHover: '#0056b3',
        buttonHoverText: '#fff',
        text: 'black',
        secondaryText: 'white',
    },
    windowWidth: 1320,
    breakpoints: {
        desktop: 1366,
        tablet: 768,
        mobile: 360,
    },
}

export default theme
