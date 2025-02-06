import React from 'react'
import "./OrderDetails.css"
import jsPDF from "jspdf"
import "jspdf-autotable"
const OrderDetails = () => {

    const generatePdf = (orderDetails) => {
    
        const doc = new jsPDF()
    
        doc.text("Order Details", 14, 10)
    
        const tableColumn = ["Order ID", "Product Name", "Quantity", "Price"];
        const tableRows = []
    
        orderDetails.forEach((order) => {
            const orderData = [
                order.id,
                order.productName,
                order.quantity,
                `${order.price}`
            ]
            tableRows.push(orderData)
        })
    
        doc.autoTable({
            head: [tableColumn],
            body: tableRows,
            startY: 20
        })
    
        doc.save("Order_Details.pdf")
    
    }

    const orderDetails = [
        { id: 1, productName: "Laptop", quantity: 2, price: 1000 },
        { id: 2, productName: "Mouse", quantity: 3, price: 50 },
        { id: 3, productName: "Keyboard", quantity: 1, price: 100 }
    ];

  return (
    <div className='text-center'>
        <h2 className='text-5xl mb-6 font-bold text-white'>Order Details</h2>
        <button className='text-0.5xl shadow-xl shadow-black-500/50 text-black border-2 border-yellow-700 bg-white font-semibold cursor-pointer px-2 py-1 rounded-sm' onClick={() => generatePdf(orderDetails)}>
            Download PDF
        </button>
    </div>
  )
}

export default OrderDetails
