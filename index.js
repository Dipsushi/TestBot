const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const {Client, RichEmbed} = require(`discord.js`);

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Monopoly.");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  int i = 0;
 if(message.content === `${prefix}add`) {
   i + 1; 
   return message.channel.send(i);
 }

if(message.content === `${prefix}testing`) {
 return bot.channels.find("name","hehe").send("Success!");
}

});   
bot.login(botconfig.token);
