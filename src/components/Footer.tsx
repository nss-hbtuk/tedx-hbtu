
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Event Info */}
          <div className="col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-white">TEDx</span>
              <span className="text-red-600">HBTU</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ideas Worth Spreading — An independently organized TED event by NSS HBTU, 
              bringing together innovative minds to share transformative ideas.
            </p>
            
            {/* NSS Logo placeholder */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">NSS</span>
              </div>
              <div>
                <p className="text-white font-semibold">Organized by</p>
                <p className="text-gray-300">NSS HBTU</p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-red-600 transition-colors">About Event</a></li>
              <li><a href="#speakers" className="text-gray-300 hover:text-red-600 transition-colors">Speakers</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-red-600 transition-colors">Team</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-red-600 transition-colors">Gallery</a></li>
              <li><a href="#partners" className="text-gray-300 hover:text-red-600 transition-colors">Partners</a></li>
              <li><a href="https://www.ted.com/about/programs-initiatives/tedx-program" className="text-gray-300 hover:text-red-600 transition-colors">TEDx Program</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-600" />
                <span className="text-gray-300">HBTU, Kanpur, UP</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-600" />
                <span className="text-gray-300">tedx@hbtu.ac.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-600" />
                <span className="text-gray-300">+91 9876543210</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-lg font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                  <span className="text-white text-sm font-bold">IG</span>
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                  <span className="text-white text-sm font-bold">LI</span>
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                  <span className="text-white text-sm font-bold">YT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 TEDxHBTU. This independent TEDx event is operated under license from TED.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <span className="text-gray-600">|</span>
              <a href="https://nss.hbtu.ac.in" className="text-gray-400 hover:text-red-600 text-sm">NSS HBTU</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
