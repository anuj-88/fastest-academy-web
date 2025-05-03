
import { useState, useEffect } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (can be replaced with actual asset loading check)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 bg-white z-[9999] flex items-center justify-center transition-opacity duration-500 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="animate-pulse">
        <img 
          src="/lovable-uploads/aeba8342-963f-4b2f-a213-83ab82c21db0.png" 
          alt="Fastest Academy Logo" 
          className="h-20 w-auto animate-bounce"
        />
      </div>
    </div>
  );
};

export default Preloader;
