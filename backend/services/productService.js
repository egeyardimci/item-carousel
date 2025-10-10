import { fetchGoldPrice } from '../utils/utils.js';
import { fetchProducts } from '../repository/productRepository.js';

export const calculateProductPrice = async (popularityScore, weight) => {
    const goldPrice = await fetchGoldPrice();
    const price = (popularityScore + 1) * weight * goldPrice;
    return Math.round(price * 100) / 100;
}

export const getAllProducts = async () => {
    const productData = fetchProducts();
    const productsWithPrices = await Promise.all(productData.map(async (product) => {
        const price = await calculateProductPrice(product.popularityScore, product.weight);
        return { ...product, price };
    }));
    return productsWithPrices;
}
