const express = require("express");
const route = express();
const bodyParser = require('body-parser');
const { recieveRegistrationData } = require("../ApiControllers/ApiController");
const { webhookgetMsg } = require("../Webhook/FacebookWebhook");
const { sendWaMessage } = require("../Services/WaMessageService");

route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: true }));
route.get('/webhook', webhookgetMsg)

route.post('/api/receive-registration', recieveRegistrationData)
route.post('/send-msg', sendWaMessage)

const crypto = require('crypto');

module.exports = route;


