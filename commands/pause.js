const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "duraklat",
  description: "Çalan Müziği Duraklatırsın ",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("Oynayan hiçbir şey yok.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (queue.playing) {
      queue.playing = false;
      queue.connection.dispatcher.pause(true);
      return queue.textChannel.send(`${message.author} ⏸ Müziği Durdurdu`).catch(console.error);
    }
  }
};
