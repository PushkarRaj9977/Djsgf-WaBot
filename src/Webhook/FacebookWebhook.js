const { sendWhatsappMessage } = require('../Controllers/Controller');

require('dotenv').config();

// Function to handle webhook messages
const webhookgetMsg = async (req, res) => {
    try {
        const mode = req.query["hub.mode"]
        const challenge = req.query["hub.challenge"]
        const verify_token = req.query["hub.verify_token"]
        if (mode && verify_token) {
            if (mode === "subscribe" && verify_token === process.env.VERIFY_TOKEN) {
                res.status(200).send(challenge)
            } else {
                res.status(401)
            }
        } else {
            res.status(500)
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    webhookgetMsg
}