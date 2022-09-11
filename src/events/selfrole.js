const { MessageEmbed, Message } = require("discord.js");
const client = require("../../index");

client.on("interactionCreate", async (interaction) => {
    await interaction.deferReply({ ephemeral: true }).catch((error) => {
        console.log(error)
    });
    if (!interaction.isButton()) return
    //.catch(() => {});
    if(interaction.customId === "male") {
       const guild = client.guilds.cache.get(`998237724949622863`)
       if(guild ===undefined) return console.error(`Guild not found for self role`)
       const user = await guild.members.fetch(interaction.user.id).catch((e) => {
        console.log(e)
        });
        const useri = user.roles.cache.has("998720891879956600")
       if(useri ===true) {
        interaction.member.roles.remove(`998720891879956600`)
       const rolehta = new MessageEmbed()
       .setDescription(`Successfully removed Male Role`)
       .setColor(`DARK_BUT_NOT_BLACK`)
       .setAuthor(`| ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic: true}))
       interaction.followUp({embeds: [rolehta]})
        return
       } else {
        interaction.member.roles.add(`998720891879956600`)
        const rolehta = new MessageEmbed()
        .setDescription(`Successfully added <@&998720891879956600> Role`)
        .setColor(`DARK_BUT_NOT_BLACK`)
        .setAuthor(`| ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic: true}))
        interaction.followUp({embeds: [rolehta]})
       }
    }
    if(interaction.customId === "female") {
        const guild = client.guilds.cache.get(`998237724949622863`)
        if(guild ===undefined) return console.error(`Guild not found for self role`)
        const user = await guild.members.fetch(interaction.user.id).catch((e) => {
         console.log(e)
         });
         const useri = user.roles.cache.has("998720892257452104")
        if(useri ===true) {
         interaction.member.roles.remove(`998720892257452104`)
        const rolehta = new MessageEmbed()
        .setDescription(`Successfully removed <@&998720892257452104> Role`)
        .setColor(`DARK_BUT_NOT_BLACK`)
        .setAuthor(`| ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic: true}))
        interaction.followUp({embeds: [rolehta]})
         return
        } else {
         interaction.member.roles.add(`998720892257452104`)
         const rolehta = new MessageEmbed()
         .setDescription(`Successfully added <@&998720892257452104> Role`)
         .setColor(`DARK_BUT_NOT_BLACK`)
         .setAuthor(`| ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic: true}))
         interaction.followUp({embeds: [rolehta]})
        }
    } 
    if(interaction.customId === "ios") {
        const guild = client.guilds.cache.get(`998237724949622863`)
        if(guild ===undefined) return console.error(`Guild not found for self role`)
        const user = await guild.members.fetch(interaction.user.id).catch((e) => {
         console.log(e)
         });
         const useri = user.roles.cache.has("998720893859668038")
        if(useri ===true) {
         interaction.member.roles.remove(`998720893859668038`)
        const rolehta = new MessageEmbed()
        .setDescription(`Successfully removed <@&998720893859668038> Role`)
        .setColor(`DARK_BUT_NOT_BLACK`)
        .setAuthor(`| ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic: true}))
        interaction.followUp({embeds: [rolehta]})
         return
        } else {
         interaction.member.roles.add(`998720893859668038`)
         const rolehta = new MessageEmbed()
         .setDescription(`Successfully added <@&998720893859668038> Role`)
         .setColor(`DARK_BUT_NOT_BLACK`)
         .setAuthor(`| ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic: true}))
         interaction.followUp({embeds: [rolehta]})
        }
    } 
    if(interaction.customId === "an") {
        const guild = client.guilds.cache.get(`998237724949622863`)
        if(guild ===undefined) return console.error(`Guild not found for self role`)
        const user = await guild.members.fetch(interaction.user.id).catch((e) => {
         console.log(e)
         });
         const useri = user.roles.cache.has("998865819482214410")
        if(useri ===true) {
         interaction.member.roles.remove(`998865819482214410`)
        const rolehta = new MessageEmbed()
        .setDescription(`Successfully removed <@&998865819482214410> Role`)
        .setColor(`DARK_BUT_NOT_BLACK`)
        .setAuthor(`| ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic: true}))
        interaction.followUp({embeds: [rolehta]})
         return
        } else {
         interaction.member.roles.add(`998865819482214410`)
         const rolehta = new MessageEmbed()
         .setDescription(`Successfully added <@&998865819482214410> Role`)
         .setColor(`DARK_BUT_NOT_BLACK`)
         .setAuthor(`| ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic: true}))
         interaction.followUp({embeds: [rolehta]})
        }
    } 
    if(interaction.customId === "pc") {
        const guild = client.guilds.cache.get(`998237724949622863`)
        if(guild ===undefined) return console.error(`Guild not found for self role`)
        const user = await guild.members.fetch(interaction.user.id).catch((e) => {
         console.log(e)
         });
         const useri = user.roles.cache.has("998865822292389899")
        if(useri ===true) {
         interaction.member.roles.remove(`998865822292389899`)
        const rolehta = new MessageEmbed()
        .setDescription(`Successfully removed <@&998865822292389899> Role`)
        .setColor(`DARK_BUT_NOT_BLACK`)
        .setAuthor(`| ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic: true}))
        interaction.followUp({embeds: [rolehta]})
         return
        } else {
         interaction.member.roles.add(`998865822292389899`)
         const rolehta = new MessageEmbed()
         .setDescription(`Successfully added <@&998865822292389899> Role`)
         .setColor(`DARK_BUT_NOT_BLACK`)
         .setAuthor(`| ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic: true}))
         interaction.followUp({embeds: [rolehta]})
        }
    } 
    if(interaction.customId === "big") {
        const guild = client.guilds.cache.get(`998237724949622863`)
        if(guild ===undefined) return console.error(`Guild not found for self role`)
        const user = await guild.members.fetch(interaction.user.id).catch((e) => {
         console.log(e)
         });
         const useri = user.roles.cache.has("998868213595115601")
        if(useri ===true) {
         interaction.member.roles.remove(`998868213595115601`)
        const rolehta = new MessageEmbed()
        .setDescription(`Successfully removed <@&998868213595115601> Role`)
        .setColor(`DARK_BUT_NOT_BLACK`)
        .setAuthor(`| ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic: true}))
        interaction.followUp({embeds: [rolehta]})
         return
        } else {
         interaction.member.roles.add(`998868213595115601`)
         const rolehta = new MessageEmbed()
         .setDescription(`Successfully added <@&998868213595115601> Role`)
         .setColor(`DARK_BUT_NOT_BLACK`)
         .setAuthor(`| ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic: true}))
         interaction.followUp({embeds: [rolehta]})
        }
    } 
    if(interaction.customId === "small") {
        const guild = client.guilds.cache.get(`998237724949622863`)
        if(guild ===undefined) return console.error(`Guild not found for self role`)
        const user = await guild.members.fetch(interaction.user.id).catch((e) => {
         console.log(e)
         });
         const useri = user.roles.cache.has("998868227977400391")
        if(useri ===true) {
         interaction.member.roles.remove(`998868227977400391`)
        const rolehta = new MessageEmbed()
        .setDescription(`Successfully removed <@&998868227977400391> Role`)
        .setColor(`DARK_BUT_NOT_BLACK`)
        .setAuthor(`| ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic: true}))
        interaction.followUp({embeds: [rolehta]})
         return
        } else {
         interaction.member.roles.add(`998868227977400391`)
         const rolehta = new MessageEmbed()
         .setDescription(`Successfully added <@&998868227977400391> Role`)
         .setColor(`DARK_BUT_NOT_BLACK`)
         .setAuthor(`| ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic: true}))
         interaction.followUp({embeds: [rolehta]})
        }
    } 

})