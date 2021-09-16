const { Client, Intents } = require('discord.js');
const { token, prefix } = require('./config.json');


const client = new Client({
    restTimeOffset: 0,
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ],
    presence: {
        activities: [{
            name: 'Smooth Beats',
            type: 'LISTENING'
        }], 
        status: 'dnd'
    }
});

client.login(token);

client.on('ready', () => {
    console.log(`Logged into: ${client.user.tag}`);
});
