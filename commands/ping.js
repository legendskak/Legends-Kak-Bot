export default function () {
    this.name = 'ping';
    this.description = 'Pings the bot and waits for a response';
    this.role = 'everyone';
    this.prefix = true;
    this.args = [];
    let argsText = '';
    this.args.forEach((arg) => {
        argsText = `${argsText} <${arg}>`;
    });
    this.read = `${this.prefix ? '[prefix]' : ''}${this.name}${argsText}`;

    this.run = (msg) => {
        msg.reply('pong!');
    };
}
