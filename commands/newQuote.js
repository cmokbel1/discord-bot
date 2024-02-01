const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('node:fs');
const { config } = require('../config.json');

async function addQuote(author, quoteString) {
  fs.readFile('quotes.json', function (err, data) {
    var json = JSON.parse(data)
    json.quotes.push({
      "name": `${author}`,
      "quote": `${quoteString}`
    })
    fs.writeFile('quotes.json', JSON.stringify(json), (err) => { if (err) console.log(err) });
})

};

module.exports = {
  data: new SlashCommandBuilder()
    .setName('newquote')
    .setDescription('add a new quote')
    .setDefaultPermission(false)
    .addStringOption(option => { return option.setName('author').setDescription(`Enter an author's name`).setRequired(true)})
    .addStringOption(option => { return option.setName('quote').setDescription(`Enter quote by author`).setRequired(true)})
    ,
  async execute(interaction) {
    if (interaction.member.guild.id !== config.user.guildId || interaction.user.id !== config.user.userId) return interaction.reply(`This command belongs to the owner`);
    const author = interaction.options.getString('author');
    const quote = interaction.options.getString('quote');
    try {
      await addQuote(author, quote);
      return interaction.reply(`${author} - "${quote}", has been successfully added to the list`);
    } 
    catch (error) {
      return interaction.reply("error: " + error);
    }
  } 
}
