const emailServiceProvider = require("./emailServiceProvider");
const parseData = require("./parseData");

try {
    let emailBody = parseData.getEmailBody();
    emailServiceProvider.sendEmail(emailBody)
    .then(res => {
        console.log("Email Sent: " . JSON.stringify(res.data))
      })
      .catch(error => {
        console.log("Email failed: " + error.toString())
      });
} catch (e) {
    console.log(e.toString());
}