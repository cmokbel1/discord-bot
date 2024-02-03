const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require('./config.json');
const fs = require('node:fs');

const adminCommands = [];
const adminCommandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js') && file !== "newQuote.js");

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}
for (const file of adminCommandFiles) {
  const command = require(`./commands/${file}`);
  adminCommands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(config.token.token);

rest.put(Routes.applicationGuildCommands(config.token.clientId, config.user.guildId), { body: adminCommands })
  .then(() => console.log('commands deployed to admin guild'))
    .catch(console.error);

rest.put(Routes.applicationCommands(config.token.clientId), { body: commands })
  .then(() => console.log('commands deployed to all other guilds'))
    .catch(console.error);

