import React from "react";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

// Validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

// Contact Information Section
const ContactInfo = () => (
  <div className="bg-yellow-500 text-white p-6 sm:p-8 w-full md:w-1/3 rounded-tl-lg rounded-bl-lg ">
    <h2 className="text-2xl fon-body font-semibold mb-6">Contact Information</h2>
    <ContactItem icon={<FiMapPin />} title="Location Address" content="Shop 6 right wing between UBA and GTB, Ibadan, Nigeria" />
    <ContactItem icon={<FiPhone />} title="Phone Number" content="+234 (090) 567 87 9" />
    <ContactItem icon={<FiMail />} title="Email Address" content="neonbackdrops@gmail.com" />
    <ContactItem icon={<FiClock />} title="Opening Hours" content={["Mon-Fri: 9 AM - 5 PM", "Sat: 10 AM - 3 PM", "Sun: Closed"]} />
  </div>
);

// Contact Item Component
const ContactItem = ({ icon, title, content }) => (
  <div className="mb-4 flex items-start space-x-4">
    {icon}
    <div>
      <h3 className="font-medium">{title}</h3>
      {Array.isArray(content) ? (
        content.map((line, index) => (
          <p key={index} className="text-sm">{line}</p>
        ))
      ) : (
        <p className="text-sm">{content}</p>
      )}
    </div>
  </div>
);

// Contact Form Component
const ContactForm = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    try {
      const response = await emailjs.send(
        "service_52egjue", // Your EmailJS service ID
        "template_oivlhzj", // Your EmailJS template ID
        {
          firstName: values.firstName, // Maps to {{firstname}} in your EmailJS template
          lastName: values.lastName,   // Maps to {{lastname}} in your EmailJS template
          email: values.email,
          subject: values.subject,
          message: values.message,
        },
        "vnJQEV1QYsHXi4zcd" // Your EmailJS user ID
      );

      if (response.status === 200) {
        alert("Email sent successfully!");
        resetForm();
      } else {
        alert(`Error: ${response.text}`);
      }
    } catch (error) {
      alert("Error sending email. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-6 sm:p-8 w-full md:w-2/3 bg-purple-50 rounded-tr-lg rounded-br-lg">
      <h2 className="text-2xl font-mulish  mb-6 text-black">Get in Touch</h2>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", subject: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField name="firstName" placeholder="First Name" />
              <FormField name="lastName" placeholder="Last Name" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField type="email" name="email" placeholder="Email Address" />
              <FormField name="subject" placeholder="Subject" />
            </div>
            <div>
              <Field
                as="textarea"
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <motion.button
              type="submit"
              className="w-full p-3 bg-black text-white rounded-lg hover:bg-purple-800 transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// Form Field Component
const FormField = ({ name, placeholder, type = "text" }) => (
  <div>
    <Field
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
    />
    <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
  </div>
);

// Main Contact Page Component
const ContactPage = () => (
  <div className="min-h-screen bg-purple-50 flex justify-center items-center py-16 px-4">
    <motion.div
      className="bg-white w-full max-w-6xl shadow-lg rounded-lg flex flex-col md:flex-row"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ContactInfo />
      <ContactForm />
    </motion.div>
  </div>
);

export default ContactPage;
