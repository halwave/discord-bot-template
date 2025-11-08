import { Client, Collection, Events, InteractionReplyOptions, MessageFlags } from 'discord.js';
import { CustomClient } from '../types/CustomClient';
import { Configuration } from '../config';

export const createClient = (): CustomClient => {
  const client = new Client({
    intents: Configuration.intents,
  }) as CustomClient;

  client.commands = new Collection();

  client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = (interaction.client as CustomClient).commands.get(interaction.commandName);

    if (!command) {
      console.error(`No command matching ${interaction.commandName} was found.`);
      return;
    }

    try {
      await command.execute(interaction, client);
    } catch (error) {
      console.error(error);

      const replyOptions: InteractionReplyOptions = {
        content: 'There was an error while executing this command!',
        flags: MessageFlags.Ephemeral,
      };

      if (interaction.replied || interaction.deferred) {
        await interaction.followUp(replyOptions);
      } else {
        await interaction.reply(replyOptions);
      }
    }
  });

  return client;
};
