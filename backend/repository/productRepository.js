import productData from '../data/products.json' with { type: 'json' };

export const fetchProducts = () => {
    return productData;
}