module.exports = {
  db: {
    uri: process.env.MONGO_URL || 'mongodb://' +
        (process.env.DB_ADDR || 'localhost') + '/pozov',
    options: {
      user: '',
      pass: ''
    }
  },
  uploads: {
    profileUpload: {
      dest: './server/uploads/avatar/', // Profile upload destination path
      limits: {
        fileSize: 1 * 1024 * 1024 // Max file size in bytes (1 MB)
      }
    },
    path: '/uploads/avatar/'
  }
}
