const express = require('express');
const router  = express.Router();
const Book = require('../models/Book.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/books/add', (req, res, next) => {
  res.render('book-add')
});

router.get('/books', (req, res, next) => {
  Book.find()
    .then((results) => {
      res.render('books', { books: results , msg: req.query.msg });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/book/:bookId', (req, res, next) => {
  Book.findOne({ _id: req.params.bookId })
    .then((results) => {
      res.render('book', { book: results });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/books/del/:bookId', (req, res, next) => {
  Book.findByIdAndDelete(req.params.bookId)
    .then(() => {
      res.redirect('/books?msg=Book+Removed');
    })
    .catch((error) => {
      console.log(error);
    });
});


router.get('/books/edit', (req, res, next) => {
  Book.findOne({ _id: req.query.book_id })
    .then((book) => {
      res.render('book-edit', { book });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post('/books/edit', (req, res, next) => {
  Book.findByIdAndUpdate(req.query.book_id, { $set: req.body })
    .then(() => {
      res.redirect('/books');
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post('/books/add', (req, res, next) => {
  const { title, author, description, rating } = req.body;
  const newBook = new Book({ title, author, description, rating });
  newBook.save()
    .then(() => {
      res.redirect('/books');
    })
    .catch((error) => {
      console.log(error);
    });
});


module.exports = router;
