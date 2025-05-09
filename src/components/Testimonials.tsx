
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { SectionAnimation } from './AnimatedIcons';

const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "CBSE Class XII Topper",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    rating: 5,
    testimonial: "Joining Fastest Academy was the best decision I made for my board exam preparation. The faculty's guidance and structured study approach helped me secure 98% in CBSE Class XII exams. The regular tests and feedback sessions were incredibly beneficial."
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "JEE Advanced Qualifier",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=934&q=80",
    rating: 5,
    testimonial: "The JEE coaching at Fastest Academy is extraordinary. The teachers focus on building concepts rather than just solving problems. Their problem-solving approaches and shortcuts significantly improved my speed and accuracy. I qualified JEE Advanced with a good rank thanks to their guidance."
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "NEET Qualifier",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4,
    testimonial: "NEET preparation was challenging, but the faculty at Fastest Academy made it manageable. Their focused approach to Biology, Chemistry, and Physics, along with regular mock tests modeled after the actual NEET exam, prepared me thoroughly. I secured a seat in a reputed medical college."
  },
  {
    id: 4,
    name: "Aditya Singh",
    role: "UP Board Topper",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 5,
    testimonial: "Fastest Academy's UP Board coaching program is tailored perfectly for the exam pattern. Mr. Prem Maurya's personal mentoring and the quality study materials provided helped me score 95% in the UP Board exams. The academy's environment is conducive to serious studying."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Auto-change slides every 6 seconds unless paused
  useEffect(() => {
    let slideInterval: number | undefined;
    
    if (!isPaused) {
      slideInterval = window.setInterval(() => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }, 6000);
    }
    
    return () => {
      if (slideInterval) clearInterval(slideInterval);
    };
  }, [isPaused]);
  
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setIsPaused(true); // Pause auto-rotation
    
    // Resume auto-rotation after 10 seconds
    setTimeout(() => setIsPaused(false), 10000);
  };
  
  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setIsPaused(true); // Pause auto-rotation
    
    // Resume auto-rotation after 10 seconds
    setTimeout(() => setIsPaused(false), 10000);
  };
  
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
    setIsPaused(true); // Pause auto-rotation
    
    // Resume auto-rotation after 10 seconds
    setTimeout(() => setIsPaused(false), 10000);
  };
  
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <SectionAnimation />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">What Our <span className="text-fa-blue">Students Say</span></h2>
          <div className="w-20 h-1 bg-fa-blue mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students about their experience at Fastest Academy and how it transformed their academic journey.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-fa-blue/10 shadow-md">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-fa-blue text-white p-2 rounded-full shadow-md">
                      <Quote className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonials[currentIndex].rating 
                            ? "fill-yellow-400 text-yellow-400" 
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">"{testimonials[currentIndex].testimonial}"</p>
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="font-semibold text-lg text-gray-900">{testimonials[currentIndex].name}</h4>
                    <p className="text-fa-blue">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center gap-4">
            <Button 
              variant="outline"
              size="icon" 
              className="rounded-full border-gray-300 hover:bg-fa-blue hover:text-white hover:border-fa-blue transition-all duration-300"
              onClick={goToPrevious}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? "bg-fa-blue scale-125" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <Button 
              variant="outline"
              size="icon"
              className="rounded-full border-gray-300 hover:bg-fa-blue hover:text-white hover:border-fa-blue transition-all duration-300"
              onClick={goToNext}
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Auto-slide indicator */}
          <div className="mt-4 flex justify-center items-center space-x-2">
            <div className={`h-2 w-2 rounded-full ${isPaused ? 'bg-gray-400' : 'bg-fa-blue animate-pulse'}`}></div>
            <span className="text-xs text-gray-500">{isPaused ? 'Paused' : 'Auto-playing'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
