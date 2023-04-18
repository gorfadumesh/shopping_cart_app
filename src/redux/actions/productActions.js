import apiService from "../../services/apiService";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchProducts = () => async (dispatch) => {
  try {
    const products = await apiService.fetchProducts();
    dispatch({
      type: FETCH_PRODUCTS,
      payload: products
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
