const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client({
  intents: ["Guilds", "GuildMessages", "MessageContent"],
});
client.on("ready", () => {
  console.log(`Loged in as ${client.user.tag}`);
});

client.on("messageCreate", (msg) => {
  if (!msg.author.bot) {
    if (msg.content.toLocaleLowerCase().includes("google.com")) {
      msg.reply("Your message is not allowed.")
      console.log("DELETE", msg.content, msg.author.username)
      msg.delete();
      return;
    }
    if (msg.content.toLocaleLowerCase() === "hello") {
      msg.reply(`Hello ${msg.author.username}, Have a good day~`);
      return;
    }
    if (msg.content === "สวัสดี") {
      msg.reply(`สวัสดี~ ${msg.author.username}`);
      return;
    }
    if (msg.content.toLocaleLowerCase() === "maria") {
      msg.reply("I am here.");
      return;
    }
    if (msg.content.toLocaleLowerCase() === "what's time") {
      msg.reply(Date());
      return;
    }
    if (msg.content === "こんにちは") {
      msg.reply("こにちは、お疲れさまでした。");
      return;
    }
    if (msg.content.toLocaleLowerCase() === "img") {
      msg.channel.send(
        "はい~" +
          "https://www.jnto.or.th/wp-content/uploads/2020/01/best-hayazaki-sakura-spot-10.jpg"
      );
      return;
    }

    var command = msg.content.split(" ");
    if (command.length > 1 && command[0].toLocaleLowerCase() === "maria") {
      switch (command[1].toLocaleLowerCase()) {
        case "github":
          msg.reply("https://github.com/Arikato111/bot-discord");
          return;
        case "time":
          msg.reply(new Date().toLocaleString("en-US"));
          return;
      }
    }
  }
});

client.login(process.env.token);
