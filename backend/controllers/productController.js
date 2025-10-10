import { getFilteredProductsService, getAllProducts } from "../services/productService.js";

export const getProducts = async (req, res) => {
    try {
        const products = await getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ 
            message: 'Error fetching products',
            error: error.message 
        });
    }
}

export const getFilteredProducts = async (req, res) => {
    try {
        const filters = req.body;
        const filteredProducts = await getFilteredProductsService(filters);
        res.status(200).json(filteredProducts);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching filtered products',
            error: error.message
        });
    }
}
