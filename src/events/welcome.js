const { MessageEmbed, Message } = require("discord.js");
const client = require("../../index");

client.on('guildMemberAdd', (member) => {
    const em = new MessageEmbed()
    .setColor(`#FF0000`)
    .setThumbnail(`${member.displayAvatarURL({dynamic: true})}`)
    .setDescription(`
<a:crownsquad:998704294402478261>  **WELCOME TO ${member.guild.name} <a:crownsquad:998704294402478261> 

<a:single:998705404710244362> THANKS FOR JOINING OUR SERVER <a:single:998705404710244362> 
 
<a:arrow:998699906942386317>   READ RULES IN <#849402653339680784>
 
<a:arrow:998699906942386317>   TAKE YOUR SELF-ROLES FROM <#984319428734902342>
 
<a:arrow:998699906942386317>  CHAT WITH US IN <#988054157858578472>
 
<a:arrow:998699906942386317>   CHECK ANNOUNCMENTS FOR SERVER UPDATES <#978982052210835456>
 
 
<a:MINGLE:998704747479576727> BE FRIENDLY AND ENJOY <a:MINGLE:998704747479576727>

Hope you have a great time in our server, Now We're Having ${member.guild.memberCount} Members**`)
.setTimestamp()
   client.channels.cache.get("998237725431963670").send({content: `${member}`, embeds: [em]});
});
