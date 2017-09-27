const rp = require('request-promise');

const getSampleData = (req, res, next) => {
  rp
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => res.json(data));
}

module.exports = {
  getSampleData
}
