import React from 'react'
import "./OrderDetails.css"
import GeneratePdf from '../GeneratePdf/generatePdf';

const OrderDetails = () => {

    const orderDetails = [
        { id: 1, productName: "Laptop", quantity: 2, price: 1000 },
        { id: 2, productName: "Mouse", quantity: 3, price: 50 },
        { id: 3, productName: "Keyboard", quantity: 1, price: 100 }
    ];

  return (
    <div>
        <h2>Order Details</h2>
        <button onClick={() => GeneratePdf(orderDetails)}>
            Download PDF
        </button>
    </div>
  )
}

export default OrderDetails
