import React from 'react'
import "./GeneratePdf.css"
import jsPDF from "jspdf"
import "jspdf-autotable"

const GeneratePdf = (orderDetails) => {

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

export default GeneratePdf