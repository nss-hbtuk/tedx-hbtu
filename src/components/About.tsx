
const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6">About TEDxHBTU</h2>
          <div className="h-1 w-24 bg-red-600 mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-black">The Spirit of TEDx</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              TEDx events are independent TED-like conferences that bring together bright minds to give talks that are idea-focused, 
              and on a wide range of subjects, to foster learning, inspiration and wonder – and provoke conversations that matter.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At TEDxHBTU, we're creating a platform where innovative ideas meet passionate storytelling, 
              where students, faculty, and industry leaders converge to share transformative insights.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-black">NSS HBTU Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              The National Service Scheme (NSS) at HBTU is committed to community service and social development. 
              By organizing TEDxHBTU, we're extending our mission to create positive change through the power of ideas.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-600">
              <h4 className="text-xl font-semibold text-black mb-2">Event Theme: "Shifting Lenses"</h4>
              <p className="text-gray-700">
                Exploring new perspectives, challenging conventional thinking, and discovering innovative solutions 
                to shape our future.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">💡</span>
            </div>
            <h4 className="text-xl font-semibold text-black mb-2">Innovation</h4>
            <p className="text-gray-600">Groundbreaking ideas that push boundaries and inspire change.</p>
          </div>
          
          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">🤝</span>
            </div>
            <h4 className="text-xl font-semibold text-black mb-2">Collaboration</h4>
            <p className="text-gray-600">Building connections that foster growth and mutual learning.</p>
          </div>
          
          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">🌟</span>
            </div>
            <h4 className="text-xl font-semibold text-black mb-2">Impact</h4>
            <p className="text-gray-600">Creating lasting change that extends beyond the event.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
