const { Intents } = require("discord.js");


module.exports.ClientOptions = {
    restTimeOffset: 0,
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    presence: {
        activities: [{
            name: 'Smooth Beats',
            type: 'LISTENING'
        }], 
        status: 'dnd'
    }
}