import express from 'express';
import cors from 'cors';
import process from 'process';
import { getAllProducts } from './services/productService.js';

const app = express();

const allowedOrigins = [
  'https://renart-frontend-five.vercel.app',
  'http://localhost:5173',  // for local development
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, Postman, or server-to-server)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

const PORT = process.env.PORT || 3000;

app.get('/products', async (req, res) => {
  res.send(await getAllProducts());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
