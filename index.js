const { Client } = require("discord.js");
const { token } = require("./config/config.json");
const { ClientOptions } = require("./config/options.js");


const client = new Client(ClientOptions);
client.login(token);

client.on("ready", () => {
    console.log(`Logged into: ${client.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
    if(!interaction.isCommand()) return;

})