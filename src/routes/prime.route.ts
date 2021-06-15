import express from 'express';
import PrimeController from '../controllers/prime.controller';

var router = express.Router();

router.post(`/`, PrimeController.getLargestNumberLessThanInput);

export default router