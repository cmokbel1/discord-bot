//  require discord.js and token
const { Client, Collection, Intents } = require('discord.js');
const config = require('./config.json');
// file system directory
const fs = require('node:fs');

//Create new client
const newClient = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

newClient.commands = new Collection();
//read through command files
const commandFiles = fs.readdirSync('./commands').filter(file => {
  return file.endsWith('.js');
});

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  // Set a new item in the Collection
  // With the key as the command name and the value as the exported module
  newClient.commands.set(command.data.name, command);
}

//Run once when client is ready
newClient.once('ready', () => {
  console.log('Ready or not here i come!');
});

//client interaction
newClient.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) { 
   return;
  }
  const command = newClient.commands.get(interaction.commandName)

  if (!command) {
     return;
  } 

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error('error' + error);
    await interaction.reply({ content: "This bot ain't that powerful", ephemeral: true });
  }
})
// login with token
newClient.login(config.token.token);
