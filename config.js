import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['989054502743', '𝑫𝒂𝒓𝒌 𝐵𝑜𝑡', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = ['989054502743'] // Want some help?
global.prems = ['989054502743'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://example.p.rapidapi.com/?rapidapi-key':'3a28859f77mshf67d323010090e9p1e52f7jsn1df6b6675a4e'
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'Dark Bot'
global.author = '𝙸'𝚖 𝙽𝚘𝚝 𝚊 𝚔𝚒𝚗𝚐 𝙸'𝚖 𝚗𝚘𝚝 𝚊 𝚐𝚘𝚍
 𝙸'𝚖 𝚃𝚑𝚎 𝐅𝐮𝐜𝐤𝐢𝐧𝐠 𝑴𝒐𝒐𝒅🖤'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🖤',
      limit: '🖤',
      health: '🖤',
      exp: '🖤',
      money: '🖤',
      potion: '🖤',
      diamond: '🖤',
      common: '🖤',
      uncommon: '🖤',
      mythic: '🖤',
      legendary: '🖤',
      pet: '🖤',
      trash: '🖤',
      armor: '🖤',
      sword: '🖤',
      wood: '🖤',
      rock: '🖤',
      string: '🖤',
      horse: '🖤',
      cat: '🖤',
      dog: '🖤',
      fox: '🖤',
      petFood: '🖤',
      iron: '🖤',
      gold: '🖤',
      emerald: '🖤'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Updated - config.js"))
  import(`${file}?update=${Date.now()}`)
})
