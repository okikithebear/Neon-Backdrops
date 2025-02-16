import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FaCheckCircle, FaDownload, FaArrowLeft } from 'react-icons/fa';

const OrderConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetails = location.state;

  const formatCurrency = number =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(number);

  const handleDownloadInvoice = () => {
    const doc = new jsPDF();

    // HEADER: Company and Invoice Title
    doc.setFillColor(54, 33, 89); // dark purple background
    doc.rect(0, 0, 210, 30, 'F'); // full-width header rectangle
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text("Neon Backdrops", 105, 15, { align: "center" });
    doc.setFontSize(16);
    doc.text("Order Invoice", 105, 25, { align: "center" });
    
    // Reset text color for the body
    doc.setTextColor(0, 0, 0);

    // CUSTOMER DETAILS & INVOICE DATE
    doc.setFontSize(12);
    doc.text(`Invoice To: ${orderDetails.name}`, 20, 40);
    doc.text(`Email: ${orderDetails.email}`, 20, 48);
    const invoiceDate = new Date().toLocaleDateString();
    doc.text(`Invoice Date: ${invoiceDate}`, 20, 56);

    // Separator line
    doc.setLineWidth(0.5);
    doc.line(20, 60, 190, 60);

    // TABLE HEADERS & DATA using autoTable
    const tableColumn = ["Item", "Quantity", "Unit Price", "Total"];
    const tableRows = [];

    orderDetails.cart.forEach(item => {
      let itemName = item.name;
      if(item.type === 'rental' && item.rentalDates) {
        itemName += ` (Rental: ${item.rentalDates.start} - ${item.rentalDates.end}, ${item.rentalDuration} days)`;
      }
      // For rentals, unit price is calculated based on rental duration
      const unitPrice = item.type === 'rental' ? item.price * item.rentalDuration : item.discountedPrice;
      const totalPrice = unitPrice * item.quantity;
      const row = [
        itemName,
        String(item.quantity),
        formatCurrency(unitPrice),
        formatCurrency(totalPrice)
      ];
      tableRows.push(row);
    });

    doc.autoTable({
      startY: 65,
      head: [tableColumn],
      body: tableRows,
      theme: 'grid',
      headStyles: { fillColor: [54, 33, 89] },
      styles: { font: "helvetica", fontSize: 10 },
      margin: { top: 65, left: 20, right: 20 }
    });

    // Retrieve the final y-coordinate to place totals
    const finalY = doc.lastAutoTable.finalY || 65;
    doc.setFontSize(12);
    doc.text(`Subtotal: ${formatCurrency(orderDetails.total)}`, 20, finalY + 10);
    doc.text(`Shipping: ${formatCurrency(orderDetails.shippingCost)}`, 20, finalY + 18);
    doc.setFont("helvetica", "bold");
    doc.text(`Grand Total: ${formatCurrency(orderDetails.grandTotal)}`, 20, finalY + 26);

    // FOOTER: Thank you note
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Thank you for your business!", 105, 290, { align: "center" });

    // Save the PDF
    doc.save('Order_Invoice.pdf');
  };

  useEffect(() => {
    if (!orderDetails) {
      // Optionally, redirect if no order details exist.
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
    <div className="max-w-5xl mx-auto px-6 py-16 mt-20 mb-20">
      <div className="text-center">
        <FaCheckCircle className="text-green-500 text-5xl mx-auto" />
        <h1 className="text-3xl font-bold text-gray-800 mt-4">Thank You for Your Order!</h1>
        <p className="text-gray-600 mt-4">
          Your order has been successfully placed. A confirmation email has been sent to <strong>{orderDetails.email}</strong>.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-8 mt-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-6 border-b pb-2">Order Summary</h2>
        <div className="space-y-4">
          {orderDetails.cart.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b pb-4">
              <div className="flex flex-col">
                <p className="text-lg font-medium text-gray-800">{item.name}</p>
                {item.type === "rental" && item.rentalDates && (
                  <p className="text-sm text-gray-500">
                    Rental: {item.rentalDates.start} to {item.rentalDates.end} <br />
                    Duration: {item.rentalDuration} {item.rentalDuration > 1 ? "days" : "day"}
                  </p>
                )}
                {item.type !== "rental" && (
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                )}
              </div>
              <p className="text-gray-700">
                {formatCurrency(
                  item.type === "rental" 
                    ? (item.price * item.rentalDuration * item.quantity) 
                    : (item.Price * item.quantity)
                )}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-right border-t pt-4">
          <p className="text-gray-600"><strong>Subtotal:</strong> {formatCurrency(orderDetails.total)}</p>
         
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <button
          onClick={handleDownloadInvoice}
          className="flex items-center px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition transform hover:scale-105"
        >
          <FaDownload className="mr-2" /> Download Invoice
        </button>
        <button
          onClick={() => navigate('/')}
          className="flex items-center px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" /> Back to Shop
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
