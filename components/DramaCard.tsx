import React from 'react';
import { Drama } from '../types';
import { Heart, Star } from 'lucide-react';

interface DramaCardProps {
  drama: Drama;
  onClick: () => void;
}

export const DramaCard: React.FC<DramaCardProps> = ({ drama, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group break-inside-avoid mb-6 cursor-pointer"
    >
      <div className="relative rounded-3xl overflow-hidden shadow-[0_8px_20px_-5px_rgba(255,183,178,0.6)] hover:shadow-[0_12px_25px_-5px_rgba(255,183,178,0.8)] transition-all duration-300 hover:-translate-y-1 bg-white">
        {/* Image - allow natural height for masonry feel */}
        <img 
          src={drama.posterUrl} 
          alt={drama.title} 
          className="w-full h-auto object-cover"
        />
        
        {/* Safe Badge - Floating */}
        {drama.isHappyEnding && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#FFB7B2] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
            <Heart size={12} fill="#FFB7B2" className="text-[#FFB7B2]" />
            <span className="text-[10px] font-bold tracking-wider uppercase">Safe</span>
          </div>
        )}
        
        {/* Gradient Overlay on hover only */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Minimal details below the pin */}
      <div className="mt-3 px-1">
        <h3 className="font-serif font-bold text-lg text-text leading-tight group-hover:text-[#FFB7B2] transition-colors">
          {drama.title}
        </h3>
        <div className="flex justify-between items-center mt-1">
           <p className="text-gray-500 text-xs font-medium truncate w-3/4">
            {drama.tags[0]} • {drama.tags[1]}
          </p>
          <div className="flex items-center gap-1 text-xs font-bold text-yellow-500">
            <Star size={10} fill="currentColor" /> {drama.rating}
          </div>
        </div>
      </div>
    </div>
  );
};