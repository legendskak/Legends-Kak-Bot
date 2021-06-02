import Discord from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

//files
import { Ping, Help } from './commands.js';
import { memeChannelVoting } from './auto.js';

const client = new Discord.Client();

client.on('ready', () => console.log(`Bot connected to ${client.user.tag}`));

client.on('guildCreate', (guild) => {
    console.log(`Guild was created at: ${guild.name}`);
});

client.on('guildDelete', (guild) => {
    console.log(`Guild was deleted from: ${guild.name}`);
});

client.on('message', (msg) => {
    //temporary prefix (we'll change this later)
    const prefix = '!';

    memeChannelVoting(msg);

    if (!msg.content.substr(0, prefix.length) === prefix) return;
    msg.content = msg.content.substr(prefix.length);
    const query = msg.content.split(' ');

    switch (query[0]) {
        case 'help':
            new Help().run(msg);
            break;
        case 'ping':
            new Ping().run(msg);
            break;
    }
});

client.login(process.env.TOKEN);
