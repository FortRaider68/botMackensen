const Discord = require('discord.js')
const client = new Discord.Client()

require('dotenv').config()


client.on("ready",()=>{
    console.log(`Logado Com ${client.user.tag}`)
    client.user.setPresence(false)
    
})

client.on("message",(message)=>{
    if(!message.author.bot && message.content === 'Olá'){
        message.reply("Olá Soldado Da Prússia")
    }
})
client.login(process.env.TOKEN)