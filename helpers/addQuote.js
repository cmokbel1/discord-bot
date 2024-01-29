const quoteables = require('../quotes');


function addQuote(author, quoteString) {
  quoatables.quotes.push({
    name: author,
    quote: quoteString
  })
};

module.exports = addQuote;
