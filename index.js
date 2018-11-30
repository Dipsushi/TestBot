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
 var value = 0;
 var min = 0;
 var max = 10;
  
  if(cmd === `${prefix}register`) {
   if(players.includes(message.member) == -1) {
   players.splice(a, 0, message.member);
   bank.splice(b, 0, 200);
   return message.channel.send(players[a] + bank[b]);
   a++;
   b++;
 } else {
   return message.channel.send("You are already registered!");
 }  
    
 if(message.content === `${prefix}random`) {
   var min = Math.ceil(min);
   var max = Math.floor(max);
   var x = Math.floor(Math.random() * (max - min)) + min;
   if(x <= 5) {
     return message.channel.send(players[a] + bank[b]);
   } else if(x > 5){
     return message.channel.send("You are trash");
   } 
 }
}


});   
bot.login(botconfig.token);
