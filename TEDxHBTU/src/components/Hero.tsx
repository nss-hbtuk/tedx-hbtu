import React from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Red accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/10 to-transparent" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>
      
      {/* HBTU Logo */}
      <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20 overflow-hidden">
        <img 
          src="/hbtu-logo.svg" 
          alt="HBTU Logo" 
          className="w-full h-full object-contain p-2"
          onError={(e) => {
            // Fallback to text if image fails to load
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <span className="text-white text-xs font-bold hidden">HBTU</span>
      </div>
      
      {/* NSS HBTU Logo */}
      <div className="absolute top-8 right-8 w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-red-600/40 overflow-hidden">
        <img 
          src="/nss-logo.svg" 
          alt="NSS HBTU Logo" 
          className="w-full h-full object-contain p-2"
          onError={(e) => {
            // Fallback to text if image fails to load
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <span className="text-white text-xs font-bold hidden">NSS</span>
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl font-bold mb-6">
            <span className="text-white">TEDx</span>
            <span className="text-red-600">HBTU</span>
          </h1>
          <div className="h-1 w-32 bg-red-600 mx-auto mb-8" />
          <p className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed">
            Ideas Worth Spreading — Powered by <span className="text-red-600 font-semibold">NSS HBTU</span>
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-12">
          <div className="flex items-center gap-2 text-white/80">
            <CalendarDays className="w-5 h-5" />
            <span className="text-lg">Coming August 2024</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-white/30" />
          <div className="flex items-center gap-2 text-white/80">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">HBTU, Kanpur</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Register Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white bg-white/10 hover:bg-white/20 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
