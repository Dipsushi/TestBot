const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const {Client, RichEmbed} = require(`discord.js`);

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Monopoly.");
});

const fs = require("fs");
bot.data = require("./data.json");

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  var players = {}; 
   
  if(cmd === `${prefix}start`) {
    JSON.stringify(players); 
    if(players.some(item => item.name === message.member) === true){ 
      return message.channel.send("You are already registered!"); 
    } else {
    players[message.member] = {name: message.member, bank: 300}; 
  }
  fs.writeFile("./data.json", JSON.stringify (players, null, 4), err => {
    if(err) throw err;
    message.channel.send("Have fun!");
      });
     }
 
});   
bot.login(botconfig.token);
