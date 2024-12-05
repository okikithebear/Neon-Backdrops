import * as functions from "firebase-functions/v1";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

admin.initializeApp();

// Configure Nodemailer with your email provider
const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service
  auth: {
    user: "neonbackdrops@gmail.com", // Replace with your email
    pass: "Opeyemi77", // Replace with your email password or app password
  },
});

// Firestore trigger for new orders
export const sendOrderConfirmation = functions.firestore
  .document("orders/{orderId}")
  .onCreate(async (snapshot: functions.firestore.DocumentSnapshot) => {
    const orderData = snapshot.data();

    if (!orderData) {
      console.warn("No order data found.");
      return;
    }

    const {
      name,
      email,
      address,
      state,
      city,
      country,
      phone,
      cart,
      grandTotal,
    } = orderData as {
      name: string;
      email: string;
      address: string;
      state: string;
      city: string;
      country: string;
      phone: string;
      cart: { name: string; price: number; quantity: number }[];
      grandTotal: number;
    };

    // Format order items
    const items = cart
      .map(
        (item) =>
          `${item.quantity} x ${item.name} (₦${item.price.toLocaleString()})`
      )
      .join("\n");

    // Email content
    const emailContent = `
      Dear ${name},

      Thank you for your order! Here are the details:
      ------------------------------------------
      Items:
      ${items}

      Shipping Address: ${address}, ${city}, ${state}, ${country}
      Phone: ${phone}

      Total: ₦${grandTotal.toLocaleString()}
      ------------------------------------------

      Regards,
      Neon Backdrops
    `;

    const adminEmailContent = `
      New Order Received!
      ------------------------------------------
      Customer: ${name} (${email})
      Items:
      ${items}

      Shipping Address: ${address}, ${city}, ${state}, ${country}
      Phone: ${phone}
      Total: ₦${grandTotal.toLocaleString()}
    `;

    try {
      // Send email to customer
      await transporter.sendMail({
        from: "neonbackdrops@gmail.com", // Sender address
        to: email, // Customer email
        subject: "Order Confirmation",
        text: emailContent.trim(),
      });

      // Send email to owner
      await transporter.sendMail({
        from: "neonbackdrops@gmail.com", // Sender address
        to: "neonbackdrops@gmail.com", // Owner's email
        subject: "New Order Received",
        text: adminEmailContent.trim(),
      });

      console.log("Emails sent successfully.");
    } catch (error) {
      console.error("Error sending emails:", error);
    }
  });
