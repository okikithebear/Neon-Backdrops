import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaInfoCircle, 
  FaLock, 
  FaDatabase, 
  FaUserFriends, 
  FaCookieBite, 
  FaChild, 
  FaSync 
} from 'react-icons/fa';

const sectionAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

const PrivacyPolicyPage = () => {
  return (
    <div className="px-4 py-20 mt-10 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center text-4xl font-bold text-red-600 mb-8"
      >
        <FaShieldAlt className="mr-3" />
        PRIVACY POLICY
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-black text-justify mb-6"
      >
        At Neon-Backdrops, your privacy shines as brightly as our neon creations.
        We are dedicated to protecting your personal information and ensuring a secure, inspiring experience on our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your data as you explore our vibrant neon backdrops. By using our services, you agree to the practices detailed below.
      </motion.p>
      
      <div className="space-y-8">
        {/* Section 1: Information Collection and Use */}
        <motion.div {...sectionAnimation} className="flex flex-col md:flex-row items-start">
          <FaInfoCircle className="text-red-600 text-3xl mb-2 md:mr-4 md:mb-0" />
          <div>
            <h3 className="text-2xl font-semibold mb-2">1. Information Collection and Use</h3>
            <p className="mb-2">
              We may collect various types of information when you interact with our website or inquire about our custom neon designs, including:
            </p>
            <ul className="list-disc list-inside ml-6">
              <li><strong>Contact Information:</strong> Your name, email address, and phone number.</li>
              <li><strong>Inquiry Details:</strong> Messages, design preferences, or feedback you share with us.</li>
              <li><strong>Device and Usage Information:</strong> IP address, browser type, operating system, and other technical details.</li>
            </ul>
          </div>
        </motion.div>

        {/* Section 2: Data Security */}
        <motion.div {...sectionAnimation} className="flex flex-col md:flex-row items-start">
          <FaLock className="text-red-600 text-3xl mb-2 md:mr-4 md:mb-0" />
          <div>
            <h3 className="text-2xl font-semibold mb-2">2. Data Security</h3>
            <p>
              We take data security seriously and employ robust measures to safeguard your information. Our systems are secured using industry-standard encryption and security protocols.
            </p>
          </div>
        </motion.div>

        {/* Section 3: Data Retention */}
        <motion.div {...sectionAnimation} className="flex flex-col md:flex-row items-start">
          <FaDatabase className="text-red-600 text-3xl mb-2 md:mr-4 md:mb-0" />
          <div>
            <h3 className="text-2xl font-semibold mb-2">3. Data Retention</h3>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
          </div>
        </motion.div>

        {/* Section 4: Third-Party Service Providers */}
        <motion.div {...sectionAnimation} className="flex flex-col md:flex-row items-start">
          <FaUserFriends className="text-red-600 text-3xl mb-2 md:mr-4 md:mb-0" />
          <div>
            <h3 className="text-2xl font-semibold mb-2">4. Third-Party Service Providers</h3>
            <p>
              To deliver our services effectively, we may work with trusted third-party providers. These partners access your information solely to perform designated tasks on our behalf, and they are contractually obligated to keep your data confidential.
            </p>
          </div>
        </motion.div>

        {/* Section 5: Cookies and Tracking Technologies */}
        <motion.div {...sectionAnimation} className="flex flex-col md:flex-row items-start">
          <FaCookieBite className="text-red-600 text-3xl mb-2 md:mr-4 md:mb-0" />
          <div>
            <h3 className="text-2xl font-semibold mb-2">5. Cookies and Tracking Technologies</h3>
            <p>
              We may use cookies and similar tracking tools to enhance your experience and understand how our neon designs are explored on our website. You can manage your cookie preferences through your browser settings.
            </p>
          </div>
        </motion.div>

        {/* Section 6: Children's Privacy */}
        <motion.div {...sectionAnimation} className="flex flex-col md:flex-row items-start">
          <FaChild className="text-red-600 text-3xl mb-2 md:mr-4 md:mb-0" />
          <div>
            <h3 className="text-2xl font-semibold mb-2">6. Children's Privacy</h3>
            <p>
              Our services are not intended for children under the age of 13. We do not knowingly collect personal information from individuals under 13.
            </p>
          </div>
        </motion.div>

        {/* Section 7: Changes to this Privacy Policy */}
        <motion.div {...sectionAnimation} className="flex flex-col md:flex-row items-start">
          <FaSync className="text-red-600 text-3xl mb-2 md:mr-4 md:mb-0" />
          <div>
            <h3 className="text-2xl font-semibold mb-2">7. Changes to this Privacy Policy</h3>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. Significant changes will be communicated through prominent notices on our website or via other appropriate channels.
            </p>
          </div>
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 text-gray-400 text-center text-base"
      >
        By exploring our website and engaging with our neon backdrop services, you agree to the terms of this Privacy Policy. Thank you for choosing Neon-Backdrops as your creative partner.
      </motion.p>
    </div>
  );
};

export default PrivacyPolicyPage;
