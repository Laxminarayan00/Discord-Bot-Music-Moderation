const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'invite',
    aliases: ['inv'],
    description: '',
    usage: '',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {

        message.channel.send(
            new MessageEmbed()
                .setColor('BLUE')
                .setAuthor(message.author.tag)
                .setTitle("Invite & Support Link!")
                .addField("**Invite Link**", `[Click here to invite me](https://discord.com/api/oauth2/authorize?client_id=881006200626495528&permissions=8&scope=bot%20applications.commands)`)
                .addField("**Support Server**", `[Click to join support Server](https://discord.gg/aedr5e7JyS)`)
                .setFooter(`Requested by ${message.author.tag}`, client.user.displayAvatarURL())
                .setTimestamp()


        )

    }
}