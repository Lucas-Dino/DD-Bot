const { color, log } = require('console-log-colors');
const { red, green, yellow, blue, blueBright } = color;
const Discord = require("discord.js")
const token = require("./chave.json")
const hiroshi = new Discord.Client({intents: 32767})
const cF = require("./comandos/comandos.js")
const prefixo = "!"

hiroshi.login(token.token)

hiroshi.once("ready",()=>{
    console.log("> Hiroshi online")
})

hiroshi.on("messageCreate",(message)=>{
  if(verif(message)){
      let preProcess = message.content.trim().slice(1).split(/ +/g)
      let comando = preProcess.shift().toLowerCase()
      try {
          cF.ping(hiroshi, message)
      } catch (error) {
        console.log(error)
      }
  }
})

function verif(m){
 if(m.author.bot){return}
 if(m.channel.type == "dm"){return}
 if(!m.content.toLowerCase().startsWith(prefixo)){return}
 if(m.content.startsWith(`<@!${hiroshi.user.id}>` || `<@${hiroshi.user.id}>`)){return}
  return true
}