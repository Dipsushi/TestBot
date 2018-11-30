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
  var index = 0;
  var loss = 50;
  var value = 0;
  var newvalue = 0; 
  
  if(cmd === `${prefix}start`) { 
      if(players.includes(message.member) = -1) {
        players.splice(a, 0, message.member); 
        bank.splice(a, 0, 200); 
        
        return message.channel.send(players[a-1] + " " + bank[a-1]); 
      } else {
        index = players.indexOf(message.member); 
        value = bank[index]; 
        newvalue = value + loss; 
        bank.splice(index, 1, newvalue); 
        
        return message.channel.send(bank[index]); 
  }
 }
       
});   
bot.login(botconfig.token);
