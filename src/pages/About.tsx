import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarDays, MapPin, Users, Target, Heart, Lightbulb } from "lucide-react";

const About = () => {
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
            <span className="text-white">About </span>
            <span className="text-red-600">TEDxHBTU</span>
          </h1>
          <div className="h-1 w-32 bg-red-600 mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the story behind TEDxHBTU and the passionate team at NSS HBTU 
            bringing ideas worth spreading to our community.
          </p>
        </div>
      </motion.section>

      {/* What is TEDx Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">What is TEDx?</h2>
              <div className="h-1 w-24 bg-red-600 mb-6" />
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                TEDx events are independent TED-like conferences that bring together bright minds 
                to give talks that are idea-focused, and on a wide range of subjects, to foster 
                learning, inspiration and wonder – and provoke conversations that matter.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The "x" in TEDx stands for independently organized TED event. TEDx events are 
                planned and coordinated independently, on a community-by-community basis, under 
                a free license from TED.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Learn More About TED
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-black">Ideas</h4>
                    <p className="text-gray-600 text-sm">Worth Spreading</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-black">Community</h4>
                    <p className="text-gray-600 text-sm">Driven Event</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-black">Impact</h4>
                    <p className="text-gray-600 text-sm">Local & Global</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-black">Passion</h4>
                    <p className="text-gray-600 text-sm">For Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Event Details Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">TEDxHBTU 2024</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our inaugural TEDx event promises to be a transformative experience for 
              the HBTU community and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <CalendarDays className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-black mb-2">When</h3>
              <p className="text-gray-600 mb-4">August 2024</p>
              <p className="text-sm text-gray-500">
                Exact date and time will be announced soon. Stay tuned for updates!
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <MapPin className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-black mb-2">Where</h3>
              <p className="text-gray-600 mb-4">HBTU Campus, Kanpur</p>
              <p className="text-sm text-gray-500">
                Harcourt Butler Technical University, Kanpur, Uttar Pradesh, India
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Target className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-black mb-2">Theme</h3>
              <p className="text-gray-600 mb-4">"Shifting Lenses"</p>
              <p className="text-sm text-gray-500">
                Exploring new perspectives and challenging conventional thinking
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About NSS HBTU Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-red-600">NSS</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black">National Service Scheme</h3>
                    <p className="text-gray-600">HBTU Chapter</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2" />
                    <p className="text-gray-700">Community service and social development</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2" />
                    <p className="text-gray-700">Student-led initiatives for positive change</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2" />
                    <p className="text-gray-700">Bridging academic learning with real-world impact</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-black mb-6">About NSS HBTU</h2>
              <div className="h-1 w-24 bg-red-600 mb-6" />
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The National Service Scheme (NSS) at Harcourt Butler Technical University 
                is a student-driven organization committed to community service and social 
                development. Our mission is to create positive change through meaningful 
                engagement with society.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                By organizing TEDxHBTU, we're extending our commitment to community service 
                into the realm of ideas and innovation. We believe that spreading powerful 
                ideas is one of the most impactful ways to serve our community and society.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our team of dedicated student volunteers works tirelessly to bring together 
                speakers, organizers, and attendees who share our passion for learning, 
                growth, and positive change.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white mr-4">
                Join NSS HBTU
              </Button>
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Vision & Mission Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-black text-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Vision & Mission</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To create a platform where innovative ideas flourish, where diverse 
                perspectives converge, and where the HBTU community is inspired to 
                think differently and act boldly for a better tomorrow.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To organize an exceptional TEDx event that brings together thought leaders, 
                innovators, and change-makers to share transformative ideas that inspire 
                action and create lasting impact in our community and beyond.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default About; 