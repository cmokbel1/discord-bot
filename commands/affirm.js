const { SlashCommandBuilder } = require('@discordjs/builders');
const quoteables = require('../quotes');




module.exports = {
  data: new SlashCommandBuilder()
    .setName('affirm')
    .setDescription('Users can receive a random quote of affirmation'),
  async execute(interaction) {
    let randomQuoteIndex = Math.floor(Math.random() * quoteables.quotes.length)
    await interaction.reply(`${interaction.user.username} - Your affirmation is, "${quoteables.quotes[randomQuoteIndex].quote}" - ${quoteables.quotes[randomQuoteIndex].name}`)
  }
}
