import express from 'express';
import process from 'process';
import { getAllProducts } from './services/productService.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  res.send(await getAllProducts());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
