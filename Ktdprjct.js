// CREATOR SC : KTDPrjct
// MW RECODE RECODE AJA TAPI JAN HAPUS CREATORNYA

// TQ TO
// ALLAH SWT
// KTDPRJCT
// RIDHO YANG SERING BANTU KLO ADA ERROR
// ORANG TUA
// YANG KASIH REST API
// DAN LAIN LAIN

var
	{
		WAKtdprjctection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReKtdprjctectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
var fs = require("fs")
var hx = require('hxz-api')
var ggs = require('google-it')
var axios = require('axios')
var brainly = require('brainly-scraper')
var googleImage = require('g-i-s')
var speed = require("performance-now")
var util = require('util')
var crypto = require('crypto')
var request = require('request')
var { exec, spawn } = require('child_process')
var fetch = require('node-fetch')
var ms = require('parse-ms')
var toMs = require('ms')
var moment = require('moment-timezone')
var ffmpeg = require('fluent-ffmpeg')
var yts = require( 'yt-search')
//end
//════[ Ucapan wktu ]════//

var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "22:00:00"){
        var ucapanWaktu = 'Selamat Malam'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang️'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam'
}
//end
//════[ LIB ]════//

var Exif = require('./lib/exif');
var exif = new Exif();
var { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
var { yta, ytv, igdl, upload } = require('./lib/ytdl')
var { yta2, ytv2, ytv3, ytv4} = require('./lib/y2mate')
var { uploadImages } = require('./lib/uploadimage')
var { msgFilter } = require('./lib/antispam')
var off = require('./lib/afk.js')
var { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
var { fetchJosn, fetchText } = require('./lib/fetcher')
var { wikiSearch } = require('./lib/wiki')
var { uploadimg } = require('./lib/uploadimg')
var { addCommands, checkCommands, deleteCommands } = require('./lib/commands1.js')
var { color, bgcolor } = require('./lib/color')
var premiuma = require("./lib/premiun");
var { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close} = require('./lib/functions')
var setting = JSON.parse(fs.readFileSync('./setting.json'))
var { y2mateA, y2mateV } = require('./lib/y2mate')
var { mediafireDl } = require('./lib/mediafire.js')
var game = require("./lib/game")
//end
//════[ Setting & Thumb ]════//

offline = false
banChats = true
blocked = []
ownernumber = setting.OwnerNumber
owner = setting.OwnerNumber
botname = `KTDPRJCT メ Bo† ×͜×`
ownername = setting.OwnerName
fake = `KTDPRJCT メ Bo† ×͜×`
 timestampe = speed();
 latensie = speed() - timestampe

var fakeimage = fs.readFileSync ('./media/logonya.jpg')
var fakeKtdprjct = fs.readFileSync ('./media/logonya.jpg')
var audio = fs.readFileSync ('./media/audio.mp3')
//end
//════[ Data Base ]════//

var ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
var premium = JSON.parse(fs.readFileSync('./database/user/premium.json'))
var _user = JSON.parse(fs.readFileSync('./database/user/user.json'))
var _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
var afk = JSON.parse(fs.readFileSync('./lib/off.json'))
let _off = JSON.parse(fs.readFileSync('./database/group/afk.json'))
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
cmhit = []
//end
//════[ cek user ]════//

const cekUser = (sender) => {
let status = false
Object.keys(_user).forEach((i) => {
if (_user[i].id === sender) {
status = true
}
})
return status
}
//end
//════[ Module ]════//

module.exports = Ktdprjct = async (Ktdprjct, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        var content = JSON.stringify(mek.message)
		var from = mek.key.remoteJid
		var { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		var tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		var time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		var timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        var timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
        var type = Object.keys(mek.message)[0]        
        var cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        var prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		let chats = cmd.match(prefix)
      ? cmd
          .split(prefix)
          .find((v) => v === cmd.replace(prefix, ""))
      : cmd;
        var command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		var is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
		var args = body.trim().split(/ +/).slice(1)
		var arg = budy.slice(command.length + 2, budy.length)
		var ar = args.map((v) => v.toLowerCase())
		var c = args.join(' ')
		var isCmd = body.startsWith(prefix)
		var q = args.join(' ')
		var Verived = "0@s.whatsapp.net"
		var txt = mek.message.conversation
		var botNumber = Ktdprjct.user.jid
		var ownerNumber = [`${owner}`]
		var isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? Ktdprjct.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		var groupMetadata = isGroup ? await Ktdprjct.groupMetadata(from) : ''
		var groupName = isGroup ? groupMetadata.subject : ''
		var groupId = isGroup ? groupMetadata.jid : ''
		var groupMembers = isGroup ? groupMetadata.participants : ''
		var groupDesc = isGroup ? groupMetadata.desc : ''
		var groupOwner = isGroup ? groupMetadata.owner : ''
		var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		var isGroupAdmins = groupAdmins.includes(sender) || false
		var isBan = ban.includes(sender)
		var isPrem = isOwner || mek.key.fromMe ? true : premiuma.checkPremiumUser(sender, premium)
		var isUser = cekUser(sender)
		var isAfkOn = off.checkAfkUser(sender, _off)
        var senderNumber = sender.split("@")[0]
        var hour_now = moment().format('HH:mm:ss')
		var conts = mek.key.fromMe ? Ktdprjct.user.jid : Ktdprjct.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        var pushname = mek.key.fromMe ? Ktdprjct.user.name : conts.notify || conts.vname || conts.name || '-'    
        var mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        var mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        var mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        var mentionUser = mention != undefined ? mention.filter(n => n) : []
		
        var isAntiLink = isGroup ? _antilink.includes(from) : false
        var isOwner = ownerNumber.includes(sender)
		var imagebb = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
		var isMybot = isOwner || mek.key.fromMe
		var totalChat = await Ktdprjct.chats.all()
        var groups = Ktdprjct.chats.array.filter(v => v.jid.endsWith('g.us'))
        var privat = Ktdprjct.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
//end
//════[ mess ]════//

mess = {
prem: `Fitur Ini Khusus User Premium!!\nKalo Mau Jadi User Premium\nSilahkan Tulis ${prefix}premium`,
wait: '[❗] _Tunggu Sebentar, Perintah Sedang Di Proses..._',
eror: '⚠️ Fitur ini sedang eror',
success: '[❗] _Done_ ',
nsfw: 'Fitur nsfw belum di aktifkan, hubungi owner bot u/ mengaktifkan',
ban: 'kamu telah di ban oleh bot',
noregis: `╭───❒ 「 DAFTAR DULU YA 」 ❒
├ 🚀 Hai ${pushname} ${ucapanWaktu} 
├ 🚀 Sebelum Memakai Bot Verify Dulu Ya!
├ 🚀 Dengan Clik Button Dibawah Atau
├ 🚀 Ketik ${prefix}reg
└────────────────❏`,
error: {
stick: '[❗] _Maaf Itu Bukan Sticker_',
Iv: '[❗] _Link invalid_'
},
only: {
group: '[❗] _Fitur Hanya Bisa di Grup_',
owner: '[❗] _Fitur ini Khusus Owner_',
admin: '[❗] _Fitur ini Khusus Admin Grup_',
Badmin: '[❗] _Jadikan Bot Admin Grup_'
    }
}
//end
//════[ reply dll ]════//

var isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
       var reply = (teks) => {
	      Ktdprjct.sendMessage(from, teks, text, {quoted:mek, thumbnail: fakeimage})
        }
        var reply1 = (teks) => {
           Ktdprjct.sendMessage(from, teks, text, {quoted:ftrol})
         }
        var sendMess = (hehe, teks) => {
            Ktdprjct.sendMessage(hehe, teks, text)
        }
        var mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? Ktdprjct.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/logonya2.png')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : Ktdprjct.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/logonya2.png')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        var addRegisterUser = (userid, sender, time, serials) => {
        var obj = { id: userid, name: sender, time: time, serial: serials }
        _user.push(obj)
        fs.writeFileSync('./database/user/user.json', JSON.stringify(_user))
        }
        var createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        var costum = (pesan, tipe, target, target2) => {
			Ktdprjct.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		
		 function randomNomor(angka){
           return Math.floor(Math.random() * angka) + 1
        }
		var textImg = (teks) => {
           return Ktdprjct.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./media/logonya2.png')})
        }
        var freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/logonya.jpg')
        }}}
//end
//════[ button ]════//

var sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            Ktdprjct.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        
        var sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      var buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      Ktdprjct.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
       );
       };
       
        var sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await Ktdprjct.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            Ktdprjct.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
            })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            var buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return Ktdprjct.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }

var sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
kma = doc1
mhan = await Ktdprjct.prepareMessage(from, media, document, kma)
var buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
Ktdprjct.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

var sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Ktdprjct.prepareMessage(from, kma, video)
var buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Ktdprjct.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//end
//════[ fake ]════//

var fakestatus = (teks) => {
            Ktdprjct.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/logonya2.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        var fakegroup = (teks) => {
            Ktdprjct.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/logonya2.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        var ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${tanggal}`, 
                            orderTitle: `${botname}`,
                            thumbnail: fakeKtdprjct, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
//end
//════[ mess sticker ]════//

var sticGrup = (hehe) => {
    	ano = fs.readFileSync('./sticker/mess/grup.webp')
    	Ktdprjct.sendMessage(hehe, ano, sticker, {quoted: mek})
     }
		var sticOwner = (hehe) => {
			ano = fs.readFileSync('./sticker/mess/owner.webp')
			Ktdprjct.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		var sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/mess/notadmin.webp')
			Ktdprjct.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		var sticAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/mess/admin.webp')
			Ktdprjct.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		var sticWait = (hehe) => {
			ano = fs.readFileSync('./sticker/mess/wait.webp')
			Ktdprjct.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		var sticBan = (hehe) => {
			ano = fs.readFileSync('./sticker/mess/banned.webp')
			Ktdprjct.sendMessage(hehe, ano, sticker, { quoted: mek})
		} 
		var sticToxic = (hehe) => {
			ano = fs.readFileSync('./sticker/mess/toxic.webp')
			Ktdprjct.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
//end
//════[ fung game ]════//

idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
	    var isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		try {
		pporang = await Ktdprjct.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
//end
//════[ storage ]════//

var sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Ktdprjct.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            var sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       Ktdprjct.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       Ktdprjct.sendMessage(from, hasil, type, options).catch(e => {
	       Ktdprjct.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
            })
           })
          })
         })
        }
        var sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                var fn = Date.now() / 10000;
           var filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Ktdprjct.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  
//end
//════[ Module ]════//

cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            Ktdprjct.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        Ktdprjct.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
          }
        }
            }
          }
        }
      }
    }
 Ktdprjct.on('chat-update', asd => {
if (asd.presences) {
	for (key in asd.presences) {
		if (asd.presences[key].lastKnownPresence == 'composing' || asd.presences[key].lastKnownPresence == 'recording') {
			if (!isGroup) return
			if (off.checkAfkUser(key, _off)) {
               _off.splice(off.getAfkPosition(key, _off), 1)
            fs.writeFileSync('./database/group/afk.json', JSON.stringify(_off))
         ckck = `\n*@${key.split('@')[0]}* terdeteksi ${asd.presences[key].lastKnownPresence == 'composing' ? 'sedang mengetik...' : 'sedang merekam...'}\nSekarang dia sudah tidak AFK\n`
     Ktdprjct.sendMessage(asd.jid, ckck.trim(), text, {thumbnail: fs.readFileSync('./media/logonya.jpg'), sendEphemeral: true, contextInfo:{mentionedJid:Ktdprjct.parseMention(ckck)}})
                }}}}})

        if (isGroup && !mek.key.fromMe) {
                for (let ment of mentionUser) {
                    if (off.checkAfkUser(ment, _off)) {
                        getId = off.getAfkId(ment, _off)
                        getReason = off.getAfkReason(getId, _off)
                        getTime = Date.now() - off.getAfkTime(getId, _off)
                        heheh = ms(getTime)
                        Ktdprjct.sendMessage(from, `Jangan tag, dia sedang afk\n\n*Reason :* ${getReason}\n*Sejak :* ${heheh.hours} jam, ${heheh.minutes} menit, ${heheh.seconds} detik yg lalu\n`,text, {quoted:mek})
                       // Ktdprjct.sendMessage(ment, `Ada yang mencari anda saat anda offline\n\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nDi Grup : ${groupName}\nPesan : ${budy}`, text, {contextInfo:{mentionedJid: Ktdprjct.parseMention(budy)}})
                    }
                }
                if (off.checkAfkUser(sender, _off)) {
                	getId = off.getAfkId(sender, _off)
                	getReason = off.getAfkReason(getId, _off)
                    getTime = Date.now() - off.getAfkTime(getId, _off)
                    heheh = ms(getTime)
                    _off.splice(off.getAfkPosition(sender, _off), 1)
                    fs.writeFileSync('./database/group/afk.json', JSON.stringify(_off))
                    Ktdprjct.sendMessage(from, `@${sender.split('@')[0]} telah kembali dari afk\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, text, {contextInfo:{mentionedJid:[sender]}})
                }
            }
