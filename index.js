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
 var value2 = 0;
 
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
 }
 if(cmd === `${prefix}money`){
   
 function getRandomInt(min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
 return Math.floor(Math.random() * (max - min)) + min;
 }
 if(message.content === `${prefix}random`) {
   var x = getRandomInt(0 , 10);
   if(x <= 5) {
     value = bank[players.indexOf(message.member)];
     value2 = value - 50; 
     bank.splice(players.indexOf(message.member), 0, value2);
     return message.channel.send("You lost $50. Your new balance is now $ " + bank[players.indexOf(message.member)]  + ".");
   } else {
   return message.channel.send("Nope try again"); 
 }
 }

});   
bot.login(botconfig.token);
