const { SlashCommandBuilder } = require('@discordjs/builders');
const quoteables = require('../quotes')




module.exports = {
  data: new SlashCommandBuilder()
    .setName('affirm')
    .setDescription('Generates a Random Quote'),
  async execute(interaction) {
    let randomQuoteIndex = Math.floor(Math.random() * quoteables.length)
    await interaction.reply(`"${quoteables[randomQuoteIndex].quote}" - ${quoteables[randomQuoteIndex].name}`)
  }
}
