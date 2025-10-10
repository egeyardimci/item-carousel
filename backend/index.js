import express from 'express';
import cors from 'cors';
import process from 'process';
import { getAllProducts } from './services/productService.js';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/products', async (req, res) => {
  res.send(await getAllProducts());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
