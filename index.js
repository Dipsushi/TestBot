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
  
 var players = [];
 var bank = [];
 var a = 0;
 var b = 0; 
  
 if(cmd === `${prefix}register`) { 
   players[a] = message.member;
   bank[b] = Math.round(200);
   return message.channel.send(players[a] + " have successfully registered! You have $" + bank[b] + "in your bank account!"); 
   a++;
   b++;
 }

});   
bot.login(botconfig.token);
