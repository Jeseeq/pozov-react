module.exports = {
  db: {
    uri: process.env.MONGO_URL || 'mongodb://' +
        (process.env.DB_ADDR || 'localhost') + '/pozov',
    options: {
      user: '',
      pass: ''
    }
  }
}
