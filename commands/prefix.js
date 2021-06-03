import { client } from '../bot.js';
import * as server from '../routes/guilds.js';

function Prefix() {
    this.name = 'prefix';
    this.description = 'Gets the current prefix of the bot';
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
    this.err = false;
    this.errMsg = '';

    this.run = (msg) => {
        try {
            this.execute(msg);
        } catch (err) {
            console.error(err);
            if (err === true) {
                msg.reply(`:octagonal_sign:**Error**: ${this.errMsg}`);
            }
        }
    };

    this.execute = async (msg) => {
        msg.reply(`The current prefix is: ${await server.getItem('prefix')}`);
    };
}

function SetPrefix() {
    this.name = 'set prefix';
    this.description = 'Changes the current prefix of the bot';
    this.role = 'everyone';
    this.prefixType = 'prefix';
    this.args = ['newPrefix'];
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
    this.err = true;
    this.errMsg = ':octagonal_sign: **Error** Failed to change prefix';

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

    this.execute = async (args) => {
        const { msg } = args;
        server.setItem('prefix', args.query[1]);
        msg.channel.send(
            `:white_check_mark: **Done** Changed the current prefix to \`${await server.getItem(
                'prefix'
            )}\``
        );
    };
}

export { Prefix, SetPrefix };
