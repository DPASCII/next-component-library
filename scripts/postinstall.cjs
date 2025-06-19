const fs = require('fs')
const path = require('path')

// Source: from this component library's own directory
const libThemePath = path.resolve(__dirname, '../src/theme')

// Destination: consuming project's src/theme
const targetThemePath = path.resolve(process.cwd(), 'src/theme')

function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true })
    }

    const entries = fs.readdirSync(src, { withFileTypes: true })

    for (const entry of entries) {
        const srcEntry = path.join(src, entry.name)
        const destEntry = path.join(dest, entry.name)

        if (entry.isDirectory()) {
            copyDir(srcEntry, destEntry)
        } else {
            fs.copyFileSync(srcEntry, destEntry)
        }
    }
}

// === EXECUTION STARTS HERE ===

console.log('📦 [next-component-library] Running postinstall...')
console.log('📁 Copying theme from:', libThemePath)
console.log('📁 Copying theme to:  ', targetThemePath)

if (!fs.existsSync(libThemePath)) {
    console.error('❌ Theme source not found. Skipping copy.')
    process.exit(1)
}

try {
    copyDir(libThemePath, targetThemePath)
    console.log('✅ Theme successfully copied to consumer project.')
} catch (err) {
    console.error('❌ Error copying theme:', err)
    process.exit(1)
}
