import axios from 'axios'; // Or your preferred HTTP client

const apiBaseUrl = process.env.REACT_APP_API_URI;


class UnSaveWardrobe {


  static async UnSaveWardrobe(formData, token) {

    try {
      const response = await axios.post(`${apiBaseUrl}/unsaved_wardrobes/save?token=${token}`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Draft Saved Successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Unable to Save Draft', error.message);
      throw error;
    }
  }


  static async getAllUnSaveWardrobes(token) {
    try {
      const response = await axios.get(`${apiBaseUrl}/unsaved_wardrobes?token=${token}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error; // Re-throw for error handling in components
    }

  }

  static async getUnSaveWardrobeById(token, wardrobeId) {
    try {
      const response = await axios.get(`${apiBaseUrl}/unsaved_wardrobes/${wardrobeId}?token=${token}`);
      return response.data;
    } catch (error) {
      console.error('Error Deleteing Wardrobes:', error);
      throw error; // Re-throw for error handling in components
    }
  }

  static async deleteUnSaveWardrobe(token, wardrobeId) {
    try {
      const response = await axios.delete(`${apiBaseUrl}/unsaved_wardrobes/${wardrobeId}?token=${token}`);
      return response.data;
    } catch (error) {
      console.error('Error Deleteing Wardrobes:', error);
      throw error; // Re-throw for error handling in components
    }

  }

  static async deleteAllUnSaveWardrobe(token) {
    try {
      const response = await axios.delete(`${apiBaseUrl}/unsaved_wardrobes/?token=${token}`);
      return response.data;
    } catch (error) {
      console.error('Error Deleteing Wardrobes:', error);
      throw error; // Re-throw for error handling in components
    }

  }
  static async renameUnSaveWardrobe(wardrobeId, token, newName) {
    try {
      const response = await axios.put(`${apiBaseUrl}/unsaved_wardrobes/${wardrobeId}/name?token=${token}&new_name=${newName}`);
      return response.data;
    } catch (error) {
      console.error('Error Renaming Wardrobes:', error);
      throw error; // Re-throw for error handling in components
    }

  }

}

export const unSaveWardrobeSvc = new UnSaveWardrobe();

export default UnSaveWardrobe;
