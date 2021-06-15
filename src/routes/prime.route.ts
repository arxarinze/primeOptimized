import express from 'express';
import PrimeController from '../controllers/prime.controller';
import { requireJsonContent, requireNumberGreaterThanOne } from '../middleware/validate.middleware';

var router = express.Router();

//middle ware to detect json and if input is valid
router.post(`/`,requireJsonContent(), requireNumberGreaterThanOne(), PrimeController.getLargestNumberLessThanInput);

export default router