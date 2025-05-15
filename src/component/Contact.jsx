import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  Send, 
  MapPin, 
  Clock, 
  Smartphone,
  ArrowLeft,
  ShoppingBag,
  Menu
} from 'lucide-react';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Navigation state
  const [activeTab, setActiveTab] = useState('contact');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const validate = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Handle phone input to only allow numbers
    if (name === 'phone') {
      const numbersOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: numbersOnly });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    
    // Clear the error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Success handling
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
        
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({ ...errors, form: 'Failed to submit form. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Navigation functions
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    
    if (tab === 'home') {
      navigate('/');
    } else if (tab === 'contact') {
      navigate('/contact');
    } else if (tab === 'electrical') {
      navigate('/ep');
    } else if (tab === 'interior') {
      navigate('/interior');
    } else if (tab === 'videos') {
      navigate('/videos');
    }
  };

  // Function to navigate to the generators page
  const navigateToGenerators = () => {
    navigate('/generators');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navigation Bar */}
      <div className="container mx-auto px-4 py-2 relative">
        <nav className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <div className="text-teal-400 font-bold text-2xl tracking-wider">
              SUNDARAM
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className={`hover:text-teal-400 transition-colors duration-300 ${activeTab === 'home' ? 'text-teal-400' : ''}`} 
              onClick={() => handleTabClick('home')}
            >
              HOME
            </a>
            <a 
              href="#" 
              className={`hover:text-teal-400 transition-colors duration-300 ${activeTab === 'interior' ? 'text-teal-400' : ''}`} 
              onClick={() => handleTabClick('interior')}
            >
              INTERIOR
            </a>
            <a 
              href="#" 
              className={`hover:text-teal-400 transition-colors duration-300 ${activeTab === 'electrical' ? 'text-teal-400' : ''}`}
              onClick={() => handleTabClick('electrical')}
            >
              ELECTRICAL & PLUMBING
            </a>
            <a 
              href="#" 
              className={`hover:text-teal-400 transition-colors duration-300 ${activeTab === 'videos' ? 'text-teal-400' : ''}`}
              onClick={() => handleTabClick('videos')}
            >
              VIDEOS
            </a>
            <a 
              href="#" 
              className={`hover:text-teal-400 transition-colors duration-300 ${activeTab === 'contact' ? 'text-teal-400' : ''}`}
              onClick={() => handleTabClick('contact')}
            >
              CONTACT
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Updated shopping bag button with onClick handler */}
            <button 
              className="p-2 rounded-full border border-gray-700 hover:border-teal-400 transition-colors duration-300"
              onClick={navigateToGenerators}
            >
              <ShoppingBag size={20} />
            </button>
            <button 
              className="md:hidden p-2 rounded-full border border-gray-700 hover:border-teal-400 transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900 rounded-lg py-4 px-6 mb-4 z-50 relative">
            <div className="flex flex-col space-y-4">
              <a 
                href="#" 
                className={`hover:text-teal-400 ${activeTab === 'home' ? 'text-teal-400' : ''}`} 
                onClick={() => handleTabClick('home')}
              >
                HOME
              </a>
              <a 
                href="#" 
                className={`hover:text-teal-400 ${activeTab === 'interior' ? 'text-teal-400' : ''}`} 
                onClick={() => handleTabClick('interior')}
              >
                INTERIOR
              </a>
              <a 
                href="#" 
                className={`hover:text-teal-400 ${activeTab === 'electrical' ? 'text-teal-400' : ''}`}
                onClick={() => handleTabClick('electrical')}
              >
                ELECTRICAL & PLUMBING
              </a>
              <a 
                href="#" 
                className={`hover:text-teal-400 ${activeTab === 'videos' ? 'text-teal-400' : ''}`}
                onClick={() => handleTabClick('videos')}
              >
                VIDEOS
              </a>
              <a 
                href="#" 
                className={`hover:text-teal-400 ${activeTab === 'contact' ? 'text-teal-400' : ''}`}
                onClick={() => handleTabClick('contact')}
              >
                CONTACT
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-800 to-teal-600 py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-center max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-teal-400 mb-6">Our Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-teal-900 rounded-full p-3 mr-4">
                  <MapPin className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Address</h3>
                  <p className="text-gray-400">
                    169/6 Moolakarai Road<br />
                    Arumuganeri, Thoothukudi District<br/>
                    Pincode- 628202
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-900 rounded-full p-3 mr-4">
                  <Smartphone className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Phone</h3>
                  <p className="text-gray-400">91+ 9790226644</p>
                  <p className="text-gray-400">91+ 7708226651</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-900 rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Email</h3>
                  <p className="text-gray-400">romanrajesh150604@gmail.com</p>
                  <p className="text-gray-400">djmari@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-900 rounded-full p-3 mr-4">
                  <Clock className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Business Hours</h3>
                  <p className="text-gray-400">Monday - Sunday: 24 hrs</p>

                </div>
              </div>
            </div>
            
            {/* Social Media Links - UPDATED to only include Instagram and WhatsApp */}
            <div className="mt-8">
              <h3 className="font-medium text-white mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Instagram Link */}
                <a 
                  href="https://www.instagram.com/sundaram_group_of_company/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-teal-800 hover:bg-teal-700 text-white p-2 rounded-full transition duration-300"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z"/>
                  </svg>
                </a>
                
                {/* WhatsApp Link */}
                <a 
                  href="https://wa.me/7708226651"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-teal-800 hover:bg-teal-700 text-white p-2 rounded-full transition duration-300"
                  aria-label="WhatsApp"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-teal-400 mb-6">Send Us a Message</h2>
            
            {submitSuccess ? (
              <div className="bg-teal-900/50 border border-teal-500 rounded-lg p-4 mb-6">
                <p className="text-teal-300 font-medium">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </p>
              </div>
            ) : null}
            
            {errors.form && (
              <div className="bg-red-900/50 border border-red-500 rounded-lg p-4 mb-6">
                <p className="text-red-300 font-medium">{errors.form}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-2.5 bg-gray-800 border ${
                        errors.name ? 'border-red-500' : 'border-gray-700'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-2.5 bg-gray-800 border ${
                        errors.email ? 'border-red-500' : 'border-gray-700'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white`}
                      placeholder="johndoe@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                
                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-2.5 bg-gray-800 border ${
                        errors.phone ? 'border-red-500' : 'border-gray-700'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white`}
                      placeholder="1234567890"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>
                
                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-center pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-500" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`block w-full pl-10 pr-3 py-2.5 bg-gray-800 border ${
                        errors.message ? 'border-red-500' : 'border-gray-700'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white`}
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-950 py-8 mt-12">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Sundaram Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}