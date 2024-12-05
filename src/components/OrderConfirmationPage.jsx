import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';

const OrderConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const orderDetails = location.state;

  const formatCurrency = number =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(number);

  const handleDownloadInvoice = () => {
    const doc = new jsPDF();
    // Set title and font size
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text('Order Invoice', 20, 20);

  // Add customer details
  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.text(`Name: ${orderDetails.name}`, 20, 30);
  doc.text(`Email: ${orderDetails.email}`, 20, 40);

  // Section separator
  doc.setLineWidth(0.5);
  doc.line(20, 45, 195, 45); // Horizontal line under customer info

  // Order Details Title
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text('Order Details:', 20, 55);

  // Table headers
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("Item", 20, 65);
  doc.text("Quantity", 100, 65);
  doc.text("Total", 160, 65);

  // Draw a horizontal line under the headers
  doc.setLineWidth(0.3);
  doc.line(20, 70, 195, 70); 

  // Add cart items in a table-like format
  let yOffset = 75;
  orderDetails.cart.forEach((item, index) => {
    doc.text(item.name, 20, yOffset);
    doc.text(String(item.quantity), 100, yOffset);
    doc.text(formatCurrency(item.price * item.quantity), 160, yOffset);
    yOffset += 10;
  });

  // Add subtotal, shipping, and grand total
  doc.setLineWidth(0.5);
  doc.line(20, yOffset, 195, yOffset); // Draw line after last item
  yOffset += 5;
  doc.setFontSize(14);
  doc.text(`Subtotal: ${formatCurrency(orderDetails.total)}`, 20, yOffset);
  yOffset += 10;
  doc.text(`Shipping: ${formatCurrency(orderDetails.shippingCost)}`, 20, yOffset);
  yOffset += 10;
  doc.setFont("helvetica", "bold");
  doc.text(`Grand Total: ${formatCurrency(orderDetails.grandTotal)}`, 20, yOffset);

  // Final save as PDF
  doc.save('Order_Invoice.pdf');
  };

  useEffect(() => {
    if (!orderDetails) {
      // Handle case where orderDetails is not found
    }
  }, [orderDetails]);

  if (!orderDetails) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-700">No Order Found</h1>
        <p className="text-gray-600 mt-4">
          It seems you haven't placed an order. Please go back to the shop and try again.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 mb-20 mt-20">
      <h1 className="text-3xl font-bold text-gray-800 text-center">Thank You for Your Order!</h1>
      <p className="text-center text-gray-600 mt-4">
        Your order has been successfully placed. A confirmation email has been sent to <strong>{orderDetails.email}</strong>.
      </p>

      <div className="bg-white shadow-md rounded-lg p-6 mt-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Order Summary</h2>
        <div className="space-y-4">
          {orderDetails.cart.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b pb-4">
              <div>
                <p className="text-lg font-medium text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <p className="text-lg text-gray-700">{formatCurrency(item.price * item.quantity)}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-right">
          <p className="text-gray-600">
            <strong>Subtotal:</strong> {formatCurrency(orderDetails.total)}
          </p>
          <p className="text-gray-600">
            <strong>Shipping:</strong> {formatCurrency(orderDetails.shippingCost)}
          </p>
          <p className="text-xl font-semibold text-gray-800">
            <strong>Total:</strong> {formatCurrency(orderDetails.grandTotal)}
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center space-y-4">
        <button
          onClick={handleDownloadInvoice}
          className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Please Download Invoice
        </button>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Back to Shop
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
