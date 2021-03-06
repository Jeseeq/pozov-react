var jwt = require('jsonwebtoken')

function generateToken (user) {
  var token
  var u = {
    email: user.email,
    username: user.username,
    name: user.name,
    admin: user.admin,
    _id: user._id.toString(),
    avatar: user.avatar
  }

  token = jwt.sign(u, process.env.JWT_SECRET, {
    expiresIn: '7d'
  })
  return token
}

function getCleanUser (user) {
  var u = user.toJSON()
  return {
    _id: u._id,
    username: u.username,
    name: u.name,
    avatar: u.avatar,
    email: u.email,
    admin: u.admin,
    createdAt: u.createdAt,
    updatedAt: u.updatedAt
  }
}

module.exports = {
  getCleanUser: getCleanUser,
  generateToken: generateToken
}
