
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo with hover effect */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/aeba8342-963f-4b2f-a213-83ab82c21db0.png" 
            alt="Fastest Academy Logo" 
            className="h-12 w-auto logo-hover"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-800 hover:text-fa-blue font-medium transition-colors">Home</a>
          <a href="#about" className="text-gray-800 hover:text-fa-blue font-medium transition-colors">About Us</a>
          <a href="#courses" className="text-gray-800 hover:text-fa-blue font-medium transition-colors">Courses</a>
          <a href="#gallery" className="text-gray-800 hover:text-fa-blue font-medium transition-colors">Gallery</a>
          <a href="#testimonials" className="text-gray-800 hover:text-fa-blue font-medium transition-colors">Testimonials</a>
          <a href="#contact" className="text-gray-800 hover:text-fa-blue font-medium transition-colors">Contact</a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-fa-blue"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#home" className="text-gray-800 hover:text-fa-blue font-medium transition-colors" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="text-gray-800 hover:text-fa-blue font-medium transition-colors" onClick={() => setIsOpen(false)}>About Us</a>
            <a href="#courses" className="text-gray-800 hover:text-fa-blue font-medium transition-colors" onClick={() => setIsOpen(false)}>Courses</a>
            <a href="#gallery" className="text-gray-800 hover:text-fa-blue font-medium transition-colors" onClick={() => setIsOpen(false)}>Gallery</a>
            <a href="#testimonials" className="text-gray-800 hover:text-fa-blue font-medium transition-colors" onClick={() => setIsOpen(false)}>Testimonials</a>
            <a href="#contact" className="text-gray-800 hover:text-fa-blue font-medium transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
