
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HallOfFame from "@/components/HallOfFame";
import WhatsAppButton from "@/components/WhatsAppButton";
import CourseEnquiryForm from "@/components/CourseEnquiryForm";
import AchievementsCarousel from "@/components/AchievementsCarousel";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <AchievementsCarousel />
      <CourseEnquiryForm />
      <Gallery />
      <HallOfFame />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
