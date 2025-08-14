'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useCart } from '@/context/CartContext';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

export default function ContactPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      setStatus('Please add items to your cart first');
      return;
    }

    setSending(true);
    setStatus('');

    // Format cart items for email
    const cartItemsText = cart.map(item => 
      `- ${item.name}: Quantity ${item.quantity} (${item.category})`
    ).join('\n');

    // Initialize EmailJS (replace with your actual IDs)
    emailjs.init("lNBCPiuAbsQ7TDmLL"); // Replace with your EmailJS public key

    const templateParams = {
      ...formData,
      cart_items: cartItemsText,
      item_count: cart.reduce((total, item) => total + item.quantity, 0)
    };

    try {
      await emailjs.send(
        'service_p2jbrq8', // Replace with your EmailJS service ID
        'template_iq0ioqt', // Replace with your EmailJS template ID
        templateParams
      );
      
      setStatus('Inquiry sent successfully! We will contact you soon.');
      clearCart();
      setFormData({
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send. Please try again or call us directly.');
    } finally {
      setSending(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const cartTotal = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-black">Your Inquiry Cart</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Cart Items */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6 text-black">Selected Items</h2>
            
            {cart.length === 0 ? (
              <p className="text-black">Your cart is empty. Browse our tiles and pavers to add items.</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b pb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-black">{item.name}</h3>
                      <p className="text-sm text-gray-700">{item.category}</p>
                      {item.size && <p className="text-sm text-gray-600">Size: {item.size}</p>}
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 rounded text-black"
                      >
                        <FaMinus className="text-sm" />
                      </button>
                      <span className="font-semibold w-8 text-center text-black">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded text-black"
                      >
                        <FaPlus className="text-sm" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded ml-2"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 border-t">
                  <p className="text-lg font-semibold text-black">Total Items: {cartTotal}</p>
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6 text-black">Send Inquiry</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-black">Name *</label>
                <input
                  type="text"
                  name="customer_name"
                  value={formData.customer_name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-black">Email *</label>
                <input
                  type="email"
                  name="customer_email"
                  value={formData.customer_email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-black">Phone *</label>
                <input
                  type="tel"
                  name="customer_phone"
                  value={formData.customer_phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-black">Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Any specific requirements or questions?"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-400"
                />
              </div>
              
              <button
                type="submit"
                disabled={sending || cart.length === 0}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  sending || cart.length === 0
                    ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {sending ? 'Sending...' : 'Send Inquiry'}
              </button>
              
              {status && (
                <div className={`p-4 rounded-lg text-center ${
                  status.includes('success') 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}