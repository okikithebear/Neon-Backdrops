// netlify/functions/sendConfirmationEmail.js
const mailgun = require('mailgun-js');
const mg = mailgun({ apiKey: 'your-mailgun-api-key', domain: 'your-mailgun-domain' });

exports.handler = async (event, context) => {
  const { orderDetails, customerEmail, ownerEmail } = JSON.parse(event.body);

  const messageForCustomer = {
    from: 'Your Shop <no-reply@yourdomain.com>',
    to: customerEmail,
    subject: 'Order Confirmation',
    text: `Hello ${orderDetails.name},\n\nThank you for your order. Here are your order details:\n\nItems: ${orderDetails.cart.map(item => `${item.name} x ${item.quantity}`).join(', ')}\nTotal: ₦${orderDetails.total}\nShipping Address: ${orderDetails.address}\n\nWe will notify you once your order is shipped.\n\nBest regards,\nYour Shop`
  };

  const messageForOwner = {
    from: 'Your Shop <no-reply@yourdomain.com>',
    to: ownerEmail,
    subject: 'New Order Received',
    text: `A new order has been placed. Here are the details:\n\nCustomer: ${orderDetails.name}\nEmail: ${customerEmail}\nAddress: ${orderDetails.address}\nItems: ${orderDetails.cart.map(item => `${item.name} x ${item.quantity}`).join(', ')}\nTotal: ₦${orderDetails.total}\nShipping Address: ${orderDetails.address}`
  };

  try {
    // Send email to customer
    await mg.messages().send(messageForCustomer);

    // Send email to owner
    await mg.messages().send(messageForOwner);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Emails sent successfully!' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending emails', error }),
    };
  }
};
