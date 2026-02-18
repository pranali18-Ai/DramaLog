import React, { useState } from 'react';
import { useDrama } from '../context/DramaContext';
import { DramaCard } from '../components/DramaCard';
import { useNavigate } from 'react-router-dom';
import { SlidersHorizontal, Sparkles } from 'lucide-react';

const ALL_TAGS = ['Happy Ending', 'Sad Ending', 'CEO', 'School', 'RomCom', 'Cohabitation', 'ML Older than FL', 'Revenge', 'Time Travel'];

export const Discovery: React.FC = () => {
  const { filteredDramas } = useDrama();
  const navigate = useNavigate();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const dramas = filteredDramas(selectedTags);

  return (
    <div className="p-4 md:p-8 pt-6">
      {/* Header */}
      <header className="mb-8 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-black text-text mb-2 tracking-tight">
          <span className="text-[#FFB7B2]">Drama</span>Log
        </h1>
        <p className="text-gray-500 font-serif italic text-lg">Curate your obsession, aesthetically.</p>
      </header>

      {/* Filters */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4 text-sm text-gray-400 uppercase tracking-widest font-bold">
          <SlidersHorizontal size={14} />
          <span>Vibes</span>
          {selectedTags.length > 0 && (
            <button 
              onClick={() => setSelectedTags([])}
              className="ml-auto text-xs text-[#FFB7B2] hover:text-pink-400 underline lowercase font-serif italic"
            >
              clear all
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          {ALL_TAGS.map(tag => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  isSelected 
                    ? 'bg-[#FFB7B2] text-white border-[#FFB7B2] shadow-md shadow-pink-200' 
                    : 'bg-white text-gray-500 border-pink-100 hover:border-[#FFB7B2] hover:text-[#FFB7B2]'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Pinterest Masonry Layout */}
      {dramas.length === 0 ? (
        <div className="text-center py-20 bg-white/50 rounded-3xl border-2 border-dashed border-pink-100">
          <div className="text-6xl mb-4 text-[#FFB7B2] animate-bounce">
            <Sparkles size={48} />
          </div>
          <h3 className="text-2xl font-serif font-bold text-gray-600 mb-2">No aesthetic matches</h3>
          <p className="text-gray-400">Try a different vibe.</p>
          <button 
            onClick={() => setSelectedTags([])}
            className="mt-6 px-8 py-3 bg-[#FFB7B2] text-white rounded-full hover:bg-pink-400 transition-colors font-bold shadow-lg shadow-pink-200"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        /* The Magic: CSS Columns for Masonry */
        <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6 space-y-6">
          {dramas.map(drama => (
            <DramaCard 
              key={drama.id} 
              drama={drama} 
              onClick={() => navigate(`/drama/${drama.id}`)} 
            />
          ))}
        </div>
      )}
    </div>
  );
};