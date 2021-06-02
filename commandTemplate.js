export default function Temp() {
    this.name = 'name';
    this.description = 'description';
    this.role = 'everyone';
    this.prefix = true;
    this.args = ['arg1', 'arg2', 'arg3'];
    let argsText = '';
    this.args.forEach((arg) => {
        argsText = `${argsText} <${arg}>`;
    });
    this.read = `${this.prefix ? '[prefix]' : ''}${this.name}${argsText}`;

    this.run = (msg) => {
        msg.reply('response');
    };
}

console.log(new Temp().read);
