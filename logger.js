// logger.js

const fs = require('fs');
const path = require('path');

// Define the path for the log file
const logFilePath = path.join(__dirname, 'app.log');

// Create a logging function
function logMessage(message) {
    const timestamp = new Date().toISOString(); // Create a timestamp
    const logEntry = `${timestamp} - ${message}\n`; // Format the log entry

    // Append to the log file
    fs.appendFile(logFilePath, logEntry, { encoding: 'utf8' }, (err) => {
        if (err) {
            console.error('Failed to write to log file:', err);
        }
    });
}

// Export the logging function
module.exports = {
    logMessage,
};

