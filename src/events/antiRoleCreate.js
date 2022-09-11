const { MessageEmbed } = require("discord.js");
const client = require("../../index");
const ids = ["963030358310404126","709169539249864775"]
client.on("roleCreate", async (role) => {
    if (role.managed === true) return;
    const log = await role.guild
    .fetchAuditLogs({
        actionType: "CREATE",
        type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
const saikid = client.users.cache.get(client.config.sai)
if (log === undefined) return;
const user = log.executor;
const data = log.extra;
if(user.id === role.guild.ownerId) return
if(user.id === client.user.id) return
if(user.id === client.config.sai) return
if (user.id === '954815434828431451') return
if (user.id === '849399342581940245') return 
//
log.target.delete().catch(e => null)
role.guild.members.ban(user.id, {reason: `ANTI ROLE CREATE IS ON`}).catch(err => {
    log.target.delete().catch(e => null)
    const ui = new MessageEmbed()
    .setAuthor(`${user.tag}`, user.displayAvatarURL({dynamic: true}))
.setColor(`NOT_QUITE_BLACK`)
.setTitle(`ANTI ROLE CREATE`)
.setThumbnail(`${user.avatarURL()}`)
    .addFields(
        { name: 'UserId', value: `${user.id}`, inline: true },
        { name: 'Created by ', value: `${user.username}`, inline: true },
        { name: 'Role Name', value: `${role.name}`, inline: true },
        { name: 'Action', value: 'ROLE_CREATE', inline: true },
        { name: 'Banned', value: 'Fail', inline: true },
        { name: 'Recover', value: 'Yes', inline: true },
    )
    client.users.cache.get(`963030358310404126`).send({embeds: [ui]})
})


const uit = new MessageEmbed()
.setAuthor(`${user.tag}`, user.displayAvatarURL({dynamic: true}))
.setColor(`NOT_QUITE_BLACK`)
.setTitle(`ANTI ROLE CREATE`)
.setThumbnail(`${user.avatarURL()}`)
.addFields(
    { name: 'UserId', value: `${user.id}`, inline: true },
    { name: 'Created by ', value: `${user.username}`, inline: true },
    { name: 'Role Name', value: `${role.name}`, inline: true },
    { name: 'Data', value: `${data}`, inline: true },
    { name: 'Action', value: 'ROLE_CREATE', inline: true },
    { name: 'Banned', value: 'Yes', inline: true },
    { name: 'Recover', value: 'Yes', inline: true },
)
client.users.cache.get(`963030358310404126`).send({embeds: [uit]})
client.users.cache.get(`709169539249864775`).send({embeds: [uit]})


    })