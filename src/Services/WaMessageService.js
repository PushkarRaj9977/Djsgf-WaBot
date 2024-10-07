const { createHttpRequest } = require("../Axios/HttpRequest");
const { createPayload } = require("../Utils/Helper");

const sendWaMessage = async (registrationData) => {
    try {
        console.log("req", registrationData.id)
        // console.log("req.id,res.name,res.mobile", req.id, req.name, req.mobile)
        const payload = createPayload(registrationData.id, registrationData.name,registrationData.mobile);
        try {
        //     // console.log("first",payload)
            response2 = await createHttpRequest(payload);
           
        } catch (error) {
            // console.log(`Error sending message to ${recipientPhoneNumber}:`, error);
          console.error('Message Not Sent',error);
        //     // Optionally log the error or handle it as needed
        }
     
    }
    catch (error) {
       console.error("Invalid Request Format")
    }
}

module.exports = {
    sendWaMessage
}


