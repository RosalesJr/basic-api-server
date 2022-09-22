'use strict';

const express = require('express');
const router = express.Router();
const { CatsModel } = require('../models');

router.get('/cats', async (req, res) => {
  const cats = await CatsModel.findAll();
  res.status(200).json(cats);
});

router.get('/cats/:id', async (req, res) => {
  const cats = await CatsModel.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(cats);
});

router.post('/cats', async (req, res) => {
  console.log('Request Body:', req.body);

  const newCat = await CatsModel.create(req.body);
  res.status(201).send(newCat);
});

router.put('/cats/:id', async (req, res) => {
  const update = await CatsModel.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send(`${update} updated successfully.`);
});

router.delete('/cats/:id', async (req, res) => {
  const deleted = await CatsModel.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send(`${deleted} deleted successfully.`);
});

module.exports = router;
