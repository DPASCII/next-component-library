import { ThemeProvider } from 'styled-components'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import theme from '../src/theme/elements/theme'

export const decorators = [
    withThemeFromJSXProvider({
        themes: {
            light: theme,
        },
        defaultTheme: 'theme',
        Provider: ThemeProvider,
    }),
]
