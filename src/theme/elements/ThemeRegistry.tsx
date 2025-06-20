'use client'

import { ThemeProvider } from 'styled-components'
import defaultTheme from './theme'

export default function ThemeRegistry({
    theme = defaultTheme,
    children,
}: {
    theme?: typeof defaultTheme
    children: React.ReactNode
}) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
