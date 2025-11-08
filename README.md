# discord-bot-template

A starter template for building Discord bots using **discord.js**. This project provides boilerplate code, essential dependencies, and an optional Docker Compose setup to help you get your bot running quickly and efficiently. Perfect for students to learn, experiment, and build their own bots.

## Getting Started

Follow these steps to set up the bot locally:

### 1. Clone the repository

```bash
git clone https://github.com/halwave/discord-bot-template.git
cd discord-bot-template
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

- Copy the example environment file:

```bash
cp .env.example .env
```

- Open `.env` and add your Discord bot token:

```env
DISCORD_TOKEN=your-bot-token-here
```

> Make sure to replace `your-bot-token-here` with the token from the [Discord Developer Portal](https://discord.com/developers/applications).

### 4. Build the project

Compile the TypeScript code to JavaScript:

```bash
npm run build
```

### 5. Run the bot

#### Development mode (runs TypeScript directly)

```bash
npm run dev
```

#### Production mode (runs compiled JavaScript)

```bash
npm start
```

### 6. Optional: Docker Compose

If you want to run the bot using Docker:

```bash
docker-compose up --build
```

## Linting Your Code

Linting is the process of analyzing your code for potential errors, bad practices, or style inconsistencies. Using a linter helps you:

- Catch mistakes early (like unused variables or incorrect types)
- Maintain consistent code style across your project
- Avoid bad programming practices (like using `any` or `var`)
- Make your code easier to read and maintain

### How to Lint

Run the linter on your project using the provided npm script:

```bash
npm run lint
```

---

## License Notice

This Discord bot template is intended for **educational use** by students of Halwave Labs.

- You may **use and modify** it for learning and personal projects.
- **Non-commercial use only** for anyone outside the tutoring program.
- **Attribution is required** if used by others.

For commercial use, contact: halwave.
