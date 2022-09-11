const { MessageEmbed } = require("discord.js");
const { guilds } = require("../../index");
const { setVanity } = require('djs-vanity')
const client = require("../../index");
client.on("guildUpdate", async (oldGuild, newGuild) => {
    if (oldGuild.vanityURLCode !== newGuild.vanityURLCode) {
    const log = await newGuild
    .fetchAuditLogs({
        type: 'GUILD_UPDATE'
    })
    .then(audit => audit.entries.first());
if (log === undefined) return;
const user = log.executor;
if (user.id ===client.user.id) return 
if (user.id ===newGuild.ownerId) return
if (user.id === '954815434828431451') return
if (user.id === '849399342581940245') return
newGuild.setVanityURL(`${oldGuild.vanityURLCode}`).catch(err => {
    console.log(err)
})
newGuild.members.ban(user.id, {reason: [`ANTI VANITY IS ON`]}).catch(err => {
})

}})