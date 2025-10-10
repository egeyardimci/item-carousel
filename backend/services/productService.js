import { fetchGoldPrice } from '../utils/utils.js';
import { fetchProducts } from '../repository/productRepository.js';

export const calculateProductPrice = async (popularityScore, weight) => {
    try {
        const goldPrice = await fetchGoldPrice();
        const price = (popularityScore + 1) * weight * goldPrice;
        return Math.round(price * 100) / 100;
    } catch (error) {
        throw new Error('Error calculating product price: ' + error.message);
    }
}

export const getAllProducts = async () => {
    const productData = fetchProducts();
    const productsWithPrices = await Promise.all(productData.map(async (product) => {
        const price = await calculateProductPrice(product.popularityScore, product.weight);
        return { ...product, price };
    }));
    return productsWithPrices;
}

export const getFilteredProductsService = async (filters) => {
    const { minPrice, maxPrice, minPopularity, maxPopularity } = filters;
    const allProducts = await getAllProducts();
    return allProducts.filter(product => {
        return (
            product.price >= minPrice &&
            product.price <= maxPrice &&
            product.popularityScore >= minPopularity &&
            product.popularityScore <= maxPopularity
        );
    });
}
