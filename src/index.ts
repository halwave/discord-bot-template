import { createClient } from './client';
import { Configuration } from './config';
import { CustomClient } from './types/CustomClient';

async function main() {
  try {
    console.log('Starting bot...');
    const client: CustomClient = createClient();

    client.once('clientReady', () => {
      console.log(`Logged in as ${client?.user?.tag}`);
    });

    console.log('Logging in...');
    await client.login(Configuration.token);
  } catch (error) {
    console.error('Error starting bot:', error);
    process.exit(1);
  }
}

main();
