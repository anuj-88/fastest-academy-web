
import { useState, useEffect, useRef } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionAnimation } from './AnimatedIcons';
import { Link } from "react-router-dom";

// Placeholder data - would come from an API/database in a real application
const achievers = [
  {
    id: 1,
    name: "Ritika Sharma",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    achievement: "Secured AIR 15 in JEE Advanced 2024",
    institute: "IIT Delhi - Computer Science",
    class: "Batch of 2023-24"
  },
  {
    id: 2,
    name: "Adithya Kumar",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    achievement: "NEET 2024 - 99.8 Percentile",
    institute: "AIIMS Delhi",
    class: "Batch of 2023-24"
  },
  {
    id: 3,
    name: "Meera Patel",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    achievement: "Gold Medalist - International Science Olympiad",
    institute: "Representing India at ISF 2024",
    class: "Class XII Student"
  },
  {
    id: 4,
    name: "Vikram Singh",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    achievement: "UP Board Topper 2024 with 98.6%",
    institute: "Secured admission in BITS Pilani",
    class: "Batch of 2023-24"
  },
  {
    id: 5,
    name: "Priya Desai",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    achievement: "National Talent Search Examination Scholar",
    institute: "Qualified with top state rank",
    class: "Class X Student"
  },
  {
    id: 6,
    name: "Rahul Mehta",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    achievement: "Selected for National Level Science Exhibition",
    institute: "Project on Renewable Energy",
    class: "Class XI Student"
  }
];

const AchievementsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Handle autoplay functionality
  useEffect(() => {
    let interval: number;
    
    if (autoplay) {
      interval = window.setInterval(() => {
        if (currentSlide < achievers.length - 1) {
          setCurrentSlide(prev => prev + 1);
        } else {
          setCurrentSlide(0);
        }
      }, 4000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, currentSlide]);
  
  // Pause autoplay when user interacts with carousel
  const pauseAutoplay = () => {
    setAutoplay(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000);
  };
  
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none">
          <path fill="#0066CC" d="M0 0h16v16H0z" opacity=".2" />
          <path fill="#0066CC" d="M16 0h16v16H16z" opacity=".1" />
          <path fill="#0066CC" d="M32 0h16v16H32z" opacity=".05" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <SectionAnimation />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Our <span className="text-fa-blue">Star Achievers</span></h2>
          <div className="w-20 h-1 bg-fa-blue mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the exceptional students who've reached incredible milestones with our guidance and mentorship.
          </p>
        </div>
        
        {/* Main carousel component */}
        <div className="max-w-6xl mx-auto" onMouseEnter={pauseAutoplay} onTouchStart={pauseAutoplay}>
          <Carousel 
            ref={carouselRef}
            className="w-full"
            onMouseEnter={pauseAutoplay}
            opts={{
              align: "start",
              loop: true
            }}
          >
            <CarouselContent>
              {achievers.map((achiever) => (
                <CarouselItem key={achiever.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1">
                    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                      <CardContent className="p-0 flex flex-col h-full">
                        {/* Image with gradient overlay */}
                        <div className="relative h-64 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
                          <img 
                            src={achiever.image}
                            alt={achiever.name}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                            <h3 className="text-white text-xl font-bold mb-1">{achiever.name}</h3>
                            <p className="text-white/90 text-sm">{achiever.class}</p>
                          </div>
                        </div>
                        
                        {/* Achievement details */}
                        <div className="p-5 flex flex-col flex-grow">
                          <div className="bg-blue-50 rounded-lg p-3 mb-4">
                            <p className="text-fa-blue font-medium">{achiever.achievement}</p>
                            <p className="text-gray-600 text-sm">{achiever.institute}</p>
                          </div>
                          
                          <Link to={`/achievers/${achiever.id}`} className="mt-auto">
                            <Button variant="link" className="text-fa-blue hover:text-fa-dark-blue p-0 h-auto">
                              Read Success Story <ArrowRight className="h-4 w-4 ml-1" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex items-center justify-center mt-8">
              <CarouselPrevious className="relative static mr-2 translate-y-0 bg-white hover:bg-fa-blue hover:text-white" />
              
              {/* Indicators */}
              <div className="flex gap-2 items-center mx-4">
                {achievers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      pauseAutoplay();
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? "bg-fa-blue w-5" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <CarouselNext className="relative static ml-2 translate-y-0 bg-white hover:bg-fa-blue hover:text-white" />
            </div>
          </Carousel>
          
          {/* Autoplay indicator */}
          <div className="flex justify-center mt-4 items-center space-x-2">
            <div className={`h-2 w-2 rounded-full ${autoplay ? 'bg-fa-blue animate-pulse' : 'bg-gray-400'}`}></div>
            <span className="text-xs text-gray-500">{autoplay ? 'Auto-playing' : 'Paused'}</span>
          </div>
          
          {/* View all button */}
          <div className="flex justify-center mt-8">
            <Link to="/achievers">
              <Button className="bg-fa-blue hover:bg-fa-dark-blue text-white px-6">
                View All Achievers
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsCarousel;
