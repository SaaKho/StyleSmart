import axios from 'axios'; // Or your preferred HTTP client

const apiBaseUrl = process.env.REACT_APP_API_URI;


class Feedback {

    
  static async giveFeedback(token , comment) {
    console.log("token received",token);
    console.log("; received",comment)
    try {
        const response = await axios.post(`${apiBaseUrl}/feedback/save?token=${token}&comment=${comment}`, comment, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        console.log('Thanyou for giving feedback', response.data);
        return response.data;
      } catch (error) {
        console.error('Error sending Feedback', error.message);
        throw error;
      }
    }

  }
  
  export const feedbackSvc = new Feedback();
  
  export default Feedback;