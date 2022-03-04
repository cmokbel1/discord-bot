const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('whereami')
    .setDescription('Returns the server the user is currently active in'),
  async execute(interaction) {
    await interaction.reply(`${interaction.user.username} - You are currently in the '${interaction.member.guild.name}' Server`)
  }
}