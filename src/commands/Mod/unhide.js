const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "unhide",
    aliases: ['uh'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
  const saichutiya = message.channel || message.mentions.channels.first() 

  //
  const role = message.guild.roles.everyone;
  saichutiya.permissionOverwrites.create(role, {
   VIEW_CHANNEL: true
 })

 const embed = new MessageEmbed()
 .setAuthor(`| ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
 .setDescription(`<:success:999936552362856478> | ${saichutiya} is now visible to the ${role}`)
 .setColor(`FF0000`)
 message.channel.send({embeds: [embed]}).then(m => {
    setTimeout(() => {
      m.delete().catch(() => {});
    }, 7000);
  });

 //
  
    }}