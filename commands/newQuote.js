const { SlashCommandBuilder } = require('@discordjs/builders');
const { addQuote } = require('../helpers/addQuote');
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES]})
module.exports = {
  data: new SlashCommandBuilder()
    .setName('newquote')
    .setDescription('add a new quote')
    .setDefaultPermission(false),
  async execute(interaction) {

  }
}
