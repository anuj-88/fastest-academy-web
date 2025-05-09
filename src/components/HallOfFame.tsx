
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SectionAnimation } from './AnimatedIcons';
import { Button } from './ui/button';

// Placeholder data for achievers - this would come from an API or database in a real app
const achievers = [
  {
    id: 1,
    name: "Aditya Sharma",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    achievement: "All India Rank 5 in JEE Advanced 2024",
    year: 2024
  },
  {
    id: 2,
    name: "Priya Patel",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    achievement: "NEET Topper with 99.96 Percentile",
    year: 2024
  },
  {
    id: 3,
    name: "Rohan Mehra",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    achievement: "Gold Medal in National Science Olympiad",
    year: 2023
  },
  {
    id: 4,
    name: "Ananya Singh",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    achievement: "State Topper in UP Board Exam",
    year: 2024
  },
  {
    id: 5,
    name: "Vikram Malhotra",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    achievement: "Selected for IIT Bombay - Computer Science",
    year: 2023
  }
];

const HallOfFame = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === achievers.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? achievers.length - 1 : prev - 1));
  };
  
  return (
    <section id="hall-of-fame" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <SectionAnimation />
          </div>
          
          {/* Clickable heading that redirects to the Achievers page */}
          <Link to="/achievers" className="group inline-block">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-fa-blue transition-colors">
              Hall of <span className="text-fa-blue">Fame</span>
            </h2>
            <div className="w-20 h-1 bg-fa-blue mx-auto mb-1 transition-all duration-300 group-hover:w-32"></div>
            <p className="text-sm text-gray-500 mb-4">Click to see all achievers</p>
          </Link>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Meet our star performers who have achieved remarkable success through dedication, 
            hard work, and the guidance provided at Fastest Academy.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          {/* Carousel */}
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden h-[400px] md:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-r from-fa-blue/10 to-fa-light-blue/10 z-0"></div>
            
            <div className="flex h-full">
              {/* Image Section */}
              <div className="hidden md:block w-1/2 relative overflow-hidden">
                <img 
                  src={achievers[currentSlide].image}
                  alt={achievers[currentSlide].name}
                  className="absolute inset-0 w-full h-full object-cover hover-grow"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              </div>
              
              {/* Content Section - Full width on mobile, half on desktop */}
              <div className="w-full md:w-1/2 relative z-10 flex flex-col justify-center p-8 md:p-12">
                <div className="md:hidden mb-6 w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={achievers[currentSlide].image}
                    alt={achievers[currentSlide].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="bg-white/70 backdrop-blur-md p-6 rounded-lg md:bg-transparent md:p-0 md:backdrop-blur-none">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-fa-blue">{achievers[currentSlide].name}</h3>
                  <p className="text-lg md:text-xl font-medium mb-4">{achievers[currentSlide].achievement}</p>
                  <p className="text-gray-600 mb-6">Batch of {achievers[currentSlide].year}</p>
                  
                  <div className="flex space-x-3">
                    <Button 
                      variant="outline" 
                      className="border-fa-blue text-fa-blue hover:bg-fa-blue hover:text-white transition-colors"
                    >
                      Read Story
                    </Button>
                    <Link to="/achievers">
                      <Button className="bg-fa-blue hover:bg-fa-dark-blue text-white">
                        View All Achievers
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {achievers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? "bg-fa-blue w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Carousel controls */}
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white/70 border-gray-200 hover:bg-fa-blue hover:text-white z-20"
            onClick={prevSlide}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white/70 border-gray-200 hover:bg-fa-blue hover:text-white z-20"
            onClick={nextSlide}
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HallOfFame;
