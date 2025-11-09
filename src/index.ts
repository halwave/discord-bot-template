import { createClient } from './client';
import { Configuration } from './config';
import { loadEvents } from './handlers/event-handler';
import { CustomClient } from './types/CustomClient';

async function main() {
  try {
    console.log('Starting bot...');
    const client: CustomClient = createClient();

    console.log('Loading commands and events...');
    loadEvents(client);

    console.log('Logging in...');
    await client.login(Configuration.token);
  } catch (error) {
    console.error('Error starting bot:', error);
    process.exit(1);
  }
}

main();
