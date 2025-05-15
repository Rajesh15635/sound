import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronRight, ShoppingBag, Menu, Heart, ArrowRight } from 'lucide-react';

export default function Interior() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('interior');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Force re-render when the component mounts
  useEffect(() => {
    // Ensure active tab is set correctly when mounted
    setActiveTab('interior');
  }, [location.pathname]);
  
  const handleRegisterClick = () => {
    navigate('/register');
  };
  
  const handleContactClick = () => {
    navigate('/contact');
  };
  
  // Add handler for shop bag icon
  const handleShopBagClick = () => {
    navigate('/generators');
  };
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    
    // Added switch statement for clearer routing logic
    switch(tab) {
      case 'home':
        navigate('/first'); // Always navigate to first.jsx for home
        break;
      case 'interior':
        navigate('/interior');
        break;
      case 'electrical':
        navigate('/ep');
        break;
      case 'contact':
        navigate('/contact');
        break;
      case 'videos':
        navigate('/videos'); // If you have a videos route
        break;
      default:
        break;
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
              onClick={(e) => {
                e.preventDefault();
                handleTabClick('home');
              }}
            >
              HOME
            </a>
            <a 
              href="#" 
              className={`hover:text-teal-400 transition-colors duration-300 ${activeTab === 'interior' ? 'text-teal-400' : ''}`} 
              onClick={(e) => {
                e.preventDefault();
                handleTabClick('interior');
              }}
            >
              INTERIOR
            </a>
            <a 
              href="#" 
              className={`hover:text-teal-400 transition-colors duration-300 ${activeTab === 'electrical' ? 'text-teal-400' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick('electrical');
              }}
            >
              ELECTRICAL & PLUMBING
            </a>
            <a 
              href="#" 
              className="hover:text-teal-400 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                handleTabClick('videos');
              }}
            >
              VIDEOS
            </a>
            <a 
              href="#" 
              className={`hover:text-teal-400 transition-colors duration-300 ${activeTab === 'contact' ? 'text-teal-400' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick('contact');
              }}
            >
              CONTACT
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 rounded-full border border-gray-700 hover:border-teal-400 transition-colors duration-300"
              onClick={handleShopBagClick}
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
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick('home');
                }}
              >
                HOME
              </a>
              <a 
                href="#" 
                className={`hover:text-teal-400 ${activeTab === 'interior' ? 'text-teal-400' : ''}`} 
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick('interior');
                }}
              >
                INTERIOR
              </a>
              <a 
                href="#" 
                className={`hover:text-teal-400 ${activeTab === 'electrical' ? 'text-teal-400' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick('electrical');
                }}
              >
                ELECTRICAL & PLUMBING
              </a>
              <a 
                href="#" 
                className="hover:text-teal-400"
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick('videos');
                }}
              >
                VIDEOS
              </a>
              <a 
                href="#" 
                className={`hover:text-teal-400 ${activeTab === 'contact' ? 'text-teal-400' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick('contact');
                }}
              >
                CONTACT
              </a>
            </div>
          </div>
        )}
        
        {/* Interior Hero Section */}
        <div className="py-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4 md:mb-0">
              Interior Design Services
            </h1>
            <button className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-2 px-6 rounded-full text-sm transition-colors duration-300">
              Request Free Consultation
            </button>
          </div>
          
          {/* Featured Projects Slider */}
          <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-xl mb-16">
            <div className="relative">
              <img 
                src="/api/placeholder/1200/500" 
                alt="Luxury Interior Design" 
                className="w-full h-80 md:h-96 object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
                <span className="text-teal-400 text-sm font-bold mb-2 block">FEATURED PROJECT</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Modern Minimalist Living Space</h2>
                <p className="text-gray-300 text-sm md:text-base mb-6">
                  A perfect blend of functionality and aesthetics, this project transforms ordinary spaces into extraordinary living environments.
                </p>
                <button className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-2 px-6 rounded-full text-sm transition-colors duration-300 flex items-center">
                  View Project <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Interior Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Residential Interior Design" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <button className="absolute top-4 right-4 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all duration-300">
                  <Heart size={18} className="text-white hover:text-teal-400" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-400 mb-3">Residential Interior Design</h3>
                <p className="text-gray-400 text-sm mb-5">
                  Transform your living spaces with personalized design solutions that blend style, comfort, and functionality.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-teal-400 font-semibold">₹25,000 onwards</span>
                  <button className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-1 px-4 rounded-full text-sm transition-colors duration-300">
                    Details
                  </button>
                </div>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Commercial Interior Design" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <button className="absolute top-4 right-4 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all duration-300">
                  <Heart size={18} className="text-white hover:text-teal-400" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-400 mb-3">Commercial Interior Design</h3>
                <p className="text-gray-400 text-sm mb-5">
                  Create impressive commercial spaces that enhance brand identity and improve workflow efficiency.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-teal-400 font-semibold">₹45,000 onwards</span>
                  <button className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-1 px-4 rounded-full text-sm transition-colors duration-300">
                    Details
                  </button>
                </div>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Kitchen Renovation" 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <button className="absolute top-4 right-4 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all duration-300">
                  <Heart size={18} className="text-white hover:text-teal-400" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-400 mb-3">Kitchen Renovation</h3>
                <p className="text-gray-400 text-sm mb-5">
                  Redesign your kitchen with modern layouts, premium materials, and smart storage solutions.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-teal-400 font-semibold">₹30,000 onwards</span>
                  <button className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-1 px-4 rounded-full text-sm transition-colors duration-300">
                    Details
                  </button>
                </div>
              </div>
            </div>
            
            {/* Services 4-6 remain the same */}
            {/* Additional services... */}
          </div>
          
          {/* Design Process Section */}
          <div className="mt-16 bg-gray-900 p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-teal-400 mb-8">Our Interior Design Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-black bg-opacity-50 p-6 rounded-lg transition-all duration-300 hover:bg-opacity-70 relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center text-black font-bold">1</div>
                <h3 className="text-lg font-bold text-teal-400 mb-3 mt-4">Consultation</h3>
                <p className="text-gray-400 text-sm">
                  We begin with understanding your vision, requirements, and budget constraints to create a tailored approach.
                </p>
              </div>
              <div className="bg-black bg-opacity-50 p-6 rounded-lg transition-all duration-300 hover:bg-opacity-70 relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center text-black font-bold">2</div>
                <h3 className="text-lg font-bold text-teal-400 mb-3 mt-4">Design Development</h3>
                <p className="text-gray-400 text-sm">
                  Our designers create detailed sketches, mood boards, and 3D visualizations of your space.
                </p>
              </div>
              <div className="bg-black bg-opacity-50 p-6 rounded-lg transition-all duration-300 hover:bg-opacity-70 relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center text-black font-bold">3</div>
                <h3 className="text-lg font-bold text-teal-400 mb-3 mt-4">Implementation</h3>
                <p className="text-gray-400 text-sm">
                  Our skilled craftsmen and professionals bring the design to life with meticulous attention to detail.
                </p>
              </div>
              <div className="bg-black bg-opacity-50 p-6 rounded-lg transition-all duration-300 hover:bg-opacity-70 relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center text-black font-bold">4</div>
                <h3 className="text-lg font-bold text-teal-400 mb-3 mt-4">Finishing & Handover</h3>
                <p className="text-gray-400 text-sm">
                  Final touches are applied, and the transformed space is handed over for your enjoyment.
                </p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <button 
                className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-3 px-10 rounded-full transition-colors duration-300"
                onClick={handleContactClick}
              >
                Schedule Your Design Consultation
              </button>
            </div>
          </div>
          
          {/* Rest of the component stays the same */}
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