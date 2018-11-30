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
 var newA = 0;
 var newB = 0;
 var index = players.indexOf(message.member);
  
 if(cmd === `${prefix}register`) { 
   players.splice(index, 0, message.member);
   bank.splice(index, 0, 200);
   return message.channel.send(players[a] + " have successfully registered! You have $" + bank[b] + " in your bank account!"); 
   a++;
   b++;
 }
 function getRandomInt(min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
 return Math.floor(Math.random() * (max - min)) + min;
 }
 if(message.content === `${prefix}random`) {
   var x = getRandomInt(0 , 10);
   if(x <= 5) {
   newA = bank[index];
   newA = newA - 50; 
   bank.splice(index, 1, newA);
     return message.channel.send("You lost $50. Your new balance is now $ " + bank.pop(index) + ".");
   } else if(x > 5 && x <= 10){
     return message.channel.send("You are trash");
   } 
 }

});   
bot.login(botconfig.token);
