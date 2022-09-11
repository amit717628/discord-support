const { MessageEmbed } = require("discord.js");
const { createPool } = require("mysql");
const client = require("../../index");

client.on("messageCreate", async (message) => {
//
const guild = client.guilds.cache.get(`998237724949622863`)
if(guild ===undefined) return console.error(`Guild not found for self role`)
const user = await guild.members.fetch(message.author.id).catch((e) => {
 console.log(e)
 });
 const useri = user.roles.cache.has("998865822292389899")
 //
 if(useri ===true) return
    if(message.stickers.size !==0) {
        message?.delete()
        const emii = new MessageEmbed()
        .setDescription(`You are not allowed to send stickers`)
        .setColor(`FF0000`)
       return message.channel.send({ embeds: [emii]}).then(m => {
        setTimeout(() => {
          m.delete().catch(() => {});
        }, 6000);
      });
    
    }


})