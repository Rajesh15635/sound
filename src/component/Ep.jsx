import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ShoppingBag, Menu } from 'lucide-react';

export default function Ep() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('electrical');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleRegisterClick = () => {
    navigate('/register');
  };
  
  const handleContactClick = () => {
    navigate('/contact');
  };
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    
    if (tab === 'contact') {
      navigate('/contact');
    } else if (tab === 'home') {
      navigate('/');
    } else if (tab === 'interior') {
      navigate('/interior');
    } else if (tab === 'videos') {
      navigate('/videos');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  // Add handle shopping bag click function
  const handleShoppingBagClick = () => {
    navigate('/generators');
  };

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <div className="container mx-auto px-4 py-2 relative">
        {/* Navigation */}
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
            <button 
              className="p-2 rounded-full border border-gray-700 hover:border-teal-400 transition-colors duration-300"
              onClick={handleShoppingBagClick}
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
        
        {/* Services Header */}
        <div className="py-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4 md:mb-0">
              Electrical & Plumbing Services
            </h1>
            <button className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-2 px-6 rounded-full text-sm transition-colors duration-300">
              Request Quote
            </button>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Electrical Service 1 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Electrical Wiring" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-400 mb-3">Electrical Wiring</h3>
                <p className="text-gray-400 text-sm mb-5">
                  Professional electrical wiring installation and maintenance for residential and commercial spaces.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-teal-400 font-semibold">₹10,000 onwards</span>
                  <button className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-1 px-4 rounded-full text-sm transition-colors duration-300">
                    Details
                  </button>
                </div>
              </div>
            </div>
            
            {/* Plumbing Service 1 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Pipe Installation" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-400 mb-3">Pipe Installation</h3>
                <p className="text-gray-400 text-sm mb-5">
                  Expert pipe installation and replacement with high-quality materials and precision.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-teal-400 font-semibold">₹8,000 onwards</span>
                  <button className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-1 px-4 rounded-full text-sm transition-colors duration-300">
                    Details
                  </button>
                </div>
              </div>
            </div>
            
            {/* Electrical Service 2 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Electrical Repairs" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-400 mb-3">Electrical Repairs</h3>
                <p className="text-gray-400 text-sm mb-5">
                  Comprehensive electrical repair services for all types of electrical systems and appliances.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-teal-400 font-semibold">₹5,000 onwards</span>
                  <button className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-1 px-4 rounded-full text-sm transition-colors duration-300">
                    Details
                  </button>
                </div>
              </div>
            </div>
            
            {/* Plumbing Service 2 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Leak Detection" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-400 mb-3">Leak Detection</h3>
                <p className="text-gray-400 text-sm mb-5">
                  Advanced leak detection and repair services to prevent water damage and ensure system integrity.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-teal-400 font-semibold">₹7,500 onwards</span>
                  <button className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-1 px-4 rounded-full text-sm transition-colors duration-300">
                    Details
                  </button>
                </div>
              </div>
            </div>
            
            {/* Electrical Service 3 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Lighting Solutions" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-400 mb-3">Lighting Solutions</h3>
                <p className="text-gray-400 text-sm mb-5">
                  Custom lighting design and installation for enhanced ambiance and energy efficiency.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-teal-400 font-semibold">₹12,000 onwards</span>
                  <button className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-1 px-4 rounded-full text-sm transition-colors duration-300">
                    Details
                  </button>
                </div>
              </div>
            </div>
            
            {/* Plumbing Service 3 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Bathroom Fitting" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-400 mb-3">Bathroom Fitting</h3>
                <p className="text-gray-400 text-sm mb-5">
                  Complete bathroom fitting services including fixtures, pipes, and modern plumbing solutions.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-teal-400 font-semibold">₹15,000 onwards</span>
                  <button className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-1 px-4 rounded-full text-sm transition-colors duration-300">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Why Choose Our Services Section */}
          <div className="mt-16 bg-gray-900 p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-teal-400 mb-6">Why Choose Our Electrical & Plumbing Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black bg-opacity-50 p-6 rounded-lg transition-all duration-300 hover:bg-opacity-70">
                <h3 className="text-lg font-bold text-teal-400 mb-3">Expert Technicians</h3>
                <p className="text-gray-400 text-sm">
                  Highly skilled and certified professionals with years of experience in electrical and plumbing services.
                </p>
              </div>
              <div className="bg-black bg-opacity-50 p-6 rounded-lg transition-all duration-300 hover:bg-opacity-70">
                <h3 className="text-lg font-bold text-teal-400 mb-3">Quality Guaranteed</h3>
                <p className="text-gray-400 text-sm">
                  We use premium materials and provide comprehensive warranties on all our services.
                </p>
              </div>
              <div className="bg-black bg-opacity-50 p-6 rounded-lg transition-all duration-300 hover:bg-opacity-70">
                <h3 className="text-lg font-bold text-teal-400 mb-3">24/7 Support</h3>
                <p className="text-gray-400 text-sm">
                  Round-the-clock emergency services to address your electrical and plumbing needs.
                </p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <button 
                className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-3 px-10 rounded-full transition-colors duration-300"
                onClick={handleContactClick}
              >
                Schedule a Service Consultation
              </button>
            </div>
          </div>
        </div>
        
        {/* Curved Background Element */}
        <div className="absolute bottom-0 right-0 w-full h-48 z-0">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full">
            <path 
              fill="#0d7e7e" 
              fillOpacity="0.8" 
              d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,245.3C672,245,768,203,864,181.3C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}