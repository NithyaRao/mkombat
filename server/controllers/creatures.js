/* eslint-disable new-cap, no-underscore-dangle */

import express from 'express';
import Creature from '../models/creature';

const router = module.exports = express.Router();


router.get('/', (req, res) => {
  Creature.find().exec((err, creatures) => res.send({ creatures }));
});

router.post('/', (req, res) => {
  const creature = new Creature(req.body);
  creature.save(() => {
    res.send({ creature });
  });
});
