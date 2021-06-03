import { client } from '../bot.js';

export default function () {
    this.name = 'ping';
    this.description = 'Pings the bot and waits for a response';
    this.role = 'everyone';
    this.prefixType = 'prefix';
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

    this.run = (args) => {
        const { msg } = args;
        try {
            this.execute(args);
        } catch (err) {
            console.error(err);
            if (err === true) {
                msg.reply(`:octagonal_sign:**Error**: ${this.errMsg}`);
            }
        }
    };

    this.execute = (args) => {
        const { msg } = args;
        msg.reply('pong!');
    };
}
