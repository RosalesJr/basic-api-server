'use strict';

const express = require('express');
const router = express.Router();
const { ClothesModel } = require('../models');

router.get('/clothes', async (req, res) => {
  const clothes = await ClothesModel.findAll();
  res.status(200).json(clothes);
});

router.get('/clothes/:id', async (req, res) => {
  const clothes = await ClothesModel.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(clothes);
});

router.post('/clothes', async (req, res) => {
  console.log('Request Body:', req.body);

  const newCat = await ClothesModel.create(req.body);
  res.status(201).send(newCat);
});

router.put('/clothes/:id', async (req, res) => {
  const update = await ClothesModel.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send(`${update} updated successfully.`);
});

router.delete('/clothes/:id', async (req, res) => {
  const deleted = await ClothesModel.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send(`${deleted} deleted successfully.`);
});

module.exports = router;
