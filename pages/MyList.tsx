import React, { useState } from 'react';
import { useDrama } from '../context/DramaContext';
import { DramaCard } from '../components/DramaCard';
import { useNavigate } from 'react-router-dom';
import { UserStatus } from '../types';

const STATUS_TABS: UserStatus[] = ['Watching', 'Completed', 'Plan to Watch', 'Dropped'];

export const MyList: React.FC = () => {
  const { getDramasByStatus } = useDrama();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<UserStatus>('Watching');

  const dramas = getDramasByStatus(activeTab);

  return (
    <div className="p-4 md:p-8 pt-6">
      <header className="mb-8">
        <h1 className="text-3xl font-serif font-black text-gray-800 mb-8">My Library</h1>
        
        {/* Status Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar border-b border-pink-200 pb-0 gap-8">
          {STATUS_TABS.map(status => (
            <button
              key={status}
              onClick={() => setActiveTab(status)}
              className={`whitespace-nowrap pb-4 text-sm font-bold tracking-wide transition-colors relative ${
                activeTab === status 
                  ? 'text-[#FFB7B2]' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {status}
              {activeTab === status && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FFB7B2] rounded-t-full shadow-[0_-2px_10px_rgba(255,183,178,0.5)]" />
              )}
            </button>
          ))}
        </div>
      </header>

      {/* Grid */}
      {dramas.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-gray-400">
          <div className="text-4xl mb-4 opacity-50">🕸️</div>
          <p className="mb-4 text-lg font-serif italic">Nothing here yet.</p>
          {activeTab === 'Watching' && (
            <button 
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-white border border-pink-200 rounded-full text-[#FFB7B2] font-bold hover:bg-[#FFF0F5] transition-colors shadow-sm"
            >
              Find something to watch
            </button>
          )}
        </div>
      ) : (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
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