const fetch = require('node-fetch');

exports.science = (req, res) => {
  fetch('http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=127cc6b2c12a40cfb76ea3cc63c1edeb')
  .then(res => res.json())
  .then((json) => {
    const url = json.articles[0].url
    fetch(`https://api.meaningcloud.com/summarization-1.0?key=f4be78fe9ca8f65345144ffc9305bce2&url=${url}&sentences=5`, { method: 'POST'})
    .then(res => res.json())
    .then((summary) => {
      return res.send(summary)
    })
  })
};