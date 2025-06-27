import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import theme from '../src/theme/elements/theme'
import ThemeRegistry from '../src/theme/elements/ThemeRegistry'

export const decorators = [
    withThemeFromJSXProvider({
        themes: {
            light: theme,
        },
        defaultTheme: 'theme',
        Provider: ThemeRegistry,
    }),
]
