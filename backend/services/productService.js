import { fetchGoldPrice } from '../utils/utils.js';
import productData from '../data/products.json' with { type: 'json' };

export const calculateProductPrice = async (popularityScore, weight) => {
    const goldPrice = await fetchGoldPrice();
    const price = (popularityScore + 1) * weight * goldPrice;
    return Math.round(price * 100) / 100;
}

export const fetchProducts = () => {
    return productData;
}

export const getAllProducts = async () => {
    const productsWithPrices = await Promise.all(productData.map(async (product) => {
        const price = await calculateProductPrice(product.popularityScore, product.weight);
        return { ...product, price };
    }));
    return productsWithPrices;
}
