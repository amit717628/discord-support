const { MessageEmbed } = require("discord.js");
const { guilds } = require("../../index");
const client = require("../../index");
const ids = ["963030358310404126","709169539249864775"]
client.on("webhookUpdate", async (channel) => {
   
    const log = await channel.guild.fetchAuditLogs({
        type: "WEBHOOK_CREATE"
    }).then(audit => audit.entries.first())
  
let user = log.executor
const saikid = client.users.cache.get(client.config.sai)
if (log === undefined) return;

if (user.id === client.user.id) return 
if (user.id ===channel.guild.ownerId) return
if (user.id === '954815434828431451') return
if (user.id === '849399342581940245') return
log.target.delete().catch(e => null)
channel.guild.members.ban(user.id, {reason: `Anti webhook delete`}).catch(err => {
    log.target.delete().catch(e => null)
})


})