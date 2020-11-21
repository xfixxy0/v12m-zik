const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "döngü",
  aliases: ['d'],
  description: "Müzik döngüsünü aç / kapat",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("Çalan Şarkı Yok !").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
    return queue.textChannel
      .send(`Döngü ${queue.loop ? "**açık**" : "**kapalı**"}`)
      .catch(console.error);
  }
};
