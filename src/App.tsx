import { EcommerceProductMock } from './components/EcommerceProductMock';
import React, { useState, useEffect } from 'react';
import WallOfLovePage from './components/WallOfLovePage';
import { ArrowRight } from 'lucide-react';


const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (path: string) => {
    window.location.hash = path;
  };

  return (
    <div>
      {currentPath === '#/wall-of-love' ? (
        <>
          <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
             <div className="max-w-7xl mx-auto flex items-center justify-between">
                <button 
                  onClick={() => navigateTo('/')}
                  className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group"
                >
                  <ArrowRight size={16} className="rotate-180 transition-transform group-hover:-translate-x-1" />
                  Back to store
                </button>
                <span className="text-xl font-black tracking-tighter uppercase italic">ModernStride.</span>
                <button className="px-4 py-1.5 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                   Join community
                </button>
             </div>
          </nav>
          <WallOfLovePage />
        </>
      ) : (
        <EcommerceProductMock onExploreWall={() => navigateTo('/wall-of-love')} />
      )}
    </div>
  );
};

export default App;