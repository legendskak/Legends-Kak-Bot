import Discord from 'discord.js';

//files
import { commandList } from '../commands.js';

export default function () {
    this.name = 'help';
    this.description = 'Sends you a list of all of the commands';
    this.role = 'everyone';
    this.prefix = true;
    this.args = [];
    let argsText = '';
    this.args.forEach((arg) => {
        argsText = `${argsText} <${arg}>`;
    });
    this.read = `${this.prefix ? '[prefix]' : ''}${this.name}${argsText}`;

    this.run = (msg) => {
        const embed = new Discord.MessageEmbed()
            .setColor('#FF9A1A')
            .setTitle('List of Commands:');

        for (let i = 0; i < commandList.length; i++) {
            const Command = commandList[i];
            const c = new Command();

            embed.addField('.', `${c.read} @${c.role} - ${c.description}`);
        }

        embed.addField(
            `If you need any additional help you can go to the bot's Github page:`,
            'https://github.com/legendskak/Legends-Bot'
        );

        msg.member.send(embed);
    };
}
