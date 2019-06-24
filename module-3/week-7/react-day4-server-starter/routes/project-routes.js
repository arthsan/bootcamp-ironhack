const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Project = require('../models/project-model');
const Task = require('../models/task-model'); // <== !!!

router.post('/projects', (req, res, next) => {
  Project.create({
    title: req.body.title,
    description: req.body.description,
    tasks: [],
    owner: req.user._id,
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post('/projects', (req, res, next) => {
  Project.create({
    title: req.body.title,
    description: req.body.description,
    tasks: [],
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get('/projects', (req, res, next) => {
  Project.find().populate('tasks')
    .then((allTheProjects) => {
      res.json(allTheProjects);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get('/projects/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  Project.findById(req.params.id).populate('tasks')
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});


// PUT route => to update a specific project
router.put('/projects/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Project.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: `Project with ${req.params.id} is updated successfully.` });
    })
    .catch((err) => {
      res.json(err);
    });
});


// DELETE route => to delete a specific project
router.delete('/projects/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Project.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ message: `Project with ${req.params.id} is removed successfully.` });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