//end
//════[ read ]════//

Ktdprjct.chatRead(from, "read")
//end
//════[ hidetag ]════//

var hideTag = async function(from, text){
           let anu = await Ktdprjct.groupMetadata(from)
           let members = anu.participants
           let ane = []
           for (let i of members){
           ane.push(i.jid)
}
        Ktdprjct.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/logonya2.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
 }
//end
//════[ anti link ]════//

if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup`)
setTimeout(() => {
Ktdprjct.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}
//end
//════[ anti spam & termos ]════//

if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
						console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in Private', 'args :', color(args.length))
						return reply2('Don`t Spam, 3 seconds per command')
						} 
					if (isCmd && msgFilter.isFiltered(from) && isGroup) {
						console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length))
						return reply2('Don`t Spam, 3 seconds per command')
					}
	colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		var isMedia = (type === 'imageMessage' || type === 'videoMessage')
		var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m[ PC\x1b[1;37m ]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	if (isCmd && isGroup) console.log('\x1b[1;31m[ GC\x1b[1;37m ]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
//end
//════[ command ]════//

switch (command) {
//end
//════[ Case awal ]════//

case 'daftar':
case 'ktdprjctreg':
    case 'verify':
    case 'register':
    case 'registrasi':{
    if (isUser) return reply('Kamu Sudah Pernah Melakukan Registrasi Sebelumnya..')
    try {
    ppimk = await Ktdprjct.getProfilePicture(`${sender.split('@')[0]}@c.us`)
    } catch {
    ppimk = `${imagebb}`
    }
    const serialUser = createSerial(10)
   addRegisterUser(sender, pushname, time, serialUser)
   daftar=`╭─❒ 「 *REGISTRATION* 」 ❒
├✘ *NAMA :* ${pushname}
├✘ *NOMOR :* ${sender.split("@")[0]}
├✘ *SN :* ${serialUser}
├✘ *TIME :* ${timeMak} WITA
├✘ *Date  :* ${tanggal}
├✘ *Total :*  [ ${_user.length} ] Pengguna
└────────────────❏`
  ppimg = await getBuffer(ppimk)
  await Ktdprjct.sendMessage(from, ppimg, MessageType.image, {quoted: mek, caption: daftar, contextInfo: {"mentionedJid": [ownernumber] }})
  //addLevelingId(sender)
 }
 break
//end
//════[ Case Menu ]════//

case 'menu':
	case 'help':
	case 'm':
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
//Ktdprjct.updatePresence(from, Presence.recording)
//reply('_*Loading*_. . .')	
//img =  fs.readFileSync('./poto/ngapasiKawan.mp4')
menu1 =  `Hai ${pushname} 👋${ucapanWaktu}
KTDPRJCT メ Bo† ༆ Di Sini

╭◪ *INFO CREATOR*
├❖ *Author : KTDPRJCT*
├❍ *Wa : wa.me/62895342581896*
╰─────────────────╯ 
╭❒ *info bot* 
│❒ Bot : ${botname}
│❒ Author : KTDPRJCT
│❒ Pengembang : KTDPRJCT &
│rthelolchex
│❒ Base : KTDPRJCT
╰─────────────────╯
╭❒ *INFO OWNER* 
│❒ Name : ${ownername}
│❒ Wa : wa.me/62895342581896
╰─────────────────╯
╭◪ *RULES*
├❖ *Spam : Auto Block!*
├❖ *Beri Jeda 5 Detik!*
├❖ *No Vc/Tlpn = Block!*
├❖ *Bot Belum Jadi Sepenuhnya!*
╰─────────────────╯`
teks1 =
`_*JIKA BUTTON TIDAK TERLIHAT KETIK ${prefix}allmenu*_
Kalo Mau Masukin Bot Ke Grup Izin Dlu Ketik ${prefix}rulesgc
 _${tanggal}_`
 
Ktdprjct.sendMessage(from, { contentText: `${menu1}`, footerText: `${teks1}`,
 buttons: [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: '🗒️ MENU' }, type: 1 },
          { buttonId: `${prefix}ruls`, buttonText: { displayText: '⚠️ Rules Bot' }, type: 1 },
          { buttonId: `${prefix}rulesgc`, buttonText: { displayText: 'Mau Masukin Bot KeGrup?' }, type: 1 },
        ]
, headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  break
  
  case 'allmenu':
let bio_nya = await Ktdprjct.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			} 
var menu = `Hai kak ${pushname}

╭◪ INFO USER
├📛 *Nama : ${pushname}*
├💋 *Bio : ${bio_user}*
├💌 *Status : ${isOwner? "Owner👑️":"User⚔️"}*
├🏆 *Premium : ${isPrem? "Aktif  ✓":"Tidak ✘"}*
├👨‍ *Register : ${isUser? `Done`:`Belum Daftar`}*
├🚫 *Baned : ${isBan?`True`:`False`}*
╰───────────────────────╯
╭◪ Simpel
├⊱❥ *${prefix}owner*
├⊱❥ *${prefix}creator*
├⊱❥ *${prefix}sc*
├⊱❥ *${prefix}request*
├⊱❥ *${prefix}rules*
╰───────────────────────╯
╭◪ Stiker Menu
├❍ *${prefix}stiker [ foto/tag ]*
├❍ *${prefix}smeme [ video/foto ]*
├❍ *${prefix}memegen [ foto ]*
├❍ *${prefix}toimg [ Tag sticker ]*
├❍ *${prefix}take*
╰───────────────────────╯
╭◪ Edukasi
├⊱❥ *${prefix}brainly* error
├⊱❥ *${prefix}nulis*
├⊱❥ *${prefix}nulisbkanan*
├⊱❥ *${prefix}nulispolio*
╰───────────────────────╯
╭◪ Search
├❖ *${prefix}srcgrup*
├❖ *${prefix}playstore*
├❖ *${prefix}google* error
├❖ *${prefix}wikipedia*
├❖ *${prefix}brainly* error
├❖ *${prefix}tourl*
├❖ *${prefix}pinterest*
├❖ *${prefix}image*
╰──────────────────────╯
╭◪ Download
├❖ *${prefix}play [ judul no link ]* error
├❖ *${prefix}ytmp4 [ link ]* error
├❖ *${prefix}ytmp3 [ link ]* error
├❖ *${prefix}savetiktok [ link ]*
├❖ *${prefix}tiktokwm [ link ]*
╰──────────────────────╯
╭◪ Group 
│➸ *${prefix}welcome* ⟪ Auto On ⟫
│➸ *${prefix}antilink* ⟪ on / off ⟫
│➸ *${prefix}grup* ⟪ buka/tutup ⟫
│➸ *${prefix}add*
│➸ *${prefix}getpp @tag /group*
│➸ *${prefix}kick*
│➸ *${prefix}hedsot*
│➸ *${prefix}linkgrup*
│➸ *${prefix}promote*
│➸ *${prefix}demote*
│➸ *${prefix}setname*
│➸ *${prefix}setdesc*
│➸ *${prefix}setpp*
│➸ *${prefix}tagall*
│➸ *${prefix}listadmin*
│➸ *${prefix}hidetag*
╰──────────────────────╯
╭◪ Anime 
├⊱❥ *${prefix}chara [ Character apa ]*
├⊱❥ *${prefix}nekonime* error
├⊱❥ *${prefix}loli* error
╰─────────────────────╯
╭◪ 18+ Menu
├❖ *${prefix}ero*
├❖ *${prefix}tits*
├❖ *${prefix}neko*
├❖ *${prefix}futanari*
├❖ *${prefix}yuri*
╰──────────────────────╯
╭◪ Owner Bot
├❖ *${prefix}bc*
├❖ *${prefix}clearall*
├❖ *${prefix}block*
├❖ *${prefix}unblock*
├❖ *${prefix}clone*
├❖ *${prefix}addprem*
├❖ *${prefix}delprem*
├❖ *${prefix}ban*
├❖ *${prefix}unban*
├❖ *${prefix}setfake*
╰───────────────────────╯

_*BIG THANKS TO*_
*ALLAH SWT*
*MY ORTU*
*KTDPRJCT (BASE BOT)*
*rthelolchex (MY GURU)*
*PENYEDIA APIKEY*

   
                    [ *POWERED BY ${ownername}* ]
`
var imgs = await Ktdprjct.prepareMessage('0@c.us', fakeimage, image, { thumbnail: fakeimage })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await Ktdprjct.prepareMessageFromContent(from, {
                "productMessage": {
                    "product": {
                        "productImage": imgCatalog,
                        "productId": "4457725420906655",
                        "title": `_*MENU ${botname}*_`,
                        "description": menu,
                        "footerText": `© KTDPRJCT メ Bo† ༆`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "1000",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "1000",
                        "retailerId": `${tanggal}`,
                        "url": "Thank You All"
                    },
                    "businessOwnerJid": "62895342581896@s.whatsapp.net",
                }
            }, { quoted: mek, mimetype: 'image/jpeg' })
            Ktdprjct.relayWAMessage(ctlg)
            Ktdprjct.sendMessage(from, audio, MessageType.audio, {quoted: ftrol, mimetype:'audio/mp4',ptt: true})
            break
//end
//════[ case Info ]════//

case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=62895342581896:62895342581896\n`
+ 'END:VCARD'.trim()
Ktdprjct.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
break

case 'runtime':
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
reply(`RunTime : ${runtime(process.uptime())}`)
break

  case 'ping':
  case 'speed':
  if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
              reply(`「 _Speed Test_ 」\nMerespon dalam ${latensie.toFixed(4)} Sec`)
              break
              
 case 'ruls':
case 'rulesbot':
//Ktdprjct.updatePresence(from, Presence.recording)
tod = `
_*⚠️ RULES ${botname} ⚠️*_

🐼.KALAU MW MASUKIN KE GC IZIN OWNER DLU!!!
🐼.MEMBANDINGKAN BOT = BLOCK/BAN
🐼.DILARANG TLPN/VC BOT ( *AUTO BLOCK* )
🐼.DILARANG SPAM BOT ( *DELAY KON* )
⚠️.OWNER TIDAK BERTANGGUNG JAWAB\nTERHADAP APA YANG DIPERINTAHKAN USER\nKEPADA BOT.`
but = [
{ buttonId: `${prefix}rulesgc`, buttonText: { displayText: 'Rules Grupメ' }, type: 1 }, 
{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'ALLMENUメ' }, type: 1 }, 
]
sendButton(from, tod, fake, but, mek)
           break         
           
case 'rulesgc':
rulsgc = `
_*⚠️ RULES MASUKIN BOT KE GC ⚠️*_

🐼. Mau Masukin Bot Ke Grup ???
🐼. Bisa Click Link DiBawah Untuk Izin Owner
🐼. https://bit.ly/3nMesgD
🐼. Setelah Click Link Tinggal Isi Data Yang DiBerikan
⚠️. Jika Tidak Izin / Isi Data. Bot Akan Saya Keluarkan Dari Gc`
but1 = [
{ buttonId: `${prefix}c`, buttonText: { displayText: 'MENUメ' }, type: 1 }, 
]
 sendButton(from, rulsgc, fake, but1, mek)
 break
 //end
//════[ Req & repport ]════//

 case 'request':
        case 'req':
					const cfrr = body.slice(8)
					if (isBan) return sticBan(from)
                  if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
                    if (args.length < 1) return reply(`Ketik ${prefix}request [request fitur apa]`) 
					if (cfrr.length > 300) return Ktdprjct.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					const ress = `*[ REQUEST VITUR ]*\n\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
					Ktdprjct.sendMessage('62895342581896@s.whatsapp.net', options, text, {quoted: mek})
					reply('Request Anda Telah Sampai Ke Pembuat SC,\nRequests palsu atau main² tidak akan ditanggapi.')
					break      
					
case 'report':
         case 'bug':
					const cfrr1 = body.slice(8)
					if (isBan) return sticBan(from)
                  if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
					if (args.length < 1) return reply(`Ketik ${prefix}report [fiturnya] (Error Nya Gimana)`) 
					if (cfrr1.length > 300) return Ktdprjct.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					const ress1 = `*[ REPORT VITUR ]*\n\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr1}`
							var options = {
							text: ress1,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
					Ktdprjct.sendMessage('62895342581896@s.whatsapp.net', options, text, {quoted: mek})
					reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
					break                   
//end
//════[ prem ]════//

case 'premium':
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
              reply(`Silahkan Click Link DiBawah Untuk Menjadi User Premium\n\nhttps://bit.ly/3IvgGt2`)
              break
              
case 'prem': 
							if (args.length === 0) return reply(`Kirim perintah *${prefix}premium* add/del 62xxx waktu (misal 1 hari -> 1d)\nExample:\n${prefix}premium add 62895342581896 1d`)
							if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
							if (args[0] === 'add') {
								if (mek.message.extendedTextMessage != undefined) {
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									premiuma.addPremiumUser(mentioned[0], args[2], premium)
									reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${mentioned[0]}\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
									} else {
										premiuma.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], premium)
										reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${args[1]}@s.whatsapp.net\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
										}
										} else if (args[0] === 'del') {
											if (mek.message.extendedTextMessage != undefined) {
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									premium.splice(premiuma.getPremiumPosition(mentioned[0], premium), 1)
									fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
									reply(`Sukses`)
									} else {
										premium.splice(premiuma.getPremiumPosition(args[1] + '@s.whatsapp.net', premium), 1)
										fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
										reply(`Sukses`)
										}
										} else {
											reply('emror')
											}
							break

case 'premiumcheck': case 'cekprem': 
							if (!isPrem) return reply(`Akun kamu belum premium silahkan ${prefix}premium`)
							const cekExp = ms(await premiuma.getPremiumExpired(sender, premium) - Date.now())
							reply(`*「 PREMIUM EXPIRED 」*\n\n🆔 *ID*: ${sender}\n🏦 *Premium left*: ${cekExp.days} days ${cekExp.hours} hours ${cekExp.minutes} minutes`)
							break
							
				case 'listprem': case 'listpremium':
							let txt = `「 *PREMIUM USER LIST* 」\n\n`
							let men = [];
							for (let i of premium){
								men.push(i.id)
								const checkExp = ms(i.expired - Date.now())
								txt += `🆔 *ID :* @${i.id.split("@")[0]}\n⏰ *Expired*: ${checkExp.days} days ${checkExp.hours} hours ${checkExp.minutes} minutes\n\n`
								}
								mentions(txt, men, true)
							break
//end
//════[ case search ]════//

case 'image':
       case 'gimg':
       case 'gimage':
       case 'googleimage':
       if (isBan) return sticBan(from)
     if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              sticWait(from)
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: freply, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
             break
               case 'mediafire':
               if (isBan) return sticBan(from)
             if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
               if (args.length < 1) return reply('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
            sticWait(from)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🦈 Nama : ${res[0].nama}\`\`\`
\`\`\`🐋 Ukuran : ${res[0].size}\`\`\`
\`\`\`🐬 Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: freply})
             break      
case 'googlesearch':
case 'googlesrc':
case 'google':
case 'ggs':
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
sticWait(from)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `\n*「 _GOOGLE SEARCH_ 」*\n\n*Judul* : ${i.title}\n\n*Link* : ${i.link}\n*Keterangan* : ${i.snippet}\n───────────\n`
}
var akhir = kant.trim()
reply(akhir)
break 
case 'wiki':
case 'wikipedia':
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
sticWait(from)
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `\n*「 _WIKIPEDIA_ 」*\n\n*Judul :* ${res[0].judul}\n\n*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: ftrol, caption: result}).catch(e => {
  reply(result)
})
break
case 'tourl':
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await Ktdprjct.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('reply gambar/video')
            }
            break
