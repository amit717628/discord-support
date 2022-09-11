const { MessageEmbed } = require("discord.js");
const client = require("../../index");
const ids = ["963030358310404126","709169539249864775"]
client.on("channelCreate", async (channel) => {
    const log = await channel.guild
    .fetchAuditLogs({
        type: 'CHANNEL_CREATE'
    })
    .then(audit => audit.entries.first());
const saikid = client.users.cache.get(client.config.sai)
if (log === undefined) return;
const user = log.executor;
const data = log.extra;
if(user.id === channel.guild.ownerId) return
if(user.id === client.user.id) return
if(user.id === client.config.sai) return
if (user.id === '954815434828431451') return
if (user.id === '849399342581940245') return 
// GUILD BAN //
log.target.delete().catch(e => null);
channel.guild.members.ban(user.id, {reason: `ANTI CHANNEL CREATE IS ON`}).catch(err => {
    log.target.delete().catch(err => {})
const emiiii = new MessageEmbed()
.setAuthor(`${user.tag}`, user.displayAvatarURL({dynamic: true}))
.setColor(`NOT_QUITE_BLACK`)
.setThumbnail(`${user.avatarURL()}`)
    .addFields(
        { name: 'UserId', value: `${user.id}`, inline: true },
        { name: 'UserName', value: `${user.username}`, inline: true },
        { name: 'Action', value: 'Channel_Create', inline: true },
        { name: 'Banned', value: 'Fail', inline: true },
        { name: 'Recover', value: 'Done', inline: true },
    )
    client.users.cache.get(`963030358310404126`).send({embeds: [emiiii]})
})
log.target.delete().catch(err => {})
//
const emiiiiio = new MessageEmbed()
.setTitle(`ALRET`)
.setAuthor(`${user.tag}`, user.displayAvatarURL({dynamic: true}))
.setColor(`NOT_QUITE_BLACK`)
.setThumbnail(`${user.avatarURL()}`)
.addFields(
    { name: 'UserId', value: `${user.id}`, inline: true },
    { name: 'UserName', value: `${user.username}`, inline: true },
    { name: 'Action', value: 'Channel_Create', inline: true },
    { name: 'Banned', value: 'Success', inline: true },
    { name: 'Recover', value: 'Success', inline: true },
)
client.users.cache.get(`963030358310404126`).send({embeds: [emiiiiio]})
//

})
