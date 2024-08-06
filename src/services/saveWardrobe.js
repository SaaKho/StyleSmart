import axios from 'axios'; // Or your preferred HTTP client

const apiBaseUrl = process.env.REACT_APP_API_URI;


class SaveWardrobe {

  static async saveWardrobe(token, formData) {

    try {
      const response = await axios.post(`${apiBaseUrl}/saved_wardrobes/save?token=${token}`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Wardrobe Saved Successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Unable to Save Wardrobe', error.message);
      throw error;
    }
  }


  static async getAllSaveWardrobes(token) {
    try {
      const response = await axios.get(`${apiBaseUrl}/saved_wardrobes?token=${token}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error; // Re-throw for error handling in components
    }

  }

  static async getSaveWardrobeById(token, wardrobeId) {
    try {
      const response = await axios.get(`${apiBaseUrl}/saved_wardrobes/${wardrobeId}?token=${token}`);
      return response.data;
    } catch (error) {
      console.error('Error Deleteing Wardrobes:', error);
      throw error; // Re-throw for error handling in components
    }

  }

  static async deleteSaveWardrobe(token, wardrobeId) {
    try {
      const response = await axios.delete(`${apiBaseUrl}/saved_wardrobes/${wardrobeId}?token=${token}`);
      return response.data;
    } catch (error) {
      console.error('Error Deleteing Wardrobes:', error);
      throw error; // Re-throw for error handling in components
    }

  }

  static async deleteAllSaveWardrobe(token) {
    try {
      const response = await axios.delete(`${apiBaseUrl}/saved_wardrobes/?token=${token}`);
      return response.data;
    } catch (error) {
      console.error('Error Deleteing Wardrobes:', error);
      throw error; // Re-throw for error handling in components
    }
  }

  static async renameWardrobe(wardrobeId, token, newName) {
    try {
      const response = await axios.put(`${apiBaseUrl}/saved_wardrobes/${wardrobeId}/name?token=${token}&new_name=${newName}`);
      return response.data;
    } catch (error) {
      console.error('Error Renaming Wardrobes:', error);
      throw error; // Re-throw for error handling in components
    }
  }
}

export const saveWardrobeSvc = new SaveWardrobe();
export default SaveWardrobe;

