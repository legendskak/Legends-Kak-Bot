import { client } from '../bot.js';

export default function Temp() {
    this.name = 'name';
    this.description = 'description';
    this.role = 'everyone';
    this.prefixType = 'prefix';
    this.args = ['arg1', 'arg2', 'arg3'];
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
    this.errMsg = 'ERROR MESSAGE';

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
        msg.reply('test');
    };
}

console.log(new Temp().read);
