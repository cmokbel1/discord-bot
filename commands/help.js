const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('help')
  .setDescription('Command help'),
  async execute(interaction) {
    await interaction.reply(
      `To submit quotes you would like to see added, please visit "https://github.com/cmokbel1/discord-bot" and submit an issues request\n Commands:\n  /affirm - Prints random quote from quotes array\n  /help - Displays this message again`
      )
  }
}
