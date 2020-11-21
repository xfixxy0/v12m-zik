const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "atla",
  aliases: ["a"],
  description: "Seçilen Numaradaki Şarkıya Atlar ! ",
  execute(message, args) {
    if (!args.length) return message.reply(`Kullanım: ${message.client.prefix}${module.exports.name} <Sıra Numarası>`);

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("Sıra Yok .").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.playing = true;
    queue.songs = queue.songs.slice(args[0] - 2);
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭  ${args[0] - 1} .Sıradaki Şarkıya Atladı! `).catch(console.error);
  }
};
