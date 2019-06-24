
const express = require('express');

const router = express.Router();

// User model
const bcrypt = require('bcrypt');
const User = require('../models/user');

// BCrypt to encrypt passwords
const bcryptSalt = 10;


router.get('/signup', (req, res) => {
  res.render('auth/signup');
});


router.post('/signup', (req, res, next) => {
  const { username } = req.body;
  const { password } = req.body;

  if (username === '' || password === '') {
    res.render('auth/signup', {
      errorMessage: 'Indicate a username and a password to sign up',
    });
    return;
  }

  User.findOne({ username })
    .then((user) => {
      if (user !== null) {
        res.render('auth/signup', {
          errorMessage: 'The username already exists!',
        });
        return;
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      User.create({
        username,
        password: hashPass,
      })
        .then(() => {
          res.redirect('/');
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
