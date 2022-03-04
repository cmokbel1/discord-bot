const { SlashCommandBuilder } = require('@discordjs/builders');

const commands = [
  {
    name: "/affirm",
    description: "Users can receive a random quote of affirmation"
  },
  {
    name: "/help",
    description: "See a list of commands"
  },
  {
    name: "/whereAmI",
    description: "Returns the server the user is currently active in"
  }]



module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('See a list of commands'),
  async execute(interaction) {
    let commandText = ''
    commands.forEach(command => {
      commandText += `${command.name} - ${command.description}\n`

    })
    await interaction.reply(
      `To submit quotes you would like to see added, please visit "https://github.com/cmokbel1/discord-bot" and submit an issues request\n Command List:\n ${commandText}
      `
    )
  }
}
