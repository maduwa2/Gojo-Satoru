//═══════════════════════════════════════════════════════//
//
//                               ツ𝐁𝐎𝐓 𝐇𝐀𝐒𝐇𝐀࿐
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['+94 72 392 1905']
global.premium = ['+94 72 392 1905']
global.ownernomer = '+94 72 392 1905'
global.ownername = 'ツ𝐁𝐎𝐓 𝐇𝐀𝐒𝐇𝐀࿐'
global.botname = 'ツ𝐁𝐎𝐓 𝐇𝐀𝐒𝐇𝐀࿐'
global.footer = 'ツ𝐁𝐎𝐓 𝐇𝐀𝐒𝐇𝐀࿐.'
global.ig = 'https://github.com/nexusNw'
global.region = 'India, South India, Kerala'
global.sc = 'https://github.com/nexusNw/ツබොටා🙋‍♂️'
global.myweb = 'https://youtube.com/channel/UCqoUjPvDdb0kjXNYdvPPpHQ'
global.packname = 'ツ𝐁𝐎𝐓 𝐇𝐀𝐒𝐇𝐀࿐'
global.author = '🙋‍♂️සිරිමත් පකයෙකි_මම හොද ලමයෙකි 😉❤️'
global.sessionName = 'session'
global.prefa = ['','!','.','🤖','🌼','🌺']
global.sp = '⭔'
global.mess = {
    success: 'හලි 😉❤️ ✓',
    admin: 'එක කරන්න බැ 🙋‍♂️😉!',
    botAdmin: 'දැන් සැපත 😂🖕',
    owner: 'ツ𝐁𝐎𝐓 𝐇𝐀𝐒𝐇𝐀࿐ 😉❤️!',
    group: 'පලයම් බ්න් යන්න 😂💦!',
    private: 'Features Used Only For Private Chat!අහගත්තනේ 😂🖕
    bot: 'This Feature Is Only For Bot 😂🖕',
    wait: 'ටිකක් ඉදපම් පගෝ 😒💔...',
    error: 'එක කරන්න බැ මට මොකද්ද වෙලා🤔💔!',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
