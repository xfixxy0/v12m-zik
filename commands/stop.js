const { canModifyQueue } = require("../util/EvobotUtil");


module.exports = {
  name: "durdur",
  description: "Müziği Durdurur ! ",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    
    if (!queue) return message.reply("Çalan Müzil Yok ! ").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏹ Müziği Durdurdu !`).catch(console.error);
  }
};