case 'searchgrup':
case 'srcgrup':
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
if (!isPrem)return reply(mess.prem)
if (args.length < 1) return reply(`Nama Group? Contohnya\n${prefix + command} jb`)
sticWait(from)
hx.linkwa(q).then(result => {
let res = '*「 _LINK WA_ 」*\n\n'
for (let i of result) {
res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break
case 'playstore':
if (isBan)return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
if(!c) return reply('*Mau Cari Aplikasi Apa?*')
let play = await hx.playstore(c)
let store = '\n❉─────────────────────❉\n'
for (let i of play){
store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉\n\n`
}
reply(store)
break
//end
//════[ case download ]════//

case 'ytmp3':
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
            if (args.length < 1) return reply('Link Nya Mana ?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            sticWait(from)
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `*YOUTUBE MP3 🎵*

*Data Berhasil Didapatkan !!*
\`\`\`▢ Title : ${res[0].judul}\`\`\`
\`\`\`▢ Size : ${res[0].size}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`

\`\`\`Sabar Kak, file media sedang dikirim mungkin butuh beberapa menit\`\`\``

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
case 'ytmp4':
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
              sticWait(from)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `*YOUTUBE MP4 🎥*

*Data Berhasil Didapatkan !!*
\`\`\`▢ Title : ${res[0].judul}\`\`\`
\`\`\`▢ Size : ${res[0].size}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`

\`\`\`Sabar Kak, file media sedang dikirim mungkin butuh beberapa menit\`\`\``

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
            break
        case 'play':
        if (isBan) return sticBan(from)
      if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
        reply(`Fitur ( ${prefix}play ) Di Alihkan Ke Fitur ( ${prefix}ytplay )\nTerimaKasih...`)
break
   case 'ttdl':
   case 'savetiktok':         
   case 'tiktok':   
   case 'tiktokdl':
   case 'tiktoknowm':
   if (isBan) return sticBan(from)
 if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
if (!q) return reply('Linknya?')
var { TiktokDownloader } = require('./lib/tiktokdl')
sticWait(from)
res = await TiktokDownloader(`${q}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from, `${res.result.nowatermark}`)
break
 case 'ttwm':
 case 'tiktokwm':
 if (isBan) return sticBan(from)
 if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
 if (!q) return reply('Linknya?')
var { TiktokDownloader } = require('./lib/tiktokdl')
sticWait(from)
res = await TiktokDownloader(`${q}`).catch(e => {
reply(`Gagal Mendapatkan Data...`)
})
console.log(res)
sendMediaURL(from, `${res.result.watermark}`)
break

case 'pleybuttonvideo':{
	if (isBan) return sticBan(from)
	if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
  reply(`[ ! ] SABAR BOT GA CUMA DI 1 KONTAK/GRUP DOANG!!!`)
  let yut = await yts(q)
  ytv(yut.videos[0].url)
  .then((res) => {
  const { dl_link, thumb, title, filesizeF, filesize } = res
  axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
  .then((a) => {
  if (Number(filesize) >= 30000) return reply('FILE TERLALU BESAR!!!')
  sendFileFromUrl(dl_link, video, {mimetype: 'video/mp4',quoted:mek})
  })
  })
  }
break
case 'pleybuttonaudio':{
	if (isBan) return sticBan(from)
	if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
  reply(`[ ! ] SABAR BOT GA CUMA DI 1 KONTAK/GRUP DOANG!!!`)
  let yut = await yts(q)
  yta(yut.videos[0].url)
  .then((res) => {
  const { dl_link, thumb, title, filesizeF, filesize } = res
  axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
  .then((a) => {
  if (Number(filesize) >= 20000) return reply('FILE TERLALU BESAR!!!')
  sendFileFromUrl(dl_link, audio, {mimetype: 'audio/mp4', quoted:mek})
  })
  })
  }
break
  case 'ytdl':
  case 'ytplay':
  case 'play2':{
  	if (isBan) return sticBan(from)
  	if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
  if (!q) return reply(`Example : ${prefix+command} Judul`)
  sticWait(from)
  res = await yts(q)
   if (Number(res.all[0].seconds) >= 3000) return reply(`Error! Ukuran File Terlalu Besar!!`)
  let thumbInfo = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆                *YOUTUBE PLAY*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

\`\`\`▢ Title : ${res.all[0].title}\`\`\`
\`\`\`▢ Upload : ${res.all[0].ago}\`\`\`
\`\`\`▢ Ditonton : ${res.all[0].views}\`\`\`
\`\`\`▢ Duration : ${res.all[0].timestamp}\`\`\`
\`\`\`▢ Channel : ${res.all[0].author.name}\`\`\`
\`\`\`▢ Link : ${res.all[0].url}\`\`\`
\`\`\`▢ Deskripsi : \`\`\`
\`\`\`${res.all[0].description}\`\`\``
 const gambra = (await Ktdprjct.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage
const buttonsssok = [
  {buttonId:`${prefix}pleybuttonvideo ${res.all[0].url}`,buttonText:{displayText:' Video 🎥 '},type:1},
  {buttonId:`${prefix}pleybuttonaudio ${res.all[0].url}`,buttonText:{displayText:' Audio 🎶'},type:1}
  ]
  const ButtonsMessagees = {
  contentText: thumbInfo,
  buttons: buttonsssok,
  footerText: `Silahkan Pilih Jenis File Dibawah Ini
created by : Ktdproject`,
  headerType: 4,
  imageMessage: gambra
  }
  Ktdprjct.sendMessage(from, ButtonsMessagees, MessageType.buttonsMessage, {quoted: mek})
  }
  break  
//end
//════[ case sticker ]════//

case 'memegenerator': 
case 'memegen':{
	if (isBan) return sticBan(from)
    if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
	if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
	if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
	  try {
	if (!isQuotedImage) return reply(`Reply Gambar!`)
	sticWait(from)
		var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
		var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
		var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	    var mediiia = await Ktdprjct.downloadMediaMessage(enmedia)
		var njay = await uploadImages(mediiia)
		var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay}`)
			Ktdprjct.sendMessage(from, resu, image, {caption:'Jadiin Sticker bang', thumbnail: Buffer.alloc(0), quoted: mek})
			fs.unlinkSync(mediiia)
 } catch (e) {
	//reply(mess.eror)
	console.log(e)
}
    }
break
case 'stickermeme': 
case 'memesticker': 
case 'memestick': 
case 'stickmeme': 
case 'stcmeme': 
case 'smeme':{
  if (isBan) return sticBan(from)
  if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
  if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* KTDPRJCT`)
  if (q.includes('|')) return reply(`Kirim perintah *${prefix + command}* KTDPRJCT`)
    try {
	  if (!isQuotedImage) return reply(`Reply Gambar!`)
	  sticWait(from)
	  var teks2 = args.join(' ')
	  var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	  var mediia = await Ktdprjct.downloadMediaMessage(enmedia)
	  var njay = await uploadImages(mediia)
	  var resu = `https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`
	  sendStickerFromUrl(from,`${resu}`)	
 } catch (e) {
	//reply(lang.err())
	console.log(e)
}
	}
break	

case 'stickerwm': 
case 'gifstiker':
case 's':
case 'stickergif':  
case 'sticker':
case 'stiker':
case 'swm': 
case 'takestick':{
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
//if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
//sticWait(from) 
let packname1 = q.split('|')[0] ? q.split('|')[0] : `KTDPRJCT Bot`
let author1 = q.split('|')[1] ? q.split('|')[1] : '62895342581896'
if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Ktdprjct.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
  exif.create(packname1, author1, `stickwm_${sender}`)
   await ffmpeg(`${media}`)
	 .input(media)
	 .on('start', function (cmd) {
	console.log(color(`STARTED : ${cmd}`,'yellow'))
 })
  .on('error', function (err) {
	 console.log(color(`ERROR : ${err}`,'red'))
	  fs.unlinkSync(media)
	  reply(mess.error)
 })
  .on('end', function () {
	console.log(color(`FINISH`,'magenta'))
	exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
	if (error) return reply(mess.error)
	Ktdprjct.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
	fs.unlinkSync(media)
	fs.unlinkSync(`./sticker/${sender}.webp`)
	fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
	})
 .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
  .toFormat('webp')
  .save(`./sticker/${sender}.webp`)
	} else if (( isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 7000000)) {
 let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
 let media = await Ktdprjct.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
 exif.create(packname1, author1, `stickwm_${sender}`)
 sticWait(from)
 await ffmpeg(`${media}`)
  .inputFormat(media.split('.')[4])
  .on('start', function (cmd) {
  console.log(color(`STARTED : ${cmd}`,'yellow'))
})
  .on('error', function (err) {
	console.log(color(`ERROR : ${err}`,'red'))
	fs.unlinkSync(media)
	let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
	reply(mess.error)
})
  .on('end', function () {
	 console.log((`FINISH`,'magenta'))
	 exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		if (error) return reply(mess.error)
		Ktdprjct.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
		fs.unlinkSync(media)
		fs.unlinkSync(`./sticker/${sender}.webp`)
		fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
	})
	.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		.toFormat('webp')
		.save(`./sticker/${sender}.webp`)
} else if (isQuotedSticker) {
	let encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	let media = await Ktdprjct.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
		exif.create(packname1, author1, `takestick_${sender}`)
		exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		if (error) return reply(mess.error)
		Ktdprjct.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
		fs.unlinkSync(media)
		fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
	 })
 } else {
   reply(`Tag Gambar / Video Dengan Caption ${prefix}sticker \nNote : Durasi video maximal 6 detik`)
			 }
		}
  break
case 'toimg':
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
if (!isQuotedSticker) return reply('reply stickernya')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Ktdprjct.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
buffer = fs.readFileSync(ran)
Ktdprjct.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
fs.unlinkSync(ran)
})
break
case 'take':
  case 'colong':
  if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
              if (!isQuotedSticker) return reply('Stikernya mana kak')
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await Ktdprjct.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : `${pushname}`
              dua = typeof anu[1] !== 'undefined' ? anu[1] : `KTDprjct`
              require('./lib/fetcher').createExif(satu, dua)
              require('./lib/fetcher').modStick(media, Ktdprjct, mek, from)
              break
//end
//════[ case owner ]════//

case 'clearall':
					if (!isOwner) return reply('Kamu siapa?')
					anu = await Ktdprjct.chats.all()
					//Ktdprjct.setMaxListeners(25)
					for (let _ of anu) {
			        Ktdprjct.modifyChat(_.jid, 'clear', {
                    includeStarred: false
                    }).catch(console.log)
					}
					reply('Sukses delete all chat :)')
					break
					
case 'setfake':
if (!isOwner) return sticOwner(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
delb = await Ktdprjct.downloadMediaMessage(boij)
fs.writeFileSync(`./media/logonya.jpg`, delb)
reply('Sukses')
} else {
reply(`Kirim gambar dengan caption ${prefix}setfake`)
}
break	
case 'bc':
             if (!isOwner && !mek.key.fromMe) return  sticOwner(from)
             if (args.length < 1) return reply('teks?')
             anu100 = await Ktdprjct.chats.all()
             if (isMedia && !Ktdprjct.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ktdprjct).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Ktdprjct
             bc100 = await Ktdprjct.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             Ktdprjct.sendMessage(_.jid, bc100, image, {quoted: ftrol, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             Ktdprjct.sendMessage(_.jid, 
			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,
			"footerText": `${tanggal}`,
			"buttons": [
			{"buttonId": `helloworld`,
			"buttonText": {"displayText": "OKE"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakeimage,
			}}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break
//end
//════[ case block ]════//

case 'block':
  if (!isOwner && !mek.key.fromMe) return sticOwner(from)
  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
  ny = `${args[0].replace('@', '')}@c.us`
  Ktdprjct.blockUser (`${ny}@c.us`, "add")
  reply(`Nomor ${ny} telah di blockir!`)
  } else {
  ny = `${mentionUser}`
  Ktdprjct.blockUser (`${ny.replace("@s.whatsapp.net","@c.us")}`, "add")
  reply(`Nomor ${ny.replace("@s.whatsapp.net","@c.us")} telah blockir!`)  
  }
  break
  
case 'unblock':
  if (!isOwner && !mek.key.fromMe) return sticOwner(from)
  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
  ny = `${args[0].replace('@', '')}@c.us`
  Ktdprjct.blockUser (`${ny}@c.us`, "remove")
  reply(`Nomor ${ny} telah di unblockir!`)
  } else {
  ny = `${mentionUser}`
  Ktdprjct.blockUser (`${ny.replace("@s.whatsapp.net","@c.us")}`, "remove")
  reply(`Nomor ${ny.replace("@s.whatsapp.net","@c.us")} telah unblockir!`)  
  }
  break
  
  case 'blocklist':
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					Ktdprjct.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
//end
//════[ case ban ]════//

case 'ban':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
  ny = `${args[0].replace('@', '')}@s.whatsapp.net`
  ban.push(ny)
  fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
  reply(`Nomor ${ny} telah dibanned!`)
  } else {
  ny = `${mentionUser}`
  ban.push(ny)
  fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
  reply(`Nomor ${ny} telah dibanned!`)  
  }
  break
  
  case 'unban':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
  ah = `${args[0].replace("@","")}@s.whatsapp.net`
  unb = ban.indexOf(ah)
  ban.splice(unb, 1)
  fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
  reply(`Nomor ${ah} telah di unban!`)
  } else {
  ah = `${mentionUser}`
  unb = ban.indexOf(ah)
  ban.splice(unb, 1)
  fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
  reply(`Nomor ${ah} telah di unban!`)
  }
  break
//end
//════[ case group ]════//

case 'listadmin':
if (!isGroup) return sticGroup(from)
teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let adgrup of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${adgrup.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break

case 'sider':        
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
if (!isGroup) return sticGrup(from)
infom = await Ktdprjct.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `*Waktu :* ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break

case 'antilink':
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
if (!isGroup) return sticGrup(from)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(only.admin)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (!q) return reply(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiLink) return reply(`Udah aktif`)
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antilink.indexOf(from)
_antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else {
reply(`_Pilih on atau off_`)
}
break

case 'group':
case 'grup':
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
if (!isGroup) return sticGrup(from)
if (!isGroupAdmins && !mek.key.fromMe) return reply(only.admin)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (args[0] === 'buka') {
reply(`*Berhasil Membuka Grup ${groupMetadata.subject}*`)
Ktdprjct.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
reply(`*Berhasil Menutup Grup ${groupMetadata.subject}*`)
Ktdprjct.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break
case 'linkgroup':
case 'linkgrup':
case 'linkgc':
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
if (!isGroup) return sticGrup(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
linkgc = await Ktdprjct.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Ktdprjct.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
if (!isGroup) return sticGrup(from)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(only.admin)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Ktdprjct.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Ktdprjct.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
if (!isGroup) return sticGrup(from)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(only.admin)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Ktdprjct.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
Ktdprjct.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
reply(`Punya Tanggan? Manual Aja Kenapa!!`)
break
case 'kick':
reply(`Punya Tanggan? Manual Aja Kenapa!!`)
break
case 'tagall':
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
if (!isGroup) return sticGrup(from)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
if (!isGroup) return sticGrup(from)
if (!isGroupAdmins) return reply(only.admin)
if (!isBotGroupAdmins) return sticNotAdmin(from)
Ktdprjct.groupUpdateSubject(from, `${body.slice(9)}`)
Ktdprjct.sendMessage(from, `\`\`\`Sukses ✅, Mengganti nama grup menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
if (!isGroup) return sticGrup(from)
if (!isGroupAdmins) return reply(only.admin)
if (!isBotGroupAdmins) return sticNotAdmin(from)
Ktdprjct.groupUpdateDescription(from, `${body.slice(9)}`)
Ktdprjct.sendMessage(from, `\`\`\`Sukses ✅, Mengganti deskripsi grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setppgrup':
case 'setpp':
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
if (!isGroup) return sticGrup(from)
if (!isGroupAdmins && !mek.key.fromMe) return reply(only.admin)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Ktdprjct.downloadMediaMessage(encmedia)
Ktdprjct.updateProfilePicture(from, media)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
break
case 'hidetag':
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
if (!isGroup) return sticGrup(from)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
if (!isGroup) return sticGrup(from)
try {
var pic = await Ktdprjct.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* Auto Aktif\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
Ktdprjct.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
if (!isGroup) return sticGrup(from)
if (!isGroupAdmins && !mek.key.fromMe) return reply(only.admin)
if (!isBotGroupAdmins) return sticNotAdmin(from)
json = ['action', 'inviteReset', from]
Ktdprjct.query({json, expect200: true})
reply('Sukses Mereset Link Group')
break
case 'online':
case 'listonline':
case 'here':          
if (isBan) return sticBan(from)
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
if (!isGroup) return sticGrup(from)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(Ktdprjct.chats.get(ido).presences), Ktdprjct.user.jid]
Ktdprjct.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
} catch (e) {
reply(`${e}`)
}
break

case 'afk':
			if (!isGroup) return sticGrup(from)
            if (isAfkOn) return 
                reason = q ? q : 'Nothing'
                off.addAfkUser(sender, Date.now(), reason, _off)
               papa =  `*${pushname}* Sekarang sedang Afk\n*Reason :* ${reason}\n`
                Ktdprjct.sendMessage(from,papa, text,{quoted : mek})
            break
  case 'caripesan':
  case 'searchmessage':
  if (isBan) return sticBan(from)
  if (!mek.key.fromMe) return sticOwner(from)
  if(!q)return reply('pesannya apa bang?')
  reply('Sedang Mencari Pesan...')
  let v = await Ktdprjct.searchMessages(q,from,10,1)
  let s = v.messages
  let el = s.filter(v => v.message)
  el.shift()
  try {
  if(el[0].message.conversation == undefined) return
  reply(`Ditemukan ${el.length} pesan`)
  await sleep(3000)
  for(let i = 0; i < el.length; i++) {
  await Ktdprjct.sendMessage(from,'Nih Pesannya',text,{quoted:el[i]})
  }
  } catch(e){
  reply('Pesan tidak ditemukan!')
  }           
  break
//end
//════[ Module ]════//


//end
//════[ Module ]════//


//end
//════[ Module ]════//


//end
//════[ Module ]════//


//end
//════[ Module ]════//


//end
//════[ Module ]════//


//end
//════[ Module ]════//

case 'neko':
 if (isBan) return sticBan(from)
 if (!isPrem)return reply(mess.prem)
 if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
 sticWait(from)
await getBuffer(`https://api-alphabot.herokuapp.com/api/nsfw/neko?apikey=Alphabot`).then((gambar) => {
Ktdprjct.sendMessage(from, gambar, image, { quoted: ftrol, caption: `*©Random ${command}*` })
})
break
  case 'futanari':
  if (isBan) return sticBan(from)
  if (!isPrem)return reply(mess.prem)  
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
sticWait(from)
await getBuffer(`https://api-alphabot.herokuapp.com/api/nsfw/futanari?apikey=Alphabot`).then((gambar) => {
 Ktdprjct.sendMessage(from, gambar, image, { quoted: ftrol, caption: `*©Random ${command}*` })
 })
 break
 case 'ero':
 if (isBan) return sticBan(from)
 if (!isPrem)return reply(mess.prem)
 if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
 sticWait(from)
 await getBuffer(`https://api-alphabot.herokuapp.com/api/nsfw/ero?apikey=Alphabot`).then((gambar) => {
  Ktdprjct.sendMessage(from, gambar, image, { quoted: ftrol, caption: `*©Random ${command}*` })
  })
  break
  case 'tits':
  if (isBan) return sticBan(from)
  if (!isPrem)return reply(mess.prem) 
