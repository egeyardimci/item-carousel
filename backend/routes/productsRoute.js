import express from 'express';
import { getFilteredProducts, getProducts } from '../controllers/productController.js';

const router = express.Router();

router.get('', getProducts);
router.post('/filter', getFilteredProducts);

export default router;
