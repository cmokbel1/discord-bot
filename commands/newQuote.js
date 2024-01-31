const { SlashCommandBuilder } = require('@discordjs/builders');
const quoteables = require('../quotes');

async function addQuote(author, quoteString) {
  await quoteables.push({
    name: author,
    quote: quoteString
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
    if (interaction.member.guild.id !== '559450856878243840' || interaction.user.id !== '194641374136500226') return interaction.reply(`This command belongs to the owner`);
    const author = interaction.options.getString('author');
    const quote = interaction.options.getString('quote');
    try {
      await addQuote(author, quote);
      return interaction.reply(`Quote successfully added to the list`);
    } 
    catch (error) {
      return interaction.reply("error: " + error);
    }
  } 
}
