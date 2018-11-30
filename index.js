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
 var c = 0;
 var d = 0;
 var newA = 0;
 var loss = 50;
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
   if(cmd == `${prefix}start`) {
   var x = getRandomInt(10);
   if(players.includes(message.member) == -1){
   players.splice(a, 0, message.member);
   bank.splice(b, 0, 200);
   return message.channel.send(players[a] + bank[b]);
   a++;
   b++;
   } else if(x <= 5) {
     newA = bank[players.indexOf(message.member)]; 
     newA = newA - loss; 
     var newbalance = bank.splice(players.indexOf(message.member), 0, newA);
     c = players.indexOf(message.member);
     return message.channel.send(players[c] + bank[c]);
   } else if(x > 5){
     return message.channel.send("You are trash");
   } 
 }

});   
bot.login(botconfig.token);
