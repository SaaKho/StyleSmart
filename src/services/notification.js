import axios from 'axios'; // Or your preferred HTTP client

const apiBaseUrl = process.env.REACT_APP_API_URI;


class Notifications {

    
    
  static async getNotifications(  token ) {
    try {
        const response = await axios.get(`${apiBaseUrl}/notifications?token=${token}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching notificatios:', error);
        throw error; // Re-throw for error handling in components
      }

      }

      static async getRecentNotificationsCount(  token ) {
        try {
            const response = await axios.get(`${apiBaseUrl}/notifications/unread-count?token=${token}`);
            return response.data;
          } catch (error) {
            console.error('Error fetching recent notifications count:', error);
            throw error; // Re-throw for error handling in components
          }
    
          }

  }
  
  export const notificationSvc = new Notifications();
  
  export default Notifications;