import { join } from 'path';
import { readdirSync } from 'fs';
import { CustomClient } from '../types/CustomClient';

export const loadEvents = (client: CustomClient): void => {
  const eventsPath = join(__dirname, '../events');
  const eventFiles = readdirSync(eventsPath).filter(
    (file) => file.endsWith('.ts') || file.endsWith('.js'),
  );

  for (const file of eventFiles) {
    const filePath = join(eventsPath, file);
    const event = require(filePath);

    if (event.once) {
      client.once(event.name, (...args: any) => event.execute(...args));
      console.log(`[INFO] Loaded event: ${event.name} (once)`);
    } else {
      client.on(event.name, (...args: any) => event.execute(...args));
      console.log(`[INFO] Loaded event: ${event.name}`);
    }
  }
};
