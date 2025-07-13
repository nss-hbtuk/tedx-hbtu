
import Hero from "@/components/Hero";
import About from "@/components/About";
import Speakers from "@/components/Speakers";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <motion.div id="hero" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <Hero />
      </motion.div>
      <motion.div id="about" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <About />
      </motion.div>
      <motion.div id="speakers" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <Speakers />
      </motion.div>
      <motion.div id="team" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <Team />
      </motion.div>
      <motion.div id="gallery" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <Gallery />
      </motion.div>
      <motion.div id="partners" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <Partners />
      </motion.div>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
