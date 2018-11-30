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
   
  var players = new Array(5);
  var bank = new Array(5); 
  var a = 0;
  var b = 0;
  var loss = 50; 
  
  if(cmd === `${prefix}start`) { 
      if(players.includes(message.member) = -1) {
        players.splice(a, 0, message.member); 
        bank.splice(a, 0, message.member); 
        
        return message.channel.send(players[a-1] + " " + bank[a-1]); 
      } else {
        b = bank[players.indexOf(message.member)] - loss; 
        bank.splice(players.indexOf(message.member), 1, b); 
        
        return message.channel.send(bank[players.indexOf(message.member)]); 
  }
 }
       
});   
bot.login(botconfig.token);
