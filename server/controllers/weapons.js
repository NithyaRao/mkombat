/* eslint-disable new-cap, no-underscore-dangle */

import express from 'express';
import Weapon from '../models/weapon';

const router = module.exports = express.Router();



router.get('/attack', (req, res) => {
  const values = Weapon.getValues();
  console.log('val', values);
  res.send({ values });
});

router.post('/', (req, res) => {
  const weapon = new Weapon(req.body);
  weapon.save(() => {
    res.send({ weapon });
  });
});

router.get('/all', (req, res) => {
  console.log('Inside route get ');
  Weapon.find().exec((err, weapons) => res.send({ weapons }));
});
