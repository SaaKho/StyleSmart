import axios from 'axios'; // Or your preferred HTTP client

const apiBaseUrl = process.env.REACT_APP_API_URI;


class Auth {

    
  static async authenticateUseridToken(idToken) {
    try {
        const response = await axios.get(`${apiBaseUrl}/auth/user?id_token=${idToken}`);
        return response.data;
      } catch (error) {
        console.error('Invalid User', error);
        throw error; // Re-throw for error handling in components
      }

      }
  }
  
  export const authSvc = new Auth();
  
  export default Auth;