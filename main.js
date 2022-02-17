const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const figlet = require('figlet')
const { getGroupAdmins, createExif, getRandom, modStick, fetchJson } = require('./lib/function');
const { getBuffer, info, start, success} = require('./lib/functions')
const moment = require("moment-timezone")
const gcdetect = JSON.parse(fs.readFileSync('./database/gcdetect.json'))
const chalk = require('chalk')
const welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
const {  location } = MessageType
const settings = JSON.parse(fs.readFileSync('./setting.json'))

global.APIs = []
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

blocked = []
baterai = 'unknown'
charging = 'unknown'

fakeyoi = settings.Fake
namabot = settings.BotName

const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')			
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')			
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')	


var date = new Date();

var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes(); 
var detik = date.getSeconds();
var waktoo = date.getHours();

switch(hari) {
case 0: hari = 'Minggu'; break;
case 1: hari = 'Senin'; break;
case 2: hari = 'Selasa'; break;
case 3: hari = 'Rabu'; break;
case 4: hari = 'Kamis'; break;
case 5: hari = 'Jum`at'; break;
case 6: hari = 'Sabtu'; break;
}

switch(bulan1) { 
case 0: bulan1 = 'januari'; break;
case 1: bulan1 = 'Februari'; break; 
case 2: bulan1 = 'Maret'; break;
case 3: bulan1 = 'April'; break;
case 4: bulan1 = 'Mei'; break;
case 5: bulan1 = 'Juni'; break;
case 6: bulan1 = 'Juli'; break;
case 7: bulan1 = 'Agustus'; break;
case 8: bulan1 = 'September'; break;
case 9: bulan1 = 'Oktober'; break; 
case 10: bulan1 = 'November'; break;
case 11: bulan1 = 'Desember'; break; 
}
var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun; 

require('./Ktdprjct.js')
nocache('./Ktdprjct.js', module => console.log(color('[','white'), color('WATCH','red'), color(']','white'), color(`'${module}'`, 'lightgreen'), 'File is updated!'))
require('./main.js')
nocache('./main.js', module => console.log(color('[','white'), color('WATCH','red'), color(']','white'), color(`'${module}'`, 'lightgreen'), 'File is updated!'))


const starts = async (Ktdprjct = new WAConnection()) => {
	//
	Ktdprjct.logger.level = 'warn'
	Ktdprjct.version = [2, 2147, 16]
	console.log(color(figlet.textSync('KTDPRJCT', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
//console.log(chalk.green("isi teks apa")) // green bisa ganti ke warna lain, asal inggris
console.log(color('|  WITA  |','white'), color(`${wita}`,'yellow'))
console.log(color('|  HARI  |','white'), color(`${tampilHari}`,'yellow'))
console.log(color('> SC INI DIBUAT OLEH KTDPRJCT','yellow'))
console.log(color('> SC INI GRATIS JANGAN DI PERJUAL BELIKAN\n','yellow'))

Ktdprjct.browserDescription = ["KTD PRJCT", "Browser", "3.0.0"];
	Ktdprjct.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color('SCAN QR NYA MAKSIMAL 20s'))
})
	Ktdprjct.on('credentials-updated', () => {
		fs.writeFileSync('./session/Ktdprjct.json', JSON.stringify(Ktdprjct.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Loading...')
	})
	fs.existsSync('./session/Ktdprjct.json') && Ktdprjct.loadAuthInfo('./session/Ktdprjct.json')
	Ktdprjct.on('connecting', () => {
		start('2', 'Menyambungkan')
	})
	Ktdprjct.on('open', () => {
		success('2', 'Tersambung')
	})
    
	// session
	await Ktdprjct.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./session/Ktdprjct.json`, JSON.stringify(Ktdprjct.base64EncodedAuthInfo(), null, '\t'))
	
	// Anti call
	Ktdprjct.on("CB:action,,call", json => {
	  let jid = json[2][0][1]["from"]
	  let isOffer = json[2][0][2][0][0] == "offer"
	  if (jid && isOffer) {
	    const tag = Ktdprjct.generateMessageTag()
	    const nodePayload = ['action', 'call', ['call', {
	      'from': Ktdprjct.user.jid,
	      'to': `${jid.split`@`[0]}@s.whatsapp.net`,
	      'id': tag
	    }, [['reject', {
	      'call-id': json[2][0][2][0][1]['call-id'],
	      'call-creator': `${jid.split`@`[0]}@s.whatsapp.net`,
	      'count': '0'
	    }, null]]]]
	    Ktdprjct.sendJSON(nodePayload, tag)
	  }
		setTimeout(function(){
			Ktdprjct.sendMessage(jid, 'Maaf, saya tidak bisa menerima panggilan.\nNelfon = Block!!!\n\nJika ingin membuka block harap chat Owner!!', MessageType.text)
			.then(() => Ktdprjct.blockUser(jid, "add"))
			}, 100);
		})

	// Baterai
	Ktdprjct.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	Ktdprjct.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// Send Message
/*Ktdprjct.sendButton = async (jid, content, footer, button1, row1, quoted, options = {}) => {

      return await Ktdprjct.sendMessage(jid, {

        contentText: content,

        footerText: footer,

        buttons: [

          { buttonId: row1, buttonText: { displayText: button1 }, type: 1 }

        ],

        headerType: 1

      }, MessageType.buttonsMessage, { contextInfo: { mentionedJid: Ktdprjct.parseMention(content + footer) }, quoted, ...options })

    }*/
const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
      kma = gam1;
      mhan = await Ktdprjct.prepareMessage(id, kma, MessageType.image);
       buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      }
      Ktdprjct.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Ktdprjct.prepareMessage(id, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Ktdprjct.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
 


  // owner
    const number = "62895342581896@s.whatsapp.net"

/*Ktdprjct.on("group-update", async(mem) => {
    metadata = await Ktdprjct.groupMetadata(mem.jid);
    if (mem.announce == "false") {
      Ktdprjct.sendMessage(metadata.id, `*[ Group Opened ]* \n\n${mns}group telah di buka oleh admin${mns}\n${mns}sekarang semua member bisa mengirim pesan${mns}`, MessageType.text);
      console.log(`[ GROUP OPENED ]\ngroup : ${metadata.subject}`);
    } else if (mem.announce == "true"){
      Ktdprjct.sendMessage(metadata.id, `*[ Group Closed ]* \n\n${mns}group telah di tutup oleh admin${mns}\n${mns}sekarang hanya admin yang bisa mengirim pesan${mns}`, MessageType.text);
      console.log(`[ GROUP CLOSED ]\ngroup : ${metadata.subject}`);
    } else if (!mem.desc == "") {
      tag = mem.descOwner.split("@")[0] + "@s.whatsapp.net";
      Ktdprjct.sendMessage(metadata.id, `*[ Group Description Change ]*\n\ndeskripsi group telah di ubah oleh owner ${mem.descOwner.split("@")[0]}\n\ndeskripsi baru: ${mem.desc}`, MessageType.text, {
        contextInfo:{mentionedJid:[tag]}
      });
      console.log(`[ DESCRIPTION CHANGE ]\ngroup : ${metadata.subject}`);
    } else if (mem.restrict == "false") {
      Ktdprjct.sendMessage(metadata.id, `*[ Group Setting Change ]*\n\nfitur edit group telah di buka\nsekarang semua member dapat mengedit info group`, MessageType.text);
      console.log(`[ GROUP SETTING CHANGE ]\ngroup : ${metadata.subject}`);
    } else if (mem.restrict == "true") {
      Ktdprjct.sendMessage(metadata.id, `*[ Group Setting Change ]*\n\nfitur edit group telah di tutup\nsekarang hanya admin yang dapat mengedit info group`, MessageType.text);
      console.log(`[ GROUP SETTING CHANGE ]\ngroup : ${metadata.subject}`);
    }
  });*/

Ktdprjct.on('group-participants-update', async (anu) => {

    try {
      groupMet = await Ktdprjct.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await Ktdprjct.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await Ktdprjct.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && mem.includes(Ktdprjct.user.jid)) {
        Ktdprjct.sendMessage(anu.jid, "Halo, Saya KTDPRJCT メ Bo† ×͜×", "conversation");
      }
      if (anu.action == "add" && !mem.includes(Ktdprjct.user.jid)) {
        mdata = await Ktdprjct.groupMetadata(anu.jid);
        memeg = mdata.participants.length;
        num = anu.participants[0];
        let v = Ktdprjct.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = v.vname || v.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        teks = `\`\`\`Halo Kak ${anu_user} Welcome\nIntro Dulu Kak!!! 🙂\n\n• Nama :\n• Umur :\n• Status :\n• Askot  :\nDi Isi Ya Biar Kenal\`\`\``;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://telegra.ph/file/b0084ad15ed8a75572b1e.jpg`
        );
        buttons = [
          { buttonId: `.Ktdprjct`, buttonText: { displayText: "Selamat Datang" }, type: 1 },
        ];
        imageMsg = (
          await Ktdprjct.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "�Created By KTDPRJCT メ Bo† ×͜×",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await Ktdprjct.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        Ktdprjct.relayWAMessage(prep);
      }
      if (anu.action == "remove" && !mem.includes(Ktdprjct.user.jid)) {
        mdata = await Ktdprjct.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = Ktdprjct.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        memeg = mdata.participants.length;
        out = `\`\`\`Bye Bye ${anu_user}\nHore... Beban Group Berkurang Lagi\nDari Group: ${mdata.subject}\`\`\``;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${
           groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://telegra.ph/file/b0084ad15ed8a75572b1e.jpg`
        );
        buttons = [
          { buttonId: `.Ktdprjct`, buttonText: { displayText: "Semoga Tenang DiSana" }, type: 1 },
        ];
        imageMsg = (
          await Ktdprjct.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${out}`,
          footerText: "Jangan Balik Lagi Lu Anjim!!!\n�Created By KTDPRJCT メ Bo† ×͜×",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await Ktdprjct.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        Ktdprjct.relayWAMessage(prep);
      }
      } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  });
/*else if (anu.action == 'promote') {
			num = anu.participants[0]
			try {
			   ppUrl = await Ktdprjct.getProfilePicture(num)
 } catch {
  ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
				}
				img = await getBuffer(ppUrl)
				teks = `PROMOTE - DETECTED \n\nNama : @${num.split("@")[0]}\nStatus : Member -> Admin\nGroup : ${mdata.subject}`
				sendButImage(anu.jid, teks, ``, img,but = [{buttonId: `Hello World!`, buttonText: {displayText: `SELAMAT`}, type: 1}], options = {contextInfo: {mentionedJid: [num]}})
			} else if (anu.action == 'demote') {
			num = anu.participants[0]
			try {
				ppUrl = await Ktdprjct.getProfilePicture(num)
				} catch {
					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
				}
				img = await getBuffer(ppUrl)
				teks = `DEMOTE - DETECTED \n\nNama : @${num.split("@")[0]}\nStatus : Admin -> Member\nGroup : ${mdata.subject}`
				sendButImage(anu.jid, teks, ``, img,but = [{buttonId: `Hello World!`, buttonText: {displayText: `SABAR`}, type: 1}], options = {contextInfo: {mentionedJid: [num]}})
			}
		}*/ 
		// block list
   Ktdprjct.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
   
    Ktdprjct.on('chat-update', async (message) => {
        require('./Ktdprjct.js')(Ktdprjct, message)
        ownerNumber = [`${settings.NomorOwner}@s.whatsapp.net`]
        dtod = "62895342581896@s.whatsapp.net"
       otod = `${settings.NomorOwner}@s.whatsapp.net`
    })  
}



/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()