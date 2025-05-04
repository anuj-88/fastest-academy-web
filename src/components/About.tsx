
import { GraduationCap, Users, Award } from 'lucide-react';
import { SectionAnimation } from './AnimatedIcons';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <SectionAnimation />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">About <span className="text-fa-blue">Fastest Academy</span></h2>
          <div className="w-20 h-1 bg-fa-blue mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Excellence in education since 2010, providing quality coaching and producing top results.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <SectionAnimation className="inline-block mr-2" />
              Our Story
            </h3>
            <p className="text-gray-700 mb-4">
              Founded by Mr. Prem Maurya, Fastest Academy has emerged as a leading coaching institute for students preparing for Board Exams and Competitive Tests. Our journey began with a simple mission: to provide quality education that empowers students to achieve academic excellence.
            </p>
            <p className="text-gray-700 mb-4">
              With years of experience in the education sector, we understand the challenges students face and have developed methodologies that make learning effective, engaging, and result-oriented.
            </p>
            <p className="text-gray-700">
              Today, we pride ourselves on our team of expert educators, comprehensive study materials, and a supportive learning environment that has helped thousands of students realize their academic dreams.
            </p>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden h-full">
              <img 
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" 
                alt="Academy building" 
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-center">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <GraduationCap className="text-fa-blue h-6 w-6" />
              </div>
              <h4 className="text-lg font-medium mb-2">Expert Faculty</h4>
              <p className="text-gray-600">
                Our educators are subject matter experts with years of teaching experience and proven track records.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Users className="text-fa-blue h-6 w-6" />
              </div>
              <h4 className="text-lg font-medium mb-2">Personalized Attention</h4>
              <p className="text-gray-600">
                Small batch sizes ensure that every student receives individual guidance and support.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Award className="text-fa-blue h-6 w-6" />
              </div>
              <h4 className="text-lg font-medium mb-2">Proven Results</h4>
              <p className="text-gray-600">
                Our students consistently achieve top ranks in board exams and competitive tests.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-8 text-center">Meet Our Founder</h3>
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Mr. Prem Maurya" 
                  className="rounded-full w-32 h-32 object-cover mx-auto border-4 border-white shadow-md"
                />
              </div>
              <div className="w-full md:w-3/4">
                <h4 className="text-lg font-medium mb-1">Mr. Prem Maurya</h4>
                <p className="text-fa-blue font-medium mb-4">Founder & Director</p>
                <p className="text-gray-700 mb-4">
                  With over 15 years of experience in education, Mr. Prem Maurya is a visionary leader who established Fastest Academy with the aim of transforming the coaching landscape. His innovative teaching methodologies and deep understanding of examination patterns have helped countless students achieve success.
                </p>
                <p className="text-gray-700">
                  A graduate from a prestigious university, Mr. Maurya brings academic excellence and passion to his role. His dedication to quality education and student welfare has made Fastest Academy a trusted name in the coaching industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
