import express from 'express';
import { getClothes, createClothes, getClothesById } from '../application/clothes.js';

const clothesRouter = express.Router();

clothesRouter.route('/').get(getClothes).post(createClothes);
clothesRouter.route('/:id').get(getClothesById);

export default clothesRouter;