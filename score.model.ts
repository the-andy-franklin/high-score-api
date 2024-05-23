import { Schema, model } from 'mongoose';

const scoreSchema = new Schema({
  username: { type: String, required: true, unique: true },
  score: { type: Number, required: true },
}, {
  _id: false,
  versionKey: false,
});

export const Score = model('Score', scoreSchema);