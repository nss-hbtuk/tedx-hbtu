
import { Button } from "@/components/ui/button";

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Sarah Chen",
      title: "AI Researcher & Tech Innovator",
      topic: "The Future of Human-AI Collaboration",
      image: "https://images.unsplash.com/photo-1494790108755-2616c90fad17?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Rajesh Kumar",
      title: "Social Entrepreneur",
      topic: "Building Sustainable Communities",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Prof. Maria Rodriguez",
      title: "Environmental Scientist",
      topic: "Climate Action Through Innovation",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Coming Soon",
      title: "More Speakers Announced",
      topic: "Stay Tuned for Updates",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6">Our Speakers</h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionaries, innovators, and change-makers who will share their transformative ideas at TEDxHBTU.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{speaker.name}</h3>
                <p className="text-red-600 font-semibold mb-3">{speaker.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{speaker.topic}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3"
          >
            Apply as Speaker
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
