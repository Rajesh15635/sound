import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ShoppingBag, Menu, Play } from 'lucide-react';

export default function Videos() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('videos');
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
    } else if (tab === 'electrical') {
      navigate('/ep');
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
        
        {/* Videos Header */}
        <div className="py-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4 md:mb-0">
              Project Videos
            </h1>
            <button className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-2 px-6 rounded-full text-sm transition-colors duration-300">
              Subscribe to Updates
            </button>
          </div>
          
          {/* Video Categories */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button className="bg-teal-400 text-black px-4 py-1 rounded-full text-sm font-medium">
              All Videos
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 px-4 py-1 rounded-full text-sm font-medium transition-colors">
              Interior Design
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 px-4 py-1 rounded-full text-sm font-medium transition-colors">
              Electrical
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 px-4 py-1 rounded-full text-sm font-medium transition-colors">
              Plumbing
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 px-4 py-1 rounded-full text-sm font-medium transition-colors">
              Client Testimonials
            </button>
          </div>
          
          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video 1 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Modern Apartment Makeover" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-teal-400 rounded-full p-3 bg-opacity-80 hover:bg-opacity-100 transition-all cursor-pointer">
                    <Play size={24} color="black" fill="black" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-teal-400 text-black px-2 py-1 text-xs font-bold rounded">
                  04:32
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-400 mb-2">Modern Apartment Makeover</h3>
                <p className="text-gray-400 text-sm mb-3">
                  Complete renovation of a 2BHK apartment with modern interior design elements.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">12K views • 3 weeks ago</span>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white py-1 px-3 rounded-full text-xs transition-colors">
                    Interior
                  </button>
                </div>
              </div>
            </div>
            
            {/* Video 2 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Electrical Rewiring Project" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-teal-400 rounded-full p-3 bg-opacity-80 hover:bg-opacity-100 transition-all cursor-pointer">
                    <Play size={24} color="black" fill="black" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-teal-400 text-black px-2 py-1 text-xs font-bold rounded">
                  07:15
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-400 mb-2">Electrical Rewiring Project</h3>
                <p className="text-gray-400 text-sm mb-3">
                  Complete rewiring of a commercial space with advanced electrical systems.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">8.5K views • 1 month ago</span>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white py-1 px-3 rounded-full text-xs transition-colors">
                    Electrical
                  </button>
                </div>
              </div>
            </div>
            
            {/* Video 3 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Bathroom Renovation" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-teal-400 rounded-full p-3 bg-opacity-80 hover:bg-opacity-100 transition-all cursor-pointer">
                    <Play size={24} color="black" fill="black" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-teal-400 text-black px-2 py-1 text-xs font-bold rounded">
                  10:47
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-400 mb-2">Luxury Bathroom Renovation</h3>
                <p className="text-gray-400 text-sm mb-3">
                  Complete plumbing and interior design for a luxury bathroom renovation.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">15.3K views • 2 weeks ago</span>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white py-1 px-3 rounded-full text-xs transition-colors">
                    Plumbing
                  </button>
                </div>
              </div>
            </div>
            
            {/* Video 4 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Client Testimonial" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-teal-400 rounded-full p-3 bg-opacity-80 hover:bg-opacity-100 transition-all cursor-pointer">
                    <Play size={24} color="black" fill="black" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-teal-400 text-black px-2 py-1 text-xs font-bold rounded">
                  03:24
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-400 mb-2">Client Testimonial - Sharma Residence</h3>
                <p className="text-gray-400 text-sm mb-3">
                  Mr. Sharma shares his experience with our complete home renovation services.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">5.7K views • 1 month ago</span>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white py-1 px-3 rounded-full text-xs transition-colors">
                    Testimonial
                  </button>
                </div>
              </div>
            </div>
            
            {/* Video 5 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Smart Home Installation" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-teal-400 rounded-full p-3 bg-opacity-80 hover:bg-opacity-100 transition-all cursor-pointer">
                    <Play size={24} color="black" fill="black" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-teal-400 text-black px-2 py-1 text-xs font-bold rounded">
                  14:52
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-400 mb-2">Smart Home Installation Guide</h3>
                <p className="text-gray-400 text-sm mb-3">
                  Complete guide to installing smart home systems with automation and security features.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">19.8K views • 2 weeks ago</span>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white py-1 px-3 rounded-full text-xs transition-colors">
                    Electrical
                  </button>
                </div>
              </div>
            </div>
            
            {/* Video 6 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Water Purification System" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-teal-400 rounded-full p-3 bg-opacity-80 hover:bg-opacity-100 transition-all cursor-pointer">
                    <Play size={24} color="black" fill="black" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-teal-400 text-black px-2 py-1 text-xs font-bold rounded">
                  08:37
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-400 mb-2">Water Purification System Installation</h3>
                <p className="text-gray-400 text-sm mb-3">
                  Step-by-step guide for installing whole-house water purification systems.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">7.2K views • 3 weeks ago</span>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white py-1 px-3 rounded-full text-xs transition-colors">
                    Plumbing
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Load More Button */}
          <div className="mt-12 text-center">
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-10 rounded-full transition-colors duration-300 border border-gray-700">
              Load More Videos
            </button>
          </div>
          
          {/* Subscribe Section */}
          <div className="mt-16 bg-gray-900 p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-teal-400 mb-6">Subscribe to Our Channel</h2>
            <p className="text-gray-400 mb-6">
              Get the latest updates on our projects, tips, tutorials, and exclusive content by subscribing to our YouTube channel.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-black border border-gray-700 rounded-full px-6 py-3 flex-grow focus:outline-none focus:border-teal-400"
              />
              <button className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-3 px-8 rounded-full transition-colors duration-300">
                Subscribe Now
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