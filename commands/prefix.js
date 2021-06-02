import * as server from '../routes/guilds.js';

function Prefix() {
    this.name = 'prefix';
    this.description = 'gets the current prefix of the bot';
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
            this.execute();
        } catch (err) {
            console.error(err);
            if (err === true) {
                msg.reply(`:octagonal_sign:**Error**: ${this.errMsg}`);
            }
        }
    };

    this.execute = (msg) => {
        msg.reply(`The current prefix is: ${server.getItem('prefix')}`);
    };
}

export { Prefix };
