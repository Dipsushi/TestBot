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

 function getRandomInt(min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
 return Math.floor(Math.random() * (max - min)) + min;
 }
 if(message.content === `${prefix}random`) {
   var x = getRandomInt(0 , 20);
   if(x < 10) {
     return message.channel.send("You are cool");
   } else {
     return message.channel.send("You are trash");
   }
 }
  
if(message.content === `${prefix}testing2` && message.channel.name === "hehe") {
 return bot.channels.find("name","hehe").send("It's working!");
} else if(message.content === `${prefix}testing` && message.channel.name === "hehe") {
 return bot.channels.find("name","hehe").send("Success!");
} else {
  return message.channel.send("Wrong Channel!");
}

});   
bot.login(botconfig.token);
