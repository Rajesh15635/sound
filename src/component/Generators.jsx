import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, Calendar } from 'lucide-react';

// Import images directly - this is the key change
import silentGeneratorImage from '../assets/sgen.jpg';
import kirloskarGeneratorImage from '../assets/kgen.jpg';
import dieselGeneratorImage from '../assets/dgen.jpg';

export default function Generators() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('generators');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Force re-render when the component mounts
  useEffect(() => {
    // Keep the active tab from where the user came from
    // Don't change it to 'generators' as we don't want to highlight this in the menu
    if (location.state && location.state.from) {
      setActiveTab(location.state.from);
    }
  }, [location.pathname, location.state]);
  
  const handleRegisterClick = () => {
    navigate('/register');
  };
  
  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleRentNowClick = (generatorType) => {
    navigate('/rreg', { state: { generatorType } });
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
        navigate('/videos');
        break;
      default:
        break;
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Generator data with imported images instead of relative paths
  const generators = [
    {
      id: 1,
      name: "Silent Generator",
      image: silentGeneratorImage, // Using imported image
      rate: 2000,
      description: "High-efficiency silent generator suitable for residential areas and events where noise reduction is essential.",
      features: ["Low noise operation", "Fuel efficient", "Portable design", "Automatic voltage regulation"]
    },
    {
      id: 2,
      name: "Kirloskar Generator",
      image: kirloskarGeneratorImage, // Using imported image
      rate: 500,
      description: "Reliable Kirloskar generator for continuous power supply during outages. Perfect for small businesses and homes.",
      features: ["Durable build", "Economic fuel consumption", "Easy maintenance", "Long running hours"]
    },
    {
      id: 3,
      name: "Diesel Generator",
      image: dieselGeneratorImage, // Using imported image
      rate: 700,
      description: "Powerful diesel generator designed for high-load applications and extended operation in demanding environments.",
      features: ["High power output", "Heavy-duty construction", "Extended runtime", "Suitable for industrial use"]
    }
  ];

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
            <button className="p-2 rounded-full border border-gray-700 hover:border-teal-400 transition-colors duration-300">
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
        
        {/* Services Header - Keep it consistent with Electrical & Plumbing */}
        <div className="py-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4 md:mb-0">
              Generator Rental Services
            </h1>
            <button className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-2 px-6 rounded-full text-sm transition-colors duration-300">
              Book Now
            </button>
          </div>
          
          {/* Rental Introduction */}
          <div className="bg-gray-900 rounded-lg p-6 mb-12 shadow-lg">
            <h2 className="text-xl font-bold text-teal-400 mb-4">Reliable Power Solutions for Every Need</h2>
            <p className="text-gray-400">
              Whether you're hosting an event, managing a construction site, or need backup power for your home or business, 
              our generator rental services provide dependable power solutions tailored to your requirements. All our generators 
              are regularly serviced and maintained to ensure optimal performance.
            </p>
          </div>
          
          {/* Generator Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {generators.map((generator) => (
              <div key={generator.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative">
                  <img 
                    src={generator.image} 
                    alt={generator.name} 
                    className="w-full h-56 object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 bg-teal-400 text-black font-bold py-1 px-3 rounded-full text-sm">
                    ₹{generator.rate}/day
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-teal-400 mb-3">{generator.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {generator.description}
                  </p>
                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-white mb-2">Features:</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {generator.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-teal-400 mr-2">•</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-teal-400">
                      <Calendar size={18} className="mr-2" />
                      <span className="font-semibold">Available Now</span>
                    </div>
                    <button 
                      className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-1 px-4 rounded-full text-sm transition-colors duration-300"
                      onClick={() => handleRentNowClick(generator.name)}
                    >
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Rental Process Section */}
          <div className="mt-16 bg-gray-900 p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-teal-400 mb-6">How Our Rental Process Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-black bg-opacity-50 p-6 rounded-lg relative transition-all duration-300 hover:bg-opacity-70">
                <span className="absolute -top-3 -left-3 w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center text-black font-bold">1</span>
                <h3 className="text-lg font-bold text-teal-400 mb-3 mt-4">Select Generator</h3>
                <p className="text-gray-400 text-sm">
                  Choose the generator that fits your power requirements and budget.
                </p>
              </div>
              <div className="bg-black bg-opacity-50 p-6 rounded-lg relative transition-all duration-300 hover:bg-opacity-70">
                <span className="absolute -top-3 -left-3 w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center text-black font-bold">2</span>
                <h3 className="text-lg font-bold text-teal-400 mb-3 mt-4">Book Dates</h3>
                <p className="text-gray-400 text-sm">
                  Select your rental period and confirm availability for your chosen dates.
                </p>
              </div>
              <div className="bg-black bg-opacity-50 p-6 rounded-lg relative transition-all duration-300 hover:bg-opacity-70">
                <span className="absolute -top-3 -left-3 w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center text-black font-bold">3</span>
                <h3 className="text-lg font-bold text-teal-400 mb-3 mt-4">Delivery</h3>
                <p className="text-gray-400 text-sm">
                  We deliver and set up the generator at your location with professional installation.
                </p>
              </div>
              <div className="bg-black bg-opacity-50 p-6 rounded-lg relative transition-all duration-300 hover:bg-opacity-70">
                <span className="absolute -top-3 -left-3 w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center text-black font-bold">4</span>
                <h3 className="text-lg font-bold text-teal-400 mb-3 mt-4">Return</h3>
                <p className="text-gray-400 text-sm">
                  Once your rental period ends, we'll pick up the generator from your location.
                </p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <button 
                className="bg-teal-400 hover:bg-teal-500 text-black font-bold py-3 px-10 rounded-full transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleContactClick();
                }}
              >
                Contact Us for Custom Rental Plans
              </button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 bg-gray-900 p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-teal-400 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-teal-400 mb-2">What size generator do I need?</h3>
                <p className="text-gray-400 text-sm">
                  The size depends on your power requirements. Our team can help assess your needs based on the appliances and equipment you plan to power.
                </p>
              </div>
              
              <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-teal-400 mb-2">Do you provide fuel with the generators?</h3>
                <p className="text-gray-400 text-sm">
                  Generators are provided with a full tank. Additional fuel can be arranged at market rates or you can source your own.
                </p>
              </div>
              
              <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-teal-400 mb-2">What happens if the generator malfunctions?</h3>
                <p className="text-gray-400 text-sm">
                  We provide 24/7 technical support. If there's an issue, our technicians will either fix it on-site or replace the unit at no extra cost.
                </p>
              </div>
              
              <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-teal-400 mb-2">Is there a security deposit required?</h3>
                <p className="text-gray-400 text-sm">
                  Yes, a refundable security deposit is required, which varies based on the generator model. The deposit is fully refunded upon return of the equipment in good condition.
                </p>
              </div>
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