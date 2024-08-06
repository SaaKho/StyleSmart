import axios from 'axios'; // Or your preferred HTTP client

const apiBaseUrl = process.env.REACT_APP_API_URI;


class FavouriteProduct {


  static async addToFavorites(token, formData) {

    try {
      const response = await axios.post(`${apiBaseUrl}/favorite_products/save?token=${token}`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Favorite Product added:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error adding favorite product:', error.message);
      throw error;
    }
  }

  

  static async getAllFavouriteProducts(token) {
    try {
      const response = await axios.get(`${apiBaseUrl}/favorite_products?token=${token}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error; // Re-throw for error handling in components
    }

  }

  static async deleteFavouriteProduct(token, productId) {
    try {
      const response = await axios.delete(`${apiBaseUrl}/favorite_products/${productId}?token=${token}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error; // Re-throw for error handling in components
    }

  }


}

export const favouriteProductSvc = new FavouriteProduct();

export default FavouriteProduct;