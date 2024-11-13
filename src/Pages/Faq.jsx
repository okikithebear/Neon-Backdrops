import React, { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { FaShippingFast, FaCreditCard, FaUndoAlt, FaPalette } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      category: 'Payments',
      icon: <FaCreditCard className="text-blue-500 text-xl mr-2" />,
      question: "What payment options can I use on my orders?",
      answer: (
        <>
          <p>
            We aim to make buying or renting your favorite backdrops  as convenient as possible.
            We accept the following payment methods:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Credit/Debit Cards: Visa, MasterCard, Verve, American Express</li>
            <li>Bank Transfer</li>
            <li>USSD</li>
            <li>PayPal</li>
          </ul>
        </>
      )
    },
    {
      category: 'Shipping',
      icon: <FaShippingFast className="text-green-500 text-xl mr-2" />,
      question: "What are Neon Backdrops’ shipping options?",
      answer: (
        <>
          <p>
            For purchases outside Ibadan and Nigeria, buyers can choose their preferred shipping
            option during checkout. We provide an estimated delivery date for each item based on your shipping
            choice, delivery address, and the item's origin.
          </p>
          <p className="mt-2"><strong>Self Pickup</strong>: Free for all rental and purchase orders within Ibadan.
          Select “PICK UP” at checkout if eligible.</p>
          <p className="mt-2"><strong>Additional Information</strong>:</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Orders with multiple items may arrive in separate shipments, each accompanied by a shipping confirmation email.</li>
            <li>Custom orders typically arrive within three to six weeks, with standard and expedited shipping not applicable.</li>
            <li>For international orders, we will communicate delivery timelines via email, with automated shipping processing coming soon.</li>
          </ul>
        </>
      )
    },
    {
      category: 'Returns',
      icon: <FaUndoAlt className="text-red-500 text-xl mr-2" />,
      question: "Refunds and Returns; Cancellation",
      answer: (
        <>
          <p><strong>Rental Returns</strong>: Please return rented backdrops on the due date to avoid additional charges. Damaging a rental backdrop incurs a NGN50,000 fee.</p>
          <p className="mt-2"><strong>Purchase Returns</strong>: Purchased items can be returned within 30 days of receipt under specific conditions. Cancellations are allowed before a shipping label is created. Refunds will be issued to the original payment method, excluding any offer code value.</p>
          <p className="mt-2"><strong>Return Procedure</strong>: Contact us at in**@Ne**********.com within 30 days of delivery to arrange for return shipping or pick-up. Returns must be completed within 1 week of receiving instructions.</p>
          <p className="mt-2"><strong>Return Conditions</strong>: Products should be in a usable condition, without stains, tears, odors, or other damage. Zen Backdrops may request images to assess product condition and reserves the right to refuse any returns.</p>
        </>
      )
    },
    {
      category: 'Care Instructions',
      icon: <FaPalette className="text-yellow-500 text-xl mr-2" />,
      question: "Backdrop Care",
      answer: (
        <>
          <p>To prolong the life and quality of your rental or purchased backdrops:</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Avoid using staple pins or sharp objects on the backdrop.</li>
            <li>Ensure shoes are clean before stepping on the backdrop to avoid stains.</li>
            <li>Roll backdrops on carton rollers or PVC pipes instead of folding them.</li>
            <li>Clean with a soft brush after each use; do not wash or use a wet cloth.</li>
            <li>Store in a clean, dry, well-ventilated area.</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 my-20">
      <div className="border-b border-gray-300 pb-2 mb-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 sm:text-3xl">FREQUENTLY ASKED QUESTIONS</h1>
      </div>
      <div className="space-y-8">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg shadow-lg">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 hover:bg-gray-200 focus:outline-none transition-all"
            >
              <div className="flex items-center">
                {faq.icon}
                <span className="font-semibold text-lg text-gray-800 sm:text-base">{faq.question}</span>
              </div>
              {activeIndex === index ? <HiMinus className="text-purple-500" /> : <HiPlus className="text-purple-500" />}
            </button>
            <div
  className={`transition-all duration-300 ease-in-out overflow-hidden ${
    activeIndex === index ? 'max-h-[500px] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
  }`}
>
  <div className="px-6 py-4 bg-gray-50 text-gray-700 sm:px-4 sm:py-3">
    {faq.answer}
  </div>
</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
