import { fetchProducts } from "../services/productService.js";

export const getProducts = () => {
    return fetchProducts();
} 