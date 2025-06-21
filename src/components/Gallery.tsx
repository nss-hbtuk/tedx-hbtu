
const Gallery = () => {
  const galleryItems = [
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      title: "Event Setup"
    },
    {
      type: "image", 
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      title: "Speaker Preparation"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      title: "Technology Setup"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      title: "Team Collaboration"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      title: "Creative Process"
    },
    {
      type: "video",
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      title: "Countdown Trailer"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Gallery & Media</h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a behind-the-scenes look at TEDxHBTU preparation and experience the energy of ideas coming to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer"
            >
              <img 
                src={item.src} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  {item.type === "video" && (
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  )}
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">
                    {item.type === "video" ? "Watch Video" : "View Image"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Follow us on social media for the latest updates, behind-the-scenes content, and countdown to TEDxHBTU.
            </p>
            <div className="flex justify-center gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                <span className="text-white font-bold">IG</span>
              </div>
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                <span className="text-white font-bold">LI</span>
              </div>
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                <span className="text-white font-bold">YT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
