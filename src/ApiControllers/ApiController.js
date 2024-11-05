const { sendWaMessage } = require("../Services/WaMessageService");
const { logMessage } = require('./../../logger');
const crypto = require('crypto');
const recieveRegistrationData = async (req, res) => {
    try {
        logMessage('Registration Data Recieved')
        const encryptedData = req.body.encrypted_data; // Expecting base64 string
        const decryptedData = decryptData(encryptedData);
        res.status(200).json({ message: 'Data received' });
        decryptedData ? sendWaMessage(decryptedData) : '';
    } catch (err) {
        console.log("err:", err)
    }
}

// Function to decrypt the data
const decryptData = (encryptedData) => {
    try {

        // Parse the JSON data
        const parsedData = JSON.parse(encryptedData);
        
        // Extract the IV and Base64-encoded value
        const iv = Buffer.from(parsedData.iv, 'base64'); // This is your IV
        const value = Buffer.from(parsedData.value, 'base64'); // This is your Base64-encoded data
        
        // Decode the value directly without encryption
        const decodedData = value.toString('utf8'); // Convert buffer to string
        
        // Parse the JSON data back to an object
        const registrationData = JSON.parse(decodedData);
        if(iv.length) {
            return registrationData
        }
        return false
    } catch (error) {
        console.error('Error during decryption:', error);
        logMessage('Error during decryption:', error)
        throw new Error('Decryption failed');
    }
};
// Example usage with your encrypted data


module.exports = {
    recieveRegistrationData
}