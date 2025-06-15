'use client'

import { ThemeProvider } from 'styled-components'
import defaultTheme from './theme'

export default function ThemeRegistry({
    children,
}: {
    children: React.ReactNode
}) {
    return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}
