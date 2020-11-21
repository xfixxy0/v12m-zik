const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "devam",
  aliases: ["d"],
  description: "Duran Müziği Devam Ettirir !",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("Hiç Bişey Oynatılmıyor.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!queue.playing) {
      queue.playing = true;
      queue.connection.dispatcher.resume();
      return queue.textChannel.send(`${message.author} ▶ müziği devam ettirdi`).catch(console.error);
    }

    return message.reply("Çalan Şey Devam Ettirilmez").catch(console.error);
  }
};
