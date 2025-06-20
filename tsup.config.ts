// tsup.config.ts
import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    sourcemap: true,
    outDir: 'dist',
    external: ['react', 'react-dom', 'styled-components'],
    banner: {
        js: '"use client";',
    },
})
