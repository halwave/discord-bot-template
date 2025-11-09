import { Events, Message } from 'discord.js';
import { CustomClient } from '../types/CustomClient';
import { prefixCommandHandler } from '../handlers/prefix-command-handler';

export const name = Events.MessageCreate;
export const once = false;

export async function execute(message: Message) {
  if (message.author.bot || !message.guild) return;

  await prefixCommandHandler(message as Message & { client: CustomClient });
}
