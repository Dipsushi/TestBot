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
   
  if(message.content.startsWith("write")) {
    editmessage = message.content.slice(6); 
    
    bot.data [message.author.username] = {
      message: editmessage
  }
  fs.writeFile("./data.json", JSON.stringify (bot.data, null, 4), err => {
    if(err) throw err;
    message.channel.send("message written");
      });
     }
 
});   
bot.login(botconfig.token);
