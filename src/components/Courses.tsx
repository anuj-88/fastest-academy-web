
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { SectionAnimation } from './AnimatedIcons';

const courseData = [
  {
    id: 1,
    title: "CBSE Board Exam Preparation",
    description: "Comprehensive coaching for CBSE board exams with subject-specific modules, regular tests, and detailed performance analysis.",
    subjects: ["Mathematics", "Science", "English", "Hindi", "Social Studies"],
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "ICSE Board Exam Preparation",
    description: "Expert coaching for ICSE board exams with comprehensive study materials and regular assessments to track progress.",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English"],
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "UP Board Exam Preparation",
    description: "Specialized coaching for UP Board students with Hindi and English medium options and focus on scoring techniques.",
    subjects: ["Hindi", "English", "Mathematics", "Science", "Social Science"],
    image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    color: "bg-yellow-500",
  },
  {
    id: 4,
    title: "JEE Preparation",
    description: "Intensive coaching for JEE Main and Advanced with focus on conceptual clarity, problem-solving, and exam strategies.",
    subjects: ["Mathematics", "Physics", "Chemistry"],
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    color: "bg-red-500",
  },
  {
    id: 5,
    title: "NEET Preparation",
    description: "Comprehensive coaching for NEET aspirants with special emphasis on MCQ practice, NCERT-based preparation, and regular tests.",
    subjects: ["Biology", "Physics", "Chemistry"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    color: "bg-purple-500",
  },
  {
    id: 6,
    title: "SSC Exam Preparation",
    description: "Strategic coaching for various SSC exams with comprehensive coverage of all subjects and regular mock tests.",
    subjects: ["General Studies", "Mathematics", "Reasoning", "English"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    color: "bg-indigo-500",
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <SectionAnimation />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Our <span className="text-fa-blue">Courses</span></h2>
          <div className="w-20 h-1 bg-fa-blue mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of coaching programs designed to help students excel in their academic pursuits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseData.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white font-semibold text-xl p-4">{course.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-700 mb-4">{course.description}</p>
                <h4 className="font-medium text-gray-900 mb-2">Subjects Covered:</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.subjects.map((subject, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-fa-blue text-sm px-2 py-1 rounded"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="text-fa-blue hover:text-fa-blue hover:bg-blue-50 p-0 flex items-center">
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-fa-blue hover:bg-fa-light-blue text-white font-medium px-6 py-2 rounded-md transition-colors">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
