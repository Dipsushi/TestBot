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

 if(message.content === "+testing" && message.channel.name === "hehe" || "+testing2" && message.channel.name === "hehe") {
    
if(message.content === `${prefix}testing2`) {
 return bot.channels.find("name","hehe").send("It's working!");
} else {
  return message.channel.send("Wrong Channel!");
}
if(message.content === `${prefix}testing`) {
 return bot.channels.find("name","hehe").send("Success!");
} else {
  return message.channel.send("Wrong Channel!");
}
}
});   
bot.login(botconfig.token);
