const fs = require('fs')
const chalk = require('chalk')

global.ytname = "zymzz.my.id"
global.location = "Indonesia"
global.ownername = "Skyzaa"
global.ownernumber = '6283853787611'  //creator number
global.botname = 'BotS - zxz' //name of the bot
global.idSaluran = "120363300298271061@newsletter"
global.packname = 'Sticker By'
global.author = 'Skyzaa'
global.themeemoji = '🙊'
global.wm = "⏤͟͟͞͞Skyzaa - zxz"
global.link = 'https://whatsapp.com/channel/0029VakakCcLI8YV5UInP61u">
global.prefa = ['!','.','#','💐']

//Manage Vercel
global.vercelToken = "kAoHmix4PTzDD4RdNRsDAUyf" //Your Vercel Token

//Manage GitHub
global.githubToken = "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" //Your GitHub Token
global.githubUsername = "srepett" //Your GitHub Username

//Bot Media
global.imgthumb = "https://files.catbox.moe/ukr4gx.jpeg"
global.vidthumb = "https://files.catbox.moe/wizzj1.mp4"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})