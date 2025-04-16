import axios from "axios";

const API_URL = "https://ekart-product-service.onrender.com/api/products";
const ProductService = {
  async searchProducts(term) {
    return axios
      .get(`${API_URL}/search`, { params: { term } })
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error searching products:", error);
        throw error;
      });
  },
  async searchProduct(term) {
    try {
      const response = await axios
        .get(`${API_URL}/productsearch`, { params: { term } });
      return response.data;
    } catch (error) {
      console.error("Error searching products:", error);
      throw error;
    }
  },
};
export default ProductService;
