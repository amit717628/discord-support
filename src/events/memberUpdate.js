const { MessageEmbed } = require("discord.js");
const client = require("../../index");
const ids = ["963030358310404126","709169539249864775"]
client.on("guildMemberUpdate", async (oldMember,newMember) => {
//
if (oldMember.roles.cache.size > newMember.roles.cache.size) {

    const role = newMember.roles.cache
       .difference(oldMember.roles.cache)
      .first();
   if(role.managed === true) return 
      
      
let  log = await newMember.guild.fetchAuditLogs({
       type: 'MEMBER_ROLE_UPDATE'
   }).then(audit => audit.entries.first())
   
  
   const user = log.executor
   if(user.id ===newMember.guild.ownerId) return
if(user.id === client.user.id) return
if(user.id === client.config.sai) return
   //
   newMember.guild.members.cache.get(log.target.user.id).roles.set([])
   newMember.guild.members
   .ban(user.id, { reason: 'ANTI ROLE UPDATE' })
//
if (oldMember.roles.cache.size < newMember.roles.cache.size) {
    const role = newMember.roles.cache
       .difference(oldMember.roles.cache)
      .first();
let  log = await newMember.guild.fetchAuditLogs({
       type: 'MEMBER_ROLE_UPDATE'
   }).then(audit => audit.entries.first())
   
   
   
   const user = log.executor
   if(user.id === member.guild.ownerId) return
if(user.id === client.user.id) return
if(user.id === client.config.sai) return
   newMember.guild.members.cache.get(log.target.user.id).roles.set([])
   newMember.guild.members
   .ban(user.id, { reason: 'Anti Role' })

   if (oldMember.roles.cache.size < newMember.roles.cache.size) {
    const role = newMember.roles.cache
    .difference(oldMember.roles.cache)
   .first();
let  log = await newMember.guild.fetchAuditLogs({
    type: 'MEMBER_ROLE_UPDATE'
}).then(audit => audit.entries.first())



const user = log.executor
if(user.id === member.guild.ownerId) return
if(user.id === client.user.id) return
if(user.id === client.config.sai) return
         
		   newMember.guild.members
           .ban(user.id, { reason: 'ANTI ROLE' })

}}}})