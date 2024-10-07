const { sendWaMessage } = require("../Services/WaMessageService");
const crypto = require('crypto');
const recieveRegistrationData = async (req, res) => {
    try { 
        const data = decryptData(req.body)
       
        res.status(200).json({ message: 'Data received' });
       
        sendWaMessage(data)
       

    } catch (err) {
        console.log("err:", err)
    }
}


const decryptData = (encryptedData) => {
    // Laravel's APP_KEY (base64 decoded)
   console.log("ED2",encryptedData);
    const encryptionKey = Buffer.from(process.env.ENCRYPTION_KEY, 'base64');

    try {
        // Step 1: Decode the base64 encrypted string
        const parsedData = JSON.parse(Buffer.from(encryptedData.encrypted_data, 'base64').toString('utf8'));

        // Extract iv and value from the parsed JSON
        const iv = Buffer.from(parsedData.iv, 'base64'); // Initialization Vector (IV)
        const ciphertext = Buffer.from(parsedData.value, 'base64'); // Ciphertext

        // Step 2: Decrypt the data using Node.js' crypto module
        const decipher = crypto.createDecipheriv('aes-256-cbc', encryptionKey, iv);

        let decrypted = decipher.update(ciphertext, 'binary', 'utf8');
        decrypted += decipher.final('utf8');

        // The decrypted data is now available
        // console.log("Decrypted Data:", decrypted);
        return JSON.parse(decrypted); // Return parsed JSON
    } catch (error) {
        console.error('Error during decryption:', error);
    }
};

// Example usage with your encrypted data


module.exports = {
    recieveRegistrationData
}