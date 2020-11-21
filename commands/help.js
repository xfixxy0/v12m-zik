const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "yardım",
  aliases: ["y"],
  description: "Tüm komutları ve açıklamaları görüntüle",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle("AlFA Müzik Bot")
      .setDescription("Tüm komutların listesi !")
      .setColor("#F8AA2A");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
