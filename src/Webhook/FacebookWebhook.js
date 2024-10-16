const { sendWhatsappMessage } = require('../Controllers/Controller');

require('dotenv').config();

// Function to handle webhook messages
const webhookgetMsg = async (req, res) => {
    try {
        const mode = req.query["hub.mode"]
        const challenge = req.query["hub.challenge"]
        const verify_token = req.query["hub.verify_token"]
        console.log("webhook recieved")
        if (mode && verify_token) {
            if (mode === "subscribe" && verify_token === "VERIFIED") {
                console.log("token verified")
                res.status(200).send(challenge)
            } else {
                console.log("token  not verified")
                res.status(401)
            }
        } else {
           console.log("break in checking mode and token")
            res.status(500)
        }
    } catch (error) {
        console.log("error before token verification")
        console.error(error)
    }
}

module.exports = {
    webhookgetMsg
}