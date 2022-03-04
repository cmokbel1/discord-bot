const { SlashCommandBuilder } = require('@discordjs/builders');

const commands = [
  {
    name: "/affirm",
    description: "Users can receive a random quote of affirmation"
  },
  {
    name: "/help",
    description: "See a list of commands"
  }]

let commandList = [];

  commands.forEach(command => {
    command.toString(command.name, command.description)
    commandList.push(command)
  })

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('See a list of commands'),
  async execute(interaction) {
    commandList.toString()
    await interaction.reply(
      `To submit quotes you would like to see added, please visit "https://github.com/cmokbel1/discord-bot" and submit an issues request\n Commands:\n${commandList.command}\n
      `
    )
  }
}
