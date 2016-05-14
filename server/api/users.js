var express = require('express')
var path = require('path')
var crypto = require('crypto')
var router = express.Router()
var bcrypt = require('bcrypt')
var utils = require('../utils/index')
var config = require('../config')
var User = require('../models/User')
var _ = require('lodash')

/*
  Config file upload
*/
var multer = require('multer')
var storage = multer.diskStorage({
  destination: './server/uploads/avatar/',
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err)

      cb(null, raw.toString('hex') + path.extname(file.originalname))
    })
  }
})
var upload = multer({ storage: storage })

upload.fileFilter = function (req, file, cb) {
  if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg' &&
      file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/gif') {
    cb(null, false)
  } else {
    cb(null, true)
  }
}
function isUserUnique (reqBody, cb) {
  var username = reqBody.username ? reqBody.username.trim() : ''
  var email = reqBody.email ? reqBody.email.trim() : ''

  User.findOne({
    $or: [{
      'username': new RegExp(['^', username, '$'].join(''), 'i')
    }, {
      'email': new RegExp(['^', email, '$'].join(''), 'i')
    }]
  }, function (err, user) {
    if (err) throw err

    if (!user) {
      cb()
      return
    }

    var err
    if (user.username === username) {
      err = {}
      err.username = 'імя ' + username + ' вже існує'
    }
    if (user.email === email) {
      err = err ? err : {}
      err.email = 'email ' + email + ' вже існує'
    }
    cb(err)
  })
}

router.get('/users/?', function (req, res) {
  User.find({})
  .select({
    password: 0,
    __v: 0,
    updatedAt: 0,
    createdAt: 0
  })
  .limit(100)
  .sort({
    createdAt: -1
  })
  .exec(function (err, users) {
    if (err) {
      return res.status(500).json({
        error: 'Could not retrive users'
      })
    }
    res.json(users)
  })
})
/*
  Update user profile
*/
router.put('/users', (req, res) => {
  if (!req.user) {
    return res.status(401).send('Ввійдіть або зареєструйтесь')
  }
  var user = req.user
  User.findOne({
    _id: user._id
  }).exec(function (err, user) {
    if (err) {
      return res.status(500).send('Виникла помилка при виконанні запиту')
    }
    if (!user) {
      return res.status(404).send('Користувач не знайдений')
    }
    // Modify user
    user = _.extend(user, req.body)
    user.save(function (err, user) {
      if (err) {
        return res.status(400).send('Виникла помилка при збереженні')
      } else {
        var token = utils.generateToken(user)
        user = utils.getCleanUser(user)
        res.cookie('auth_token', token, {
          maxAge: 60 * 60 * 24 * 7 * 1000,    // 7d
          path: '/',
          httpOnly: true
        }).json(user)
      }
    })
  })
})
/*
  Update user avatar
*/
router.post('/users/picture', upload.single('avatar'), function (req, res) {
  // Filtering to upload only images
  if (req.user) {
    var user = req.user
    User.findOne({
      _id: user._id
    }).exec(function (err, user) {
      if (err) {
        return res.status(500).send('Виникла помилка при виконанні запиту')
      }
      if (!user) {
        return res.status(404).send('Користувач не знайдений')
      }
      user.avatar = config.uploads.path + req.file.filename
      user.save(function (err, user) {
        if (err) {
          return res.status(400).send('Виникла помилка при збереженні')
        } else {
          var token = utils.generateToken(user)
          user = utils.getCleanUser(user)
          res.cookie('auth_token', token, {
            maxAge: 60 * 60 * 24 * 7 * 1000,    // 7d
            path: '/',
            httpOnly: true
          }).json(user)
        }
      })
    })
  } else {
    return res.status(401).send('Ввійдіть або зареєструйтесь')
  }
})

router.post('/users/signup', function (req, res) {
  var body = req.body

  isUserUnique(body, function (err) {
    if (err) {
      return res.status(403).json(err)
    }

    var hash = bcrypt.hashSync(body.password.trim(), 10)

    var user = new User({
      name: body.name.trim(),
      username: body.username.trim(),
      email: body.email.trim(),
      password: hash,
      admin: false
    })

    user.save(function (err, user) {
      if (err) throw err

      var token = utils.generateToken(user)
      user = utils.getCleanUser(user)

      res.cookie('auth_token', token, {
        maxAge: 60 * 60 * 24 * 7 * 1000,    // 7d
        path: '/',
        httpOnly: true

      }).json(user)
    })
  })
})

router.post('/users/signin', function (req, res) {
  User.findOne({
    username: req.body.username
  })
  .select({
    __v: 0,
    updatedAt: 0,
    createdAt: 0
  })
  .exec(function (err, user) {
    if (err) throw err

    if (!user) {
      return res.status(404).json({
        _error: 'Login failed',
        username: 'Невірне імя користувача'
      })
    }
    bcrypt.compare(req.body.password, user.password, function (err, valid) {
      if (!valid) {
        return res.status(404).json({
          _error: 'Login failed',
          password: 'Невірний пароль'
        })
      }
      var token = utils.generateToken(user)
      user = utils.getCleanUser(user)

      res.cookie('auth_token', token, {
        maxAge: 60 * 60 * 24 * 7 * 1000, // 7d
        path: '/',
        httpOnly: true
      }).json(user)
    })
  })
})

router.post('/users/validate/fields', function (req, res) {
  var body = req.body
  isUserUnique(body, function (err) {
    if (err) {
      return res.status(403).json(err)
    }
    res.json('good')
  })
})

router.post('/users/logout', function (req, res) {
  if (req.user) {
    res.cookie('auth_token', false, {
      maxAge: 1,
      path: '/'
    })
    res.send('You have successfully logged out')
  } else {
    res.status(400).send('There is no active session')
  }
})

router.get('/users/get/user/from/cookie', function (req, res) {
  // check for user wich come from moddleware
  if (req.user) {
    return res.json(req.user)
  }
  res.json({
    message: 'You better login =)'
  })
})

module.exports = router
