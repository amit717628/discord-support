const { Message, Client, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "test",
    //aliases: [''],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        //
        const emio = new MessageEmbed()
        .setTitle(`Age Role`)
        .setDescription(`<@&998868213595115601> - This describes your role as you are 18+\n<@&998868227977400391> - This describes your role as you are 18-`)
        .setColor(`DARK_BUT_NOT_BLACK`)
        //
        const rowo = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('big')
                .setLabel('18+')
                .setEmoji(`<a:stolen_emoji:998869681135943711>`)
                .setStyle('SUCCESS'),
          
              
                new MessageButton()
                .setCustomId('small')
                .setLabel('18-')
                .setEmoji(`<a:18_:998869718356213821>`)
                .setStyle('SUCCESS'),
        );

    
        message.channel.send({embeds: [emio], components: [rowo]})
        //
        const emi = new MessageEmbed()
        .setTitle(`Gender Role`)
        .setDescription(`<@&998720891879956600> - This describes your role as you are Male\n<@&998720892257452104> - This describes your role as you are Female`)
        .setColor(`DARK_BUT_NOT_BLACK`)
        //
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('male')
                .setLabel('Male')
                .setEmoji(`<a:peachcatsad:998860755401199637>`)
                .setStyle('SUCCESS'),
          
              
                new MessageButton()
                .setCustomId('female')
                .setLabel('Female')
                .setEmoji(`<a:emote:998712735061778432>`)
                .setStyle('SUCCESS'),
        );

    
        message.channel.send({embeds: [emi], components: [row]})

        //#
        const sairendi = new MessageEmbed()
        .setTitle(`Device Role`)
        .setDescription(`<@&998720893859668038> - This describes your role as you are an Ios device user\n<@&998865819482214410> - This describes your role as you are an Android device user\n<@&998865822292389899> - This describes your role as you are a Pc user`)
        .setColor(`DARK_BUT_NOT_BLACK`)
        //
        const rowi = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('ios')
                .setLabel('Ios')
                .setEmoji(`:iphone:998862366143946762> `)
                .setStyle('SUCCESS'),
          
              
                new MessageButton()
                .setCustomId('an')
                .setLabel('Android')
                .setEmoji(`<:android:998862429792514119> `)
                .setStyle('SUCCESS'),
                new MessageButton()
                .setCustomId('pc')
                .setLabel('Pc')
                .setEmoji(`<:windows:998862411589234729> `)
                .setStyle('SUCCESS'),
        );
message.channel.send({embeds: [sairendi], components: [rowi]})


    }}