const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('DataBase connected successfully!'))
  .catch(err => console.error('Failed to connect to the database:', err));

  