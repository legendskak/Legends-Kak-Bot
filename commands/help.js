import Discord from 'discord.js';

//files
import { commandList } from '../commands.js';

export default function () {
    this.name = 'help';
    this.description = 'Sends you a list of all of the commands';
    this.role = 'everyone';
    this.prefix = 'prefix';
    this.args = [];
    let argsText = '';
    this.args.forEach((arg) => {
        argsText = `${argsText} <${arg}>`;
    });
    let prefixText;
    if (this.prefixType === 'prefix') {
        prefixText = '[prefix]';
    } else if (this.prefixType === 'mention') {
        prefixText = `<@!${client.user.id}> `;
    } else {
        prefixText = '';
    }
    this.read = `${prefixText}${this.name}${argsText}`;

    this.run = (msg) => {
        try {
            this.execute();
        } catch (err) {
            console.error(err);
            if (err === true) {
                msg.reply(`:octagonal_sign:**Error**: ${this.errMsg}`);
            }
        }
    };

    this.execute = (msg) => {
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
