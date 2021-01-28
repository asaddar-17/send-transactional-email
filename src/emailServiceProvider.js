const axios = require("axios");
const dotenv = require("dotenv").config();

const apiHeaders = {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + process.env.SALESFORCE_ACCESS_TOKEN
      }
  };

exports.sendEmail = async (requestBody) => {
    url = process.env.SALESFORCE_TRANSACTIONAL_ENDPOINT.replace("{templateId}", requestBody.templateId);
    return await axios.post(url, requestBody, apiHeaders);
};
