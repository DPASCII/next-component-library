const fs = require('fs')
const path = require('path')

const libThemePath = path.resolve(__dirname, '../src/theme')
const targetThemePath = path.resolve(process.cwd(), 'src/theme')

function copyDir(src, dest) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true })

    for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
        const srcEntry = path.join(src, entry.name)
        const destEntry = path.join(dest, entry.name)

        if (entry.isDirectory()) {
            copyDir(srcEntry, destEntry)
        } else {
            fs.copyFileSync(srcEntry, destEntry)
        }
    }
}

if (fs.existsSync(libThemePath)) {
    copyDir(libThemePath, targetThemePath)
    console.log('✔ Theme copied to consuming project')
} else {
    console.warn('⚠ Theme folder not found:', libThemePath)
}

copyDir(libThemePath, targetThemePath)
