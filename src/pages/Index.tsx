
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Courses />
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
