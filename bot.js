const { Client } = require("discord.js")
const client = new Client
global.config = require("./config.json")
const { updatePlayerCount } = require(".utils/")
//https://discordapp.com/oauth2/authorize?client_id=904409397445423114&scope=bot&permissions=8
client.on("ready", () => {
    console.log(`Discord Bot Logged in ad ${client.user.tag}`)
    updatePlayerCount(client, 5)
})

client.login(config.token)