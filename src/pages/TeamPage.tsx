import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Team from "@/components/Team";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-24 pb-16 bg-gradient-to-br from-black via-gray-900 to-black"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="text-red-600">Team</span>
          </h1>
          <div className="h-1 w-32 bg-red-600 mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Meet the passionate individuals behind TEDxHBTU who are working tirelessly 
            to bring ideas worth spreading to our community.
          </p>
        </div>
      </motion.section>

      {/* Team Component */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Team />
      </motion.div>

      <Footer />
    </div>
  );
};

export default TeamPage; 