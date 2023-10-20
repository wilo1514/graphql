const mongoose = require('mongoose');

module.exports = (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbname: 'graphql',
  })
    .then(() => console.log('[db] - Conexión exitosa.'))
    .catch((error) => console.error(`[db] - ${error}`));
};