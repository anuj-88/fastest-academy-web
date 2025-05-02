
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
  
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  
  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Student <span className="text-fa-blue">Testimonials</span></h2>
          <div className="w-20 h-1 bg-fa-blue mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students about their experience at Fastest Academy and how it transformed their academic journey.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-full md:w-1/4 flex justify-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-100 shadow-md">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-3/4 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
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
                  <p className="text-gray-700 italic mb-4">"{testimonials[currentIndex].testimonial}"</p>
                  <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-fa-blue">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center gap-4">
            <Button 
              variant="outline"
              size="icon" 
              className="rounded-full border-gray-300 hover:bg-fa-blue hover:text-white hover:border-fa-blue"
              onClick={goToPrevious}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="icon"
              className="rounded-full border-gray-300 hover:bg-fa-blue hover:text-white hover:border-fa-blue"
              onClick={goToNext}
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-4 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? "bg-fa-blue" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
