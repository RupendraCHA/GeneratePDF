import React, { useState } from 'react'
import "./OrderDetails.css"
import jsPDF from "jspdf"
import "jspdf-autotable"
const OrderDetails = () => {

    const [isPdfDownloaded, setPdfStatus] = useState(false)

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
        setPdfStatus(true)
    
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
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">How do I create an account?</div>
            <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
        </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
            <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">How do I update my profile information?</div>
            <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
        </div>
        <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      class="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      class="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      class="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      class="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
      class="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
      class="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      class="rounded-box" />
  </div>
</div>
{isPdfDownloaded && <div className="toast toast-bottom">
  <div className="alert alert-info">
    <span>Pdf Downloaded.
    </span>
    <button className='border-1 px-1 border-white-700 bg-white' onClick={() => setPdfStatus(false)}>X</button>
  </div>
</div>}
    </div>
  )
}

export default OrderDetails
