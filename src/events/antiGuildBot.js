const { MessageEmbed } = require("discord.js");
const client = require("../../index");
const ids = ["963030358310404126","709169539249864775"]
client.on("guildMemberAdd", async (member) => {
    if (member.user.bot) {
    const log = await member.guild
    .fetchAuditLogs({
        type: 'BOT_ADD'
    })
    .then(audit => audit.entries.first());
const saikid = client.users.cache.get(client.config.sai)
if (log === undefined) return;
const user = log.executor;
const data = log.extra;
if(user.id === member.guild.ownerId) return
if(user.id === client.user.id) return
if(user.id === client.config.sai) return
if (user.id === '954815434828431451') return
if (user.id === '849399342581940245') return 

// BAN KRDO APRADHI KO //
member.guild.members
.ban(log.target.id,{reason: 'ANTI BOT IS ON'}).catch(err => {
    member.guild.members
.kick(log.target.id,{reason: 'ANTI BOT IS ON'}).catch(err => {
    const emiiii = new MessageEmbed()
.setAuthor(`${user.tag}`, user.displayAvatarURL({dynamic: true}))
.setColor(`NOT_QUITE_BLACK`)
.setTitle(`EMERGENCY ! `)
.setThumbnail(`${user.avatarURL()}`)
    .addFields(
        { name: 'UserId', value: `${user.id}`, inline: true },
        { name: 'Added by ', value: `${user.username}`, inline: true },
        { name: 'Bot Name', value: `${log.target.username}`, inline: true },
        { name: 'Bot Id', value: `${log.target.id}`, inline: true },
        { name: 'Action', value: 'BOT_ADD', inline: true },
        { name: 'Banned', value: 'Fail', inline: true },
        { name: 'Kick', value: 'Fail', inline: true },
    )
    client.users.cache.get(`963030358310404126`).send({embeds: [emiiii]})
})
//
const emiiii = new MessageEmbed()
.setAuthor(`${user.tag}`, user.displayAvatarURL({dynamic: true}))
.setColor(`NOT_QUITE_BLACK`)
.setTitle(`BOT ADDED ! `)
.setThumbnail(`${user.avatarURL()}`)
    .addFields(
        { name: 'UserId', value: `${user.id}`, inline: true },
        { name: 'Added by ', value: `${user.username}`, inline: true },
        { name: 'Bot Name', value: `${log.target.username}`, inline: true },
        { name: 'Bot Id', value: `${log.target.id}`, inline: true },
        { name: 'Action', value: 'BOT_ADD', inline: true },
        { name: 'Banned', value: 'Fail', inline: true },
        { name: 'Kick', value: 'Fail', inline: true },
    )
    client.users.cache.get(`963030358310404126`).send({embeds: [emiiii]})
}) 
const emiiii = new MessageEmbed()
.setAuthor(`${user.tag}`, user.displayAvatarURL({dynamic: true}))
.setColor(`NOT_QUITE_BLACK`)
.setTitle(`ANTI BOT ADD`)
.setThumbnail(`${user.avatarURL()}`)
    .addFields(
        { name: 'UserId', value: `${user.id}`, inline: true },
        { name: 'Added by ', value: `${user.username}`, inline: true },
        { name: 'Bot Name', value: `${log.target.username}`, inline: true },
        { name: 'Bot Id', value: `${log.target.id}`, inline: true },
        { name: 'Action', value: 'BOT_ADD', inline: true },
        { name: 'Action Taken', value: 'Yes', inline: true },
    )
    client.users.cache.get(`963030358310404126`).send({embeds: [emiiii]})
    //
member.guild.members.ban(user.id, {reason: `ADDING BOT`}).catch(err => {
    const emo = new MessageEmbed()
.setAuthor(`${user.tag}`, user.displayAvatarURL({dynamic: true}))
.setColor(`NOT_QUITE_BLACK`)
.setTitle(`EMERGENCY ! `)
.setThumbnail(`${user.avatarURL()}`)
    .addFields(
        { name: 'UserId', value: `${user.id}`, inline: true },
        { name: 'Added by ', value: `${user.username}`, inline: true },
        { name: 'Bot Name', value: `${log.target.username}`, inline: true },
        { name: 'Bot Id', value: `${log.target.id}`, inline: true },
        { name: 'Action', value: 'BOT_ADD', inline: true },
        { name: 'Banned', value: 'Fail', inline: true },
    )
    client.users.cache.get(`963030358310404126`).send({embeds: [emo]})
})
//
const emio = new MessageEmbed()
.setAuthor(`${user.tag}`, user.displayAvatarURL({dynamic: true}))
.setColor(`NOT_QUITE_BLACK`)
.setTitle(`ANTI BOT ADD`)
.setThumbnail(`${user.avatarURL()}`)
    .addFields(
        { name: 'UserId', value: `${user.id}`, inline: true },
        { name: 'Added by ', value: `${user.username}`, inline: true },
        { name: 'Bot Name', value: `${log.target.username}`, inline: true },
        { name: 'Bot Id', value: `${log.target.id}`, inline: true },
        { name: 'Action', value: 'BOT_ADD', inline: true },
        { name: 'Action Taken', value: 'Yes', inline: true },
    )
    client.users.cache.get(`963030358310404126`).send({embeds: [emio]})
   
  
}})