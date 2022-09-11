const { MessageEmbed } = require("discord.js");
const { createPool } = require("mysql");
const client = require("../../index");

client.on("messageCreate", async (message) => {
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(client.config.prefix)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(/ +/g);

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));
    const url = new MessageEmbed()
    .setDescription(`Command not found`)
    .setColor(`DARK_BUT_NOT_BLACK`)
    
if(command ===undefined) return message.channel.send({embeds: [url]}).then(m => {
    setTimeout(() => {
      m.delete().catch(() => {});
    }, 6000);
  });

    if (!command) return;

    if(command.owner){
        const lul = new MessageEmbed()
        .setDescription(`You are not allowed to use these command`)
        .setColor(`DARK_BUT_NOT_BLACK`)
        return message.channel.send({embeds: [lul]}).then(m => {
            setTimeout(() => {
              m.delete().catch(() => {});
            }, 6000);
          });
    }
 await command.run(client, message, args);
});