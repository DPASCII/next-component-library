import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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

copyDir(libThemePath, targetThemePath)
