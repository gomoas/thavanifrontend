import axios from "axios";
import { adminCookie, origin } from "./config";
import Cookies from 'js-cookie'

// Create a new product
export const postProductData = async (data: any) => {
    const token = Cookies.get(adminCookie);
    try {
        const response = await axios.post(`${origin}/api/v1/admin/create-product`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (err: any) {
        console.error(`Error creating product: ${err.message}`);
        throw err;
    }
};

// Fetch all products
export const fetchProducts = async () => {
    const token = Cookies.get(adminCookie);
    try {
        console.log("called");
        const response = await axios.get(`${origin}/api/v1/product/products`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (err: any) {
        console.error("Error fetching products:", err.message);
        throw err;
    }
};

// Fetch products with pagination
export const fetchProductsPagination = async (page: number, limit: number, search: string) => {
    const token = Cookies.get(adminCookie);
    try {
        const response = await axios.get(
            `${origin}/api/v1/product/products/pagination?page=${page}&limit=${limit}&search=${search}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (err: any) {
        console.error("Error fetching paginated products:", err.message);
        throw err;
    }
};

// Fetch product by ID
export const fetchProductById = async (productId: string) => {
    const token = Cookies.get(adminCookie);
    try {
        const response = await axios.get(`${origin}/api/v1/product/product/${productId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (err: any) {
        console.error(`Error fetching product by ID: ${err.message}`);
        throw err;
    }
};


export const fetchProductByCategoryId = async (categoryId: string) => {
    const token = Cookies.get(adminCookie);
    try {
        const response = await axios.get(`${origin}/api/v1/product/products/${categoryId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (err: any) {
        console.error(`Error fetching product by ID: ${err.message}`);
        throw err;
    }
};

// Edit product details
export const editProductData = async (productId: string, data: any) => {
    const token = Cookies.get(adminCookie);
    try {
        const response = await axios.put(`${origin}/api/v1/product/product/${productId}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (err: any) {
        console.error(`Error editing product: ${err.message}`);
        throw err;
    }
};

// Delete a product
export const deleteProductData = async (productId: string) => {
    const token = Cookies.get(adminCookie);
    try {
        const response = await axios.delete(`${origin}/api/v1/product/product/${productId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (err: any) {
        console.error(`Error deleting product: ${err.message}`);
        throw err;
    }
};

// Update product availability (stock status)
export const updateProductAvailability = async (productId: string, data: any) => {
    const token = Cookies.get(adminCookie);
    try {
        const response = await axios.put(
            `${origin}/api/v1/product/product/${productId}/availability`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (err: any) {
        console.error(`Error updating product availability: ${err.message}`);
        throw err;
    }
};
