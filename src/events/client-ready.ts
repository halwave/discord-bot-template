import { Events } from 'discord.js';
import { CustomClient } from '../types/CustomClient';

export const name = Events.ClientReady;
export const once = true;

export async function execute(client: CustomClient) {
  console.log(`Logged in as ${client?.user?.tag}`);
}
