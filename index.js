const { Client } = require("discord.js");
const { token } = require("./config.json");
const { ClientOptions } = require("./utils/clientOptions.js");


const client = new Client(ClientOptions);
client.login(token);

client.on("ready", () => {
    console.log(`Logged into: ${client.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
    if(!interaction.isCommand()) return;

})