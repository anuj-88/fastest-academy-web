import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/afcca53e-1510-491b-af5e-cf670506751e.png" 
                alt="Fastest Academy Logo" 
                className="h-84 w-auto logo-black-hover"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Fastest Academy is dedicated to providing quality education and helping students achieve academic excellence through personalized coaching and comprehensive study materials.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5 hover-grow" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5 hover-grow" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5 hover-grow" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5 hover-grow" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#courses" className="text-gray-400 hover:text-white transition-colors">Courses</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">CBSE Board Coaching</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">ICSE Board Coaching</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">UP Board Coaching</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">JEE Preparation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">NEET Preparation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">SSC Exam Coaching</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest courses, events, and educational insights.
            </p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="rounded-r-none bg-gray-800 border-gray-700 text-white"
              />
              <Button className="rounded-l-none bg-fa-blue hover:bg-fa-light-blue">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Fastest Academy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
