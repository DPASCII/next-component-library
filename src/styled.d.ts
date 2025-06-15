import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string
            secondary: string
            hoverBackground: string
            button: string
            buttonText: string
            buttonHover: string
            buttonHoverText: string
            text: string
        }
        maxWidth: number
    }
}
