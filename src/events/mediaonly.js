const { MessageEmbed, Message } = require("discord.js");
const { createPool } = require("mysql");
const client = require("../../index");

client.on("messageCreate", async (message) => {
//
if(message.author.id === client.user.id) return
if(message.attachments.size) return
 if(message.channel.id === '998250170233925684'){
     message.delete()
    const warn = new MessageEmbed()
    .setDescription(`You are not allowed to send messages here`)
    .setColor(`DARK_BUT_NOT_BLACK`)
   return message.channel.send({content: `${message.member}`,embeds: [warn]}).then(m => {
    setTimeout(() => {
      m.delete().catch(() => {});
    }, 4000);
  });

 }



})