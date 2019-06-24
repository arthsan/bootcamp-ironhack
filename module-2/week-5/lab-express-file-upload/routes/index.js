const express = require('express');
const Picture = require('../models/Picture.js');
const uploadCloud = require('../config/cloudinary.js');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  Picture.find((err, pictures) => {
    res.render('index', {pictures});
  });
});

router.get('/map', (req, res, next) => {
  res.render('map');
  });


// const upload = multer({ dest: './public/uploads/' });

router.post('/upload', uploadCloud.single('photo'), (req, res, next) => {
  const imgPath = req.file.url;
  const imgName = req.file.originalname;

  const pic = new Picture({
    name: req.body.name,
    path: imgPath,
    originalName: imgName,
  });

  pic.save((err) => {
    res.redirect('/');
  });
});

module.exports = router;
