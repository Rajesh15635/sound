import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Rreg = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    generatorType: 'small',
    date: '',
    time: '',
    days: '1',
    deliveryOption: 'delivery',
    paymentMethod: 'credit'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate phone number
    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }
    
    // Process form submission
    console.log('Form submitted:', formData);
    // Redirect to confirmation page
    navigate('/confirmation');
  };

  return (
    <div className="bg-black min-h-screen text-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-teal-400 mb-8">Generator Rental Registration</h1>
        
        <form onSubmit={handleSubmit} className="bg-gray-900 rounded-lg shadow-lg p-6">
          {/* Personal Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-700 text-teal-400">Personal Information</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-300 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  // Allow only digits and limit to 10 characters
                  const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                  setFormData({
                    ...formData,
                    phone: value
                  });
                }}
                pattern="[0-9]{10}"
                maxLength="10"
                placeholder="10 digit mobile number"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
              />
              {formData.phone && formData.phone.length < 10 && (
                <p className="mt-1 text-sm text-red-400">Please enter a 10-digit phone number</p>
              )}
            </div>
          </div>

          {/* Delivery Address */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-700 text-teal-400">Delivery Address</h2>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-300 font-medium mb-2">Street Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="city" className="block text-gray-300 font-medium mb-2">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-gray-300 font-medium mb-2">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
                />
              </div>
              <div>
                <label htmlFor="zip" className="block text-gray-300 font-medium mb-2">ZIP Code</label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
                />
              </div>
            </div>
          </div>

          {/* Generator Details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-700 text-teal-400">Generator Details</h2>
            <div className="mb-4">
              <label htmlFor="generatorType" className="block text-gray-300 font-medium mb-2">Generator Type</label>
              <select
                id="generatorType"
                name="generatorType"
                value={formData.generatorType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
              >
                <option value="small">kerosene generator(2000-4000 watts)</option>
                <option value="medium"> dieselgenerator(5000-7500 watts)</option>
                <option value="large">silent generator (35000 watts)</option>
              </select>
            </div>
          </div>

          {/* Rental Schedule */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-700 text-teal-400">Rental Schedule</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="date" className="block text-gray-300 font-medium mb-2">Select Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-gray-300 font-medium mb-2">Select Time</label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
                >
                  <option value="">Select a time slot</option>
                  <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                  <option value="afternoon">Afternoon (1:00 PM - 5:00 PM)</option>
                  <option value="evening">Evening (6:00 PM - 10:00 PM)</option>
                  <option value="fullday">Full Day</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="days" className="block text-gray-300 font-medium mb-2">Number of Days</label>
              <div className="relative">
                <input
                  type="number"
                  id="days"
                  name="days"
                  min="1"
                  max="30"
                  placeholder="1"
                  value={formData.days}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
                />
                <div className="absolute right-3 top-2 text-gray-400 text-sm pointer-events-none">days</div>
              </div>
              <p className="mt-1 text-sm text-gray-400">Duration of generator rental (1-30 days)</p>
            </div>
          </div>

          {/* Delivery Options */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-700 text-teal-400">Delivery Options</h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="delivery"
                  name="deliveryOption"
                  value="delivery"
                  checked={formData.deliveryOption === 'delivery'}
                  onChange={handleChange}
                  className="h-5 w-5 text-teal-400 bg-gray-800 border-gray-700"
                />
                <label htmlFor="delivery" className="ml-2 text-gray-300">Delivery (LOCAL $300)  (LONG $500+)</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="pickup"
                  name="deliveryOption"
                  value="pickup"
                  checked={formData.deliveryOption === 'pickup'}
                  onChange={handleChange}
                  className="h-5 w-5 text-teal-400 bg-gray-800 border-gray-700"
                />
                <label htmlFor="pickup" className="ml-2 text-gray-300">Self Pickup (Free)</label>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-700 text-teal-400">Payment Method</h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="credit"
                  name="paymentMethod"
                  value="credit"
                  checked={formData.paymentMethod === 'credit'}
                  onChange={handleChange}
                  className="h-5 w-5 text-teal-400 bg-gray-800 border-gray-700"
                />
                <label htmlFor="credit" className="ml-2 text-gray-300">Credit Card</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === 'paypal'}
                  onChange={handleChange}
                  className="h-5 w-5 text-teal-400 bg-gray-800 border-gray-700"
                />
                <label htmlFor="paypal" className="ml-2 text-gray-300">PayPal</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="cash"
                  name="paymentMethod"
                  value="cash"
                  checked={formData.paymentMethod === 'cash'}
                  onChange={handleChange}
                  className="h-5 w-5 text-teal-400 bg-gray-800 border-gray-700"
                />
                <label htmlFor="cash" className="ml-2 text-gray-300">Cash on Delivery</label>
              </div>
            </div>
          </div>

          {/* Form Buttons */}
          <div className="flex justify-between mt-8">
            <button 
              type="button" 
              onClick={() => navigate(-1)}
              className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center"
            >
              <ChevronLeft size={18} className="mr-1" /> Back
            </button>
            <button 
              type="submit"
              className="px-6 py-2 bg-teal-400 text-black font-bold rounded-full hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-300"
            >
              Complete Reservation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Rreg;