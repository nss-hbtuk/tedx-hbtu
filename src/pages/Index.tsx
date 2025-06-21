
import Hero from "@/components/Hero";
import About from "@/components/About";
import Speakers from "@/components/Speakers";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Speakers />
      <Team />
      <Gallery />
      <Partners />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
