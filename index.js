const Discord = require("discord.js")
const fetch = require("node-fetch")
const keepAlive = require("./server")
const Database = require("@replit/database")
const db = new Database()
const client = new Discord.Client()

client.on('ready', () =>
{
  console.log('Logged in!')
});

client.on('message', msg =>
{
  if (msg.content === '!spam')
  {
    msg.channel.send('Let the games begin!')
    msg.channel.send('eat your vegetables!')
  }

  if (msg.content === 'eat your vegetables!')
  {
    msg.channel.send('eat your vegetables!')
  }

  else
  {
    msg.channel.send('eat your vegetables!')
  }

  if (msg.content === '!stop')
  {
    stop
  }
})

keepAlive()
client.login(process.env.TOKEN)