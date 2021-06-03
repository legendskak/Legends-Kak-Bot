//prefix
import Ping from './commands/ping.js';
import Help from './commands/help.js';
import { SetPrefix } from './commands/prefix.js';

//mention
import { Prefix } from './commands/prefix.js';

const commandList = [Ping, Help, Prefix, SetPrefix];

export { commandList, Ping, Help, Prefix, SetPrefix };