if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
  sticWait(from) 
  await getBuffer(`https://api-alphabot.herokuapp.com/api/nsfw/tits?apikey=Alphabot`).then((gambar) => {
   Ktdprjct.sendMessage(from, gambar, image, { quoted: ftrol, caption: `*©Random ${command}*` })
  })
  break
  case 'pussy':
  if (isBan) return sticBan(from)
  if (!isPrem)return reply(mess.prem)
  if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
    sticWait(from)
    await getBuffer(`https://api-alphabot.herokuapp.com/api/nsfw/pussyart?apikey=Alphabot`).then((gambar)=>{
      Ktdprjct.sendMessage(from, gambar, image, { quoted: ftrol, caption: `*©Random ${command}*` })
    })
    break
  case 'yuri':
if (isBan) return sticBan(from)
  if (!isPrem)return reply(mess.prem)  
  if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{buttonId: `${prefix}ktdprjctreg` ,buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: ftrol});
   sticWait(from)
   await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/yuri?apikey=Alphabot`).then((gambar)=>{
     Ktdprjct.sendMessage(from, gambar, image, {quoted: ftrol})
   })
   break
//end
//════[ Module ]════//

default:
if (body.startsWith(`${prefix}${command}`)) {
		    reply(`[ *403 NOT FOUND* ]\n\n_Maaf fitur ${command} sepertinya tidak terdaftar di dalam menu bot, silahkan cek menu kembali_ 🙂`, {quoted: mek})
		    }
/*if (body.startsWith(`${prefix}${command}`)) {
comd = `╭────────❒\n├ ʜᴇɪ *${pushname}* !!!\n├ Perintah / Comand *${prefix}${command}*\n├Tidak Ada Dalam *${prefix}menu*\n└───────────────❏`
Ktdprjct.sendMessage(from, comd, text, {quoted: mek})
				  }*/

}
		if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Giliran = @${tty.player1.split('@')[0]}`
  Ktdprjct.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
Ktdprjct.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Result Game Tictactoe 🎲

*Yeyyy Permainan Di Menangkan Oleh *@${tty.player1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
Ktdprjct.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌

${ttt}

Giliran = @${tty.player2.split('@')[0]}`
 Ktdprjct.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*?? Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
Ktdprjct.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿??*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌

${ttt}
 
Giliran = @${tty.player1.split('@')[0]}`
 Ktdprjct.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
 }
	
if (isOwner) {
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
}
}
  }catch (e) {
  //	  e = String(e)
		e = console.log(e)
	
   // if (!e.includes("this.isKtdprjct") && !e.includes("jid")) {
	//console.log('Error : %s', color(e, 'red'))
	//Ktdprjct.sendMessage(mek.key.remoteJid, util.format(e), MessageType.text, { quoted: mek })
	//Ktdprjct.sendMessage(`─────「 \`\`\`ALERT-ERROR\`\`\` 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdreply:{title: "Developer KTDPRJCT",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/logonya.jpg'),sourceUrl:"https://wa.me/p/62895342581896"}}})
      }
}






























