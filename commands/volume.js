const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "ses",
  aliases: ["s"],
  description: "Çalan Müziğin Sesini Ayarlarsınız !",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("Çalınan Hiç Bir Şey Yok !").catch(console.error);
    if (!canModifyQueue(message.member))
      return message.reply("İlk Once Şarkı Kanalına Girmen Gerekiyor!").catch(console.error);

    if (!args[0]) return message.reply(`🔊 The current volume is: **${queue.volume}%**`).catch(console.error);
    if (isNaN(args[0])) return message.reply("Lütfen ses seviyesini ayarlamak için bir sayı kullanın.").catch(console.error);
    if (parseInt(args[0]) > 100 || parseInt(args[0]) < 0)
      return message.reply("0 - 100'e kadar 1 sayı giriniz.").catch(console.error);

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return queue.textChannel.send(`Ayarlanan ses : **${args[0]}%**`).catch(console.error);
  }
};
