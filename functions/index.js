const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");

// Set SendGrid API key from Firebase environment config
sgMail.setApiKey(functions.config().sendgrid.key);

exports.sendEmail = functions.https.onCall(async (data, context) => {
  const {customerEmail, ownerEmail, subject,
    customerMessage, ownerMessage} = data;

  try {
    // Send customer email
    await sgMail.send({
      to: customerEmail,
      from: "your-email@example.com", // Verified sender
      subject: subject,
      text: customerMessage,
    });

    // Send owner email
    await sgMail.send({
      to: ownerEmail,
      from: "your-email@example.com", // Verified sender
      subject: `New Order Received: ${subject}`,
      text: ownerMessage,
    });

    return {success: true, message: "Emails sent successfully!"};
  } catch (error) {
    console.error("Error sending emails:", error);
    return {success: false, error: error.message};
  }
});
