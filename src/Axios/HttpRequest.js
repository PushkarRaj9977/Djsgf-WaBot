require('dotenv').config();
const axios = require('axios');
const API_URL = process.env.API_URL;
const API_TOKEN = process.env.META_PAGE_ACCESS_TOKEN;


const createHttpRequest = async ( payload) => {


    // Headers for authentication and content type   
    const headers = {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
    };


    axios.post(API_URL, payload, { headers })
        .then(response => {
            console.log('Template message sent successfully!@HTTPRequest');
            console.log(response.data);
            return response;
        })
        .catch(error => {
            console.error('Failed to send template message.');

            console.error('Status code:', error.response ? error.response.status : 'Unknown');
          
            console.error('Response:', error.response ? error.response.data : error.message);
            return error;
        });

}
module.exports = {
    createHttpRequest
}