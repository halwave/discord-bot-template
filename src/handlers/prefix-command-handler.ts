// src/handlers/prefix-command-handler.ts
import { Message } from 'discord.js';
import { join } from 'path';
import { Configuration } from '../config';
import { existsSync } from 'fs';

export async function prefixCommandHandler(message: Message) {
  if (!message.content.startsWith(Configuration.prefix)) return;

  const args = message.content.slice(Configuration.prefix.length).trim().split(/\s+/);
  const commandName = args.shift()?.toLowerCase();
  if (!commandName) return;

  try {
    const commandPath = join(__dirname, `../commands/${commandName}`);
    const possibleFiles = [`${commandPath}.js`, `${commandPath}.ts`, join(commandPath, 'index.js')];

    const existingFile = possibleFiles.find((f) => existsSync(f));
    if (!existingFile) return; // Command not found

    const command = require(existingFile);
    if (command?.execute) {
      await command.execute(message, args);
    }
  } catch (error) {
    console.error(`Error executing command ${commandName}:`, error);
    await message.reply('There was an error executing that command.');
  }
}
