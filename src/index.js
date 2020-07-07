const Discord = require('discord.js')
const client = new Discord.Client()

const inputNavalExplosive = require('./utils/inputNavalExplosive')
const explosiveRadiusDamage = require('./utils/explosiveRadiusDamage')
const pointsPerDamage = require('./utils/pointsPerDamage')
const reconstructQuadrant = require('./utils/reconstructQuadrant')

require('dotenv').config()

client.on("ready", () => {
    console.log(`Logado Com ${client.user.tag}`)
    client.user.setActivity('On Fort Vaux')

})

client.on("message", (message) => {
    if (!message.author.bot) {
            
        message.channel.send(pointsPerDamage(explosiveRadiusDamage(inputNavalExplosive(message.content))))
    }
})
client.login(process.env.TOKEN)














