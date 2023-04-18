import axios from "axios";

const API_URL = "https://fakestoreapi.com";

const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

const apiService = {
  fetchProducts
};

export default apiService;
