import { Message } from 'discord.js';

export const name = 'hello';
export const description = 'Replies with hello world!';

export async function execute(message: Message) {
  await message.reply('Hello world!');
}
