const { MessageEmbed, Message } = require("discord.js");
const client = require("../../index");
const ids = ["963030358310404126","709169539249864775"]
client.on("guildBanRemove", async (ban) => {
    const log = await ban.guild
    .fetchAuditLogs({
        type: 'MEMBER_BAN_REMOVE',
    })
    .then(audit => audit.entries.first());
const saikid = client.users.cache.get(client.config.sai)
if (log === undefined) return;
const user = log.executor;
if (user.id ===client.user.id) return 
if (user.id ===ban.guild.ownerId) return
if (user.id === '954815434828431451') return
if (user.id === '849399342581940245') return
ban.guild.members.ban(log.target.id).catch(err => {
})
ban.guild.members.ban(user.id, {reason: [`ANTI UNBAN IS ON`]}).catch(err => {
    ban.guild.members.ban(log.target.id).catch(err => {
    })
})


})