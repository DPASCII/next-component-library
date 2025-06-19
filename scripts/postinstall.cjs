const fs = require('fs')
const path = require('path')

const libThemePath = path.resolve(__dirname, '../src/theme')
const projectSrcPath = path.resolve(process.cwd(), 'src')
const targetThemePath = path.resolve(projectSrcPath, 'theme')

if (!fs.existsSync(projectSrcPath)) {
    fs.mkdirSync(projectSrcPath, { recursive: true })
}

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
