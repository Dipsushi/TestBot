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
 var x = 0;
  
   if(cmd === `${prefix}start`) {
  
   if(players.includes(message.member) = -1){
   players.splice(a, 0, message.member);
   bank.splice(b, 0, 200);
   a++;
   b++;
   return message.channel.send(players[a-1] + bank[b-1]);
 
   } else if(x = 0 ) {
     newA = players.indexOf(message.member); 
     newA = newA - loss; 
     var newbalance = bank.splice(players.indexOf(message.member), 0, newA);
     return message.channel.send(players[players.indexOf(message.member)] + bank[players.indexOf(message.member)]); 
   }
  }
});   
bot.login(botconfig.token);
