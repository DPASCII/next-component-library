const fs = require('fs')
const path = require('path')

const libThemePath = path.resolve(__dirname, '../src/theme')
const projectSrcPath = path.resolve(
    process.env.npm_config_local_prefix || '',
    'src'
)
const targetThemePath = path.resolve(projectSrcPath, 'theme')

function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true })
    }

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
} else {
    return
}
