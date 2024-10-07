const createPayload = (id, name, mobile) => {
    const temp_name = "registration_success";
    mobile = "91" + mobile;

    return {
        messaging_product: 'whatsapp',
        to: mobile,
        type: 'template',
        template: {
            name: temp_name, // Template name
            language: {
                code: 'en' // Adjust to match your template's language code
            },
            components: [
                {
                    type: 'body',
                    parameters: [
                        {
                            "type": "text",
                            "text": name  // Example: 'John'
                        },
                        {
                            "type": "text",
                            "text": id  // Example: 'Your order has been shipped'
                        }
                    ]// Parameters to be replaced in the template
                }
            ]
        }
    };
};




module.exports = {
    createPayload
}