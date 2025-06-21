
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

const FloatingCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isExpanded && (
        <div className="mb-4 space-y-3 animate-fade-in">
          <Button 
            className="block w-full bg-red-600 hover:bg-red-700 text-white shadow-lg"
            onClick={() => setIsExpanded(false)}
          >
            Apply as Speaker
          </Button>
          <Button 
            variant="outline" 
            className="block w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white shadow-lg bg-white"
            onClick={() => setIsExpanded(false)}
          >
            Volunteer with Us
          </Button>
        </div>
      )}
      
      <Button
        size="lg"
        className={`rounded-full w-14 h-14 shadow-lg transition-all duration-300 ${
          isExpanded 
            ? 'bg-gray-600 hover:bg-gray-700 rotate-45' 
            : 'bg-red-600 hover:bg-red-700'
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Plus className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default FloatingCTA;
