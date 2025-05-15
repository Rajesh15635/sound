import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Music, Sparkles, User, MapPin, Phone, Calendar, ArrowLeft } from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    date: '',
    phoneNumber: '',
    functionType: '',
    djEvent: false,
    poperBlast: false
  });

  const [phoneError, setPhoneError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Special handling for phone number
    if (name === 'phoneNumber') {
      // Remove any non-digit characters
      const numbersOnly = value.replace(/\D/g, '');
      
      // Limit to 10 digits
      const limitedValue = numbersOnly.slice(0, 10);
      
      // Validate phone number length
      if (limitedValue.length === 10 || limitedValue.length === 0) {
        setPhoneError('');
      } else {
        setPhoneError('Phone number must be exactly 10 digits');
      }
      
      setFormData({
        ...formData,
        [name]: limitedValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  // Handle keyboard events to prevent non-number keys
  const handlePhoneKeyDown = (e) => {
    // Allow: backspace, delete, tab, escape, enter, and digits
    if (
      [8, 9, 13, 27, 46].indexOf(e.keyCode) !== -1 || // Backspace, Tab, Enter, Esc, Delete
      (e.keyCode >= 48 && e.keyCode <= 57) || // Numbers on top of keyboard
      (e.keyCode >= 96 && e.keyCode <= 105) // Numpad numbers
    ) {
      // Let it happen, don't do anything
      return;
    }
    
    // Prevent any other key
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate phone number before submission
    if (formData.phoneNumber.length !== 10) {
      setPhoneError('Phone number must be exactly 10 digits');
      return;
    }
    
    console.log('Form submitted:', formData);
    alert('Registration successful!');
    // Optionally navigate back to home after successful registration
    navigate('/');
  };

  const handleBackClick = () => {
    navigate('/');
  };

  const functionTypes = [
    'Marriage',
    'Reception',
    'Birthday Function',
    'Temple Function',
    'House Warming',
    'School Function',
    'Church Function',
    'College Day',
    'Outdoor DJ Function',
    'Others'
  ];

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Curved Background Element - similar to main page */}
      <div className="absolute bottom-0 right-0 w-full h-48 z-0">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full">
          <path 
            fill="#0d7e7e" 
            fillOpacity="0.8" 
            d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,245.3C672,245,768,203,864,181.3C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      <div className="max-w-md mx-auto bg-gray-900 rounded-xl shadow-2xl overflow-hidden md:max-w-2xl relative z-10">
        <div className="bg-gradient-to-r from-teal-500 to-teal-400 p-6 relative">
          <button 
            onClick={handleBackClick}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black hover:text-gray-800 transition-colors duration-300"
          >
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-3xl font-bold text-black text-center">Event Registration</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Name Field */}
          <div>
            <label className="flex items-center gap-2 text-lg font-medium text-gray-300 mb-2">
              <User size={20} className="text-teal-400" />
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none focus:border-teal-400"
              placeholder="Enter your full name"
            />
          </div>

          {/* Place Field */}
          <div>
            <label className="flex items-center gap-2 text-lg font-medium text-gray-300 mb-2">
              <MapPin size={20} className="text-teal-400" />
              Place
            </label>
            <input
              type="text"
              name="place"
              value={formData.place}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none focus:border-teal-400"
              placeholder="Your location"
            />
          </div>

          {/* Date Field */}
          <div>
            <label className="flex items-center gap-2 text-lg font-medium text-gray-300 mb-2">
              <Calendar size={20} className="text-teal-400" />
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none focus:border-teal-400"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="flex items-center gap-2 text-lg font-medium text-gray-300 mb-2">
              <Phone size={20} className="text-teal-400" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              onKeyDown={handlePhoneKeyDown}
              required
              pattern="[0-9]{10}"
              maxLength={10}
              inputMode="numeric"
              className={`w-full px-4 py-2 bg-gray-800 border ${phoneError ? 'border-red-500' : 'border-gray-700'} text-white rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none ${phoneError ? 'focus:border-red-500' : 'focus:border-teal-400'}`}
              placeholder="Enter 10 digit phone number"
            />
            {phoneError && (
              <p className="mt-1 text-red-500 text-sm">{phoneError}</p>
            )}
          </div>

          {/* Function Type Field */}
          <div>
            <label className="flex items-center gap-2 text-lg font-medium text-gray-300 mb-2">
              <Calendar size={20} className="text-teal-400" />
              Function Type
            </label>
            <select
              name="functionType"
              value={formData.functionType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none focus:border-teal-400"
            >
              <option value="">Select function type</option>
              {functionTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Additional Services */}
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <h3 className="text-lg font-medium text-teal-400 mb-4">Additional Services</h3>
            
            <div className="space-y-4">
              {/* DJ Event Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="djEvent"
                  id="djEvent"
                  checked={formData.djEvent}
                  onChange={handleChange}
                  className="h-5 w-5 text-teal-400 bg-gray-800 border-gray-600 rounded focus:ring-teal-400 focus:ring-offset-gray-900"
                />
                <label htmlFor="djEvent" className="ml-3 flex items-center gap-2">
                  <Music size={20} className="text-teal-400" />
                  <span className="text-gray-300">DJ Event</span>
                </label>
              </div>

              {/* Popper Blast Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="poperBlast"
                  id="poperBlast"
                  checked={formData.poperBlast}
                  onChange={handleChange}
                  className="h-5 w-5 text-teal-400 bg-gray-800 border-gray-600 rounded focus:ring-teal-400 focus:ring-offset-gray-900"
                />
                <label htmlFor="poperBlast" className="ml-3 flex items-center gap-2">
                  <Sparkles size={20} className="text-teal-400" />
                  <span className="text-gray-300">Popper Blast</span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-teal-400 hover:bg-teal-500 text-black font-bold rounded-full shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-teal-400"
            >
              Register Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}