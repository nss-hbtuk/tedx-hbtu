import { Button } from "@/components/ui/button";

const Partners = () => {
  const sponsors = [
    { name: "Tech Corp", logo: "TC", tier: "Presenting" },
    { name: "Innovation Labs", logo: "IL", tier: "Gold" },
    { name: "Future Systems", logo: "FS", tier: "Gold" },
    { name: "Digital Solutions", logo: "DS", tier: "Silver" },
    { name: "Creative Studio", logo: "CS", tier: "Silver" },
    { name: "Startup Hub", logo: "SH", tier: "Bronze" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6">Partners & Sponsors</h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're grateful for the support of our partners who believe in the power of ideas and innovation.
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Presenting Sponsor */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-8">Presenting Partner</h3>
            <div className="flex justify-center">
              <div className="w-48 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center border-2 border-red-600">
                <span className="text-2xl font-bold text-red-600">TC</span>
              </div>
            </div>
          </div>
          
          {/* Gold Sponsors */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Gold Partners</h3>
            <div className="flex justify-center gap-8">
              {sponsors.filter(s => s.tier === "Gold").map((sponsor, index) => (
                <div key={index} className="w-32 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-700">{sponsor.logo}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Silver Sponsors */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Silver Partners</h3>
            <div className="flex justify-center gap-6">
              {sponsors.filter(s => s.tier === "Silver").map((sponsor, index) => (
                <div key={index} className="w-28 h-14 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-600">{sponsor.logo}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bronze Sponsors */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Bronze Partners</h3>
            <div className="flex justify-center gap-4">
              {sponsors.filter(s => s.tier === "Bronze").map((sponsor, index) => (
                <div key={index} className="w-24 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-500">{sponsor.logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-4">Become a Partner</h3>
            <p className="text-gray-600 mb-6">
              Join us in spreading ideas worth sharing. Partner with TEDxHBTU and connect with innovation leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                Partnership Opportunities
              </Button>
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3">
                Download Sponsorship Deck
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
