import { Button } from "@/components/ui/button";

const Team = () => {
  const teamMembers = [
    {
      name: "Aditya Sharma",
      role: "Event Coordinator",
      department: "NSS President",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Priya Patel",
      role: "Content & Curation",
      department: "Computer Science",
      image: "https://images.unsplash.com/photo-1494790108755-2616c90fad17?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Rohit Gupta",
      role: "Web & Technology",
      department: "Information Technology",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sneha Verma",
      role: "Design & Graphics",
      department: "Architecture",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Arjun Singh",
      role: "Marketing & Outreach",
      department: "Mechanical Engineering",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Kavya Reddy",
      role: "Logistics & Operations",
      department: "Civil Engineering",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6">Organizing Team</h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated NSS HBTU student team bringing TEDxHBTU to life through their passion, creativity, and teamwork.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-red-600/60 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-red-200">{member.role}</p>
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-red-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300">{member.department}</p>
                  <div className="mt-4 text-sm text-gray-400">
                    Passionate about creating meaningful connections and spreading ideas that matter.
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-black mb-4">Join Our Team</h3>
            <p className="text-gray-600 mb-6">
              Want to be part of the TEDxHBTU organizing team? We're always looking for passionate volunteers!
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              Volunteer with Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
