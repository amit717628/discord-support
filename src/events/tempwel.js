const { MessageEmbed, Message } = require("discord.js");
const client = require("../../index");

client.on('guildMemberAdd', (member) => {
   const em = new MessageEmbed()
   .setAuthor(`${member.user.tag}`, member.displayAvatarURL({dynamic: true}))
   .setColor(`#FF0000`)
   .setThumbnail(`${member.displayAvatarURL({dynamic: true})}`)
   .setDescription(
`
**
<a:crownsquad:998704294402478261> WELCOME TO ${member.guild.name} <a:crownsquad:998704294402478261>
━━━━━━━━━━━━━━━━━━━━━━━
<a:emote:998712735061778432> GRAB YOUR <#983399703804772503>
<a:peachcatcute:998713169478430811> READ OUR <#849402653339680784>
━━━━━━━━━━━━━━━━━━━━━━━
Hope you have a great time in our server, Now We're Having ${member.guild.memberCount} Members
**`
)
.setTimestamp()
   client.channels.cache.get("998250170233925684").send({content: `${member}`, embeds: [em]}).then(m => {
      setTimeout(() => {
        m.delete().catch(() => {});
      }, 10000);
    });
});
