/* eslint-disable func-names */

import mongoose from 'mongoose';
import values from '../../data/attack.json';
const Schema = mongoose.Schema;

const weaponSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  attack: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});


weaponSchema.statics.getValues = function () {
  return values;
};

module.exports = mongoose.model('Weapon', weaponSchema);
