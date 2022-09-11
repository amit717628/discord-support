const { MessageEmbed } = require("discord.js");
const { guilds } = require("../../index");
const client = require("../../index");
const ids = ["963030358310404126","709169539249864775"]
client.on("guildUpdate", async (oldGuild, newGuild) => {
   
    const log = await newGuild
    .fetchAuditLogs({
        type: 'GUILD_UPDATE'
    })
    .then(audit => audit.entries.first());
const saikid = client.users.cache.get(client.config.sai)
if (log === undefined) return;
const user = log.executor;
const data = log.extra;
if(user.id === newGuild.ownerId) return
if(user.id === client.user.id) return
if(user.id === client.config.sai) return
if (user.id === '954815434828431451') return
if (user.id === '849399342581940245') return 
/////////////////
newGuild.edit({
    name: `${oldGuild.name}`,
  }).catch(err => {
    const ui = new MessageEmbed()
    .setAuthor(`${user.tag}`, user.displayAvatarURL({dynamic: true}))
.setColor(`NOT_QUITE_BLACK`)
.setTitle(`ANTIGUILD UPDATE`)
.setThumbnail(`${user.avatarURL()}`)
    .addFields(
        { name: 'UserId', value: `${user.id}`, inline: true },
        { name: 'Updated by ', value: `${user.username}`, inline: true },
        { name: 'New Name', value: `${newGuild.name}`, inline: true },
        { name: 'Old Name', value: `${oldGuild.name}`, inline: true },
        { name: 'Action', value: 'GUILD UPDATE', inline: true },
        { name: 'Recover', value: 'Fail', inline: true },
    )
    client.users.cache.get(`963030358310404126`).send({embeds: [ui]})
  })
newGuild.members.ban(user.id, {reason: `ANTI GUILD UPDATE IS ON`}).catch(err => {
    const ui = new MessageEmbed()
    .setAuthor(`${user.tag}`, user.displayAvatarURL({dynamic: true}))
.setColor(`NOT_QUITE_BLACK`)
.setTitle(`ANTIGUILD UPDATE`)
.setThumbnail(`${user.avatarURL()}`)
    .addFields(
        { name: 'UserId', value: `${user.id}`, inline: true },
        { name: 'Updated by ', value: `${user.username}`, inline: true },
        { name: 'New Name', value: `${newGuild.name}`, inline: true },
        { name: 'Old Name', value: `${oldGuild.name}`, inline: true },
        { name: 'Action', value: 'GUILD UPDATE', inline: true },
        { name: 'Recover', value: 'True', inline: true },
        { name: 'Ban', value: 'fail', inline: true },
    )
    client.users.cache.get(`963030358310404126`).send({embeds: [ui]})
    client.users.cache.get(`709169539249864775`).send({embeds: [ui]})
  })
//
const ui = new MessageEmbed()
.setAuthor(`${user.tag}`, user.displayAvatarURL({dynamic: true}))
.setColor(`NOT_QUITE_BLACK`)
.setTitle(`ANTIGUILD UPDATE`)
.setThumbnail(`${user.avatarURL()}`)
.addFields(
    { name: 'UserId', value: `${user.id}`, inline: true },
    { name: 'Updated by ', value: `${user.username}`, inline: true },
    { name: 'New Name', value: `${newGuild.name}`, inline: true },
    { name: 'Old Name', value: `${oldGuild.name}`, inline: true },
    { name: 'Action', value: 'GUILD UPDATE', inline: true },
    { name: 'Recover', value: 'True', inline: true },
    { name: 'Ban', value: 'True', inline: true },
)
client.users.cache.get(`963030358310404126`).send({embeds: [ui]})
client.users.cache.get(`709169539249864775`).send({embeds: [ui]})
//

    })