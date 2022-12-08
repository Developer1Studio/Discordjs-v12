const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Express app!')
});
app.listen(3000, () => {
});

const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '!'

client.on('ready', () => {
    console.log(`Bot is On! ${client.user.tag}`);
})

client.login(process.env.token); 


///// الأكواد في سطر 21
