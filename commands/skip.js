const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "geç",
  aliases: ["g"],
  description: "Şarkıyı Geçersiniz ! ",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue)
      return message.reply("Geçilecek Şarkı Yok ! ").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.playing = true;
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ Şarkı Geçildi ! `).catch(console.error);
  }
};
