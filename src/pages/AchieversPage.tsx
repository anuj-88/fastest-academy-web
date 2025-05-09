
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

// Placeholder data - in a real app, this would come from an API or database
const achieversList = [
  {
    id: 1,
    name: "Aditya Sharma",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    achievement: "All India Rank 5 in JEE Advanced 2024",
    year: 2024,
    course: "JEE Advanced",
    testimonial: "The focused approach at Fastest Academy helped me tackle the toughest problems with ease. The faculty's guidance was crucial to my success."
  },
  {
    id: 2,
    name: "Priya Patel",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    achievement: "NEET Topper with 99.96 Percentile",
    year: 2024,
    course: "NEET",
    testimonial: "The biology and chemistry faculty at Fastest Academy provided insights that weren't available in textbooks. The regular mock tests prepared me thoroughly."
  },
  {
    id: 3,
    name: "Rohan Mehra",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    achievement: "Gold Medal in National Science Olympiad",
    year: 2023,
    course: "Olympiad",
    testimonial: "The advanced problem-solving techniques I learned at Fastest Academy were key to my Olympiad success. The mentors pushed me to excel beyond the curriculum."
  },
  {
    id: 4,
    name: "Ananya Singh",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    achievement: "State Topper in UP Board Exam",
    year: 2024,
    course: "State Board",
    testimonial: "The structured study plan and personal attention from teachers helped me score consistently high marks. The exam tips were incredibly useful."
  },
  {
    id: 5,
    name: "Vikram Malhotra",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    achievement: "Selected for IIT Bombay - Computer Science",
    year: 2023,
    course: "JEE Advanced",
    testimonial: "The competition at Fastest Academy pushed me to improve continuously. The faculty's deep understanding of JEE patterns was invaluable."
  },
  {
    id: 6,
    name: "Neha Gupta",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    achievement: "AIIMS Delhi - MBBS Admission",
    year: 2023,
    course: "NEET",
    testimonial: "The NEET-specific material and question banks at Fastest Academy were comprehensive and challenging, preparing me for every possible question pattern."
  },
  {
    id: 7,
    name: "Arjun Kumar",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    achievement: "All India Rank 18 in JEE Mains",
    year: 2024,
    course: "JEE Mains",
    testimonial: "The systematic approach to problem-solving taught at Fastest Academy made even the most complex questions manageable."
  },
  {
    id: 8,
    name: "Sanya Reddy",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    achievement: "Silver Medal in International Maths Olympiad",
    year: 2023,
    course: "Olympiad",
    testimonial: "The advanced mathematics coaching at Fastest Academy exposed me to international-level problem-solving techniques that were crucial for the Olympiad."
  }
];

const courses = ["All", "JEE Advanced", "JEE Mains", "NEET", "Olympiad", "State Board"];
const years = ["All", "2024", "2023", "2022"];

const AchieversPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [courseFilter, setCourseFilter] = useState("All");
  const [yearFilter, setYearFilter] = useState("All");

  // Filter achievers based on search term and filter selections
  const filteredAchievers = achieversList.filter(achiever => {
    const matchesSearch = achiever.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          achiever.achievement.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCourse = courseFilter === "All" || achiever.course === courseFilter;
    const matchesYear = yearFilter === "All" || achiever.year.toString() === yearFilter;
    
    return matchesSearch && matchesCourse && matchesYear;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-fa-blue">Stars</span>
            </h1>
            <div className="w-24 h-1 bg-fa-blue mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the remarkable achievements of our students who exemplify excellence
              and dedication in their academic pursuits. Each story represents countless 
              hours of hard work and determination.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="search" className="text-sm font-medium mb-2 block text-gray-700">
                  Search by name or achievement
                </label>
                <Input
                  id="search"
                  placeholder="Search achievers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="course-filter" className="text-sm font-medium mb-2 block text-gray-700">
                  Filter by course
                </label>
                <Select value={courseFilter} onValueChange={setCourseFilter}>
                  <SelectTrigger id="course-filter">
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course} value={course}>
                        {course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="year-filter" className="text-sm font-medium mb-2 block text-gray-700">
                  Filter by year
                </label>
                <Select value={yearFilter} onValueChange={setYearFilter}>
                  <SelectTrigger id="year-filter">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Results count */}
          <p className="text-gray-600 mb-6">
            Showing {filteredAchievers.length} achiever{filteredAchievers.length !== 1 ? 's' : ''}
          </p>

          {/* Achievers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAchievers.map((achiever) => (
              <Card key={achiever.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={achiever.image} 
                    alt={achiever.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-fa-blue text-white text-sm font-medium py-1 px-2 rounded">
                    {achiever.year}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">{achiever.name}</h3>
                    <p className="text-fa-blue font-medium">{achiever.achievement}</p>
                    <p className="text-gray-500 text-sm mt-1">{achiever.course}</p>
                  </div>
                  <blockquote className="italic text-gray-600 text-sm border-l-2 border-fa-blue pl-4 mt-4">
                    "{achiever.testimonial}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No results message */}
          {filteredAchievers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No achievers found matching your filters.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AchieversPage;
