
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from 'lucide-react';
import { SectionAnimation } from './AnimatedIcons';

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Classroom session",
    category: "classroom",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Faculty meeting",
    category: "faculty",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1511225317863-5bbd54890633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Award ceremony",
    category: "events",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1232&q=80",
    alt: "Practical session",
    category: "classroom",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    alt: "Science lab",
    category: "classroom",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    alt: "Annual day celebration",
    category: "events",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Faculty orientation",
    category: "faculty",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    alt: "Student achievement",
    category: "events",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");
  
  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);
  
  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <SectionAnimation />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2"><span className="text-fa-blue">Gallery</span></h2>
          <div className="w-20 h-1 bg-fa-blue mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get a glimpse of our facilities, classroom sessions, faculty, and various events organized at Fastest Academy.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button 
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "all" 
                  ? "bg-fa-blue text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter("classroom")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "classroom" 
                  ? "bg-fa-blue text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Classroom
            </button>
            <button 
              onClick={() => setFilter("faculty")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "faculty" 
                  ? "bg-fa-blue text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Faculty
            </button>
            <button 
              onClick={() => setFilter("events")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "events" 
                  ? "bg-fa-blue text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Events
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover hover-grow"
              />
            </div>
          ))}
        </div>
        
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-0">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full z-10 hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Gallery image" 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
