
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mt-8 md:mt-0 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Unlock Your Academic Potential with <span className="text-fa-blue">Fastest Academy</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6 md:pr-8">
              Expert coaching for Board Exams and Competitive Entrance Tests with personalized attention and proven results. Join us and experience excellence in education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-fa-blue hover:bg-fa-light-blue text-white font-medium px-6 py-2 rounded-md transition-colors w-full sm:w-auto">
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-fa-blue text-fa-blue hover:bg-fa-blue hover:text-white transition-colors w-full sm:w-auto">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-fa-blue/20 rounded-lg blur"></div>
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Students learning" 
                className="rounded-lg shadow-lg relative w-full max-w-md mx-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
