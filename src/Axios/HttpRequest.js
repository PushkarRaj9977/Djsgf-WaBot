require('dotenv').config();
const { logMessage } = require('./../../logger');
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
            logMessage('Template message sent successfully!@HTTPRequest');
            logMessage(JSON.stringify(response.data));
            return response;
        })
        .catch(error => {
            console.error('Failed to send template message.');

            console.error('Status code:', error.response ? error.response.status : 'Unknown');
            logMessage(`Error sending template message: ${error.message}`);
            console.error('Response:', error.response ? error.response.data : error.message);
            return error;
        });

}
module.exports = {
    createHttpRequest
}