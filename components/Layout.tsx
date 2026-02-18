import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, Library, Tv } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[#FFF0F5] text-text pb-24 md:pb-0 md:pl-24">
      {/* Mobile/Tablet Content Area */}
      <main className="max-w-7xl mx-auto min-h-screen">
        {children}
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-pink-100 md:hidden z-50 rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.03)]">
        <div className="flex justify-around items-center h-20">
          <Link to="/" className={`flex flex-col items-center gap-1 transition-colors ${isActive('/') ? 'text-[#FFB7B2]' : 'text-gray-400'}`}>
            <Compass size={24} strokeWidth={isActive('/') ? 2.5 : 2} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Discover</span>
          </Link>
          <Link to="/list" className={`flex flex-col items-center gap-1 transition-colors ${isActive('/list') ? 'text-[#FFB7B2]' : 'text-gray-400'}`}>
            <Library size={24} strokeWidth={isActive('/list') ? 2.5 : 2} />
            <span className="text-[10px] font-bold uppercase tracking-wider">My List</span>
          </Link>
        </div>
      </nav>

      {/* Sidebar Navigation (Desktop) */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-24 bg-white/60 backdrop-blur-xl border-r border-pink-100 z-50 items-center py-10">
        <div className="mb-12 text-[#FFB7B2]">
           <Tv size={36} strokeWidth={2.5} />
        </div>
        <div className="flex flex-col gap-8 w-full px-4">
          <Link 
            to="/" 
            className={`flex flex-col items-center gap-2 p-3 rounded-2xl w-full transition-all duration-300 group
              ${isActive('/') ? 'bg-[#FFF0F5] text-[#FFB7B2]' : 'text-gray-400 hover:bg-white hover:shadow-lg hover:shadow-pink-100'}`}
          >
            <Compass size={26} strokeWidth={isActive('/') ? 2.5 : 2} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Feed</span>
          </Link>
          <Link 
            to="/list" 
            className={`flex flex-col items-center gap-2 p-3 rounded-2xl w-full transition-all duration-300 group
              ${isActive('/list') ? 'bg-[#FFF0F5] text-[#FFB7B2]' : 'text-gray-400 hover:bg-white hover:shadow-lg hover:shadow-pink-100'}`}
          >
            <Library size={26} strokeWidth={isActive('/list') ? 2.5 : 2} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Library</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};