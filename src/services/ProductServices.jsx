import axios from "axios";

const API_URL = "https://ekart-product-service.onrender.com/api/products";
const ProductService = {
  searchProducts(term) {
    return axios
      .get(`${API_URL}/search`, { params: { term } })
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error searching products:", error);
        throw error;
      });
  },
};
export default ProductService;
