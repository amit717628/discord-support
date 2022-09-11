const { MessageEmbed, Message } = require("discord.js");
const { createPool } = require("mysql");
const client = require("../../index");

client.on("messageCreate", async (message) => {
//
if(message.author.id === message.guild.ownerId) return
if(message.author.id === '954815434828431451') return
const url = message.mentions.everyone
if(url ===true) {
  message.delete()
  message.guild.members.ban(message.author.id, {reason: `ANTI EVERYONE`}).catch(err => {
    message.delete()
    message.channel.permissionOverwrites.create(message.author.id, { VIEW_CHANNEL: false })
  })
    message.channel.permissionOverwrites.create(message.author.id, { VIEW_CHANNEL: false }).catch(err => {
      message.delete()
    })
    const emmm = new MessageEmbed()
    .setDescription(`You are not allowed to do these action`)
    .setColor(`DARK_BUT_NOT_BLACK`)
    return message.channel.send({embeds: [emmm]}).then(m => {
        setTimeout(() => {
          m.delete().catch(() => {});
        }, 5000);
      });
    
} 

   
 


})