import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ShoppingBag, Menu } from 'lucide-react';
// Import the logo directly
import logoImage from '../assets/logorm.png';

export default function First() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleRegisterClick = () => {
    navigate('/register');
  };
  
  const handleContactClick = () => {
    navigate('/contact');
  };
  
  // Function to navigate to generators page
  const handleShoppingBagClick = () => {
    navigate('/generators'); // Navigate to the generators page
  };
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    
    // Fixed navigation cases - home should not redirect
    switch(tab) {
      case 'home':
        // For home tab, don't navigate anywhere - stay on the current page
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
        navigate('/videos');
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
        
        {/* Content Section */}
        {activeTab === 'home' && (
          <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24 relative z-10">
            <div className="md:w-1/2 space-y-8">
              <h1 className="font-bold leading-tight">
                <span className="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-red-500 font-extrabold tracking-wider">
                  SOUND SERVICE
                </span>
                <br />
                <span className="text-3xl md:text-5xl italic text-teal-300 mt-2 block">
                  Arumuganeri
                </span>
              </h1>
              <p className="text-gray-400 max-w-md text-lg">
                We will provide the <span className="text-teal-400 font-bold">"Best Sound Service"</span> at the reduced price
              </p>
              <div className="flex flex-wrap md:flex-nowrap gap-4 pt-4">
                <button 
                  className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-3 px-8 rounded-full transition-colors duration-300"
                  onClick={handleRegisterClick}
                >
                  REGISTER NOW
                </button>
                <button 
                  className="border border-teal-400 text-teal-400 hover:bg-teal-900 font-bold py-3 px-8 rounded-full flex items-center transition-all duration-300"
                  onClick={handleContactClick}
                >
                  CONTACT US <ChevronRight size={18} className="ml-1" />
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 relative mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-teal-400 bg-opacity-20 rounded-full blur-xl"></div>
                <img 
                  src={logoImage}
                  alt="SUNDARAM Logo"
                  className="mx-auto w-full max-w-md object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'interior' && (
          <div className="py-12 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4 md:mb-0">Interior Design Services</h1>
              <button className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-2 px-6 rounded-full text-sm transition-colors duration-300">
                Request Quote
              </button>
            </div>
          </div>
        )}
        
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