import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Drama, UserStatus } from '../types';
import { POPULAR_DRAMAS } from '../constants';

interface DramaContextType {
  dramas: Drama[];
  updateStatus: (id: string, newStatus: UserStatus) => void;
  filteredDramas: (filterTags: string[]) => Drama[];
  getDramasByStatus: (status: UserStatus) => Drama[];
}

const DramaContext = createContext<DramaContextType | undefined>(undefined);

export const DramaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [dramas, setDramas] = useState<Drama[]>([]);

  // Load initial data and merge with saved preferences from localStorage
  useEffect(() => {
    const savedStatusMap: Record<string, UserStatus> = JSON.parse(localStorage.getItem('dramaLog_status') || '{}');
    
    const mergedDramas = POPULAR_DRAMAS.map(drama => ({
      ...drama,
      userStatus: savedStatusMap[drama.id] || 'Plan to Watch'
    }));
    
    setDramas(mergedDramas);
  }, []);

  const updateStatus = (id: string, newStatus: UserStatus) => {
    setDramas(prev => {
      const updated = prev.map(drama => 
        drama.id === id ? { ...drama, userStatus: newStatus } : drama
      );
      
      // Persist to local storage
      const statusMap = updated.reduce((acc, drama) => ({
        ...acc,
        [drama.id]: drama.userStatus
      }), {});
      localStorage.setItem('dramaLog_status', JSON.stringify(statusMap));
      
      return updated;
    });
  };

  const filteredDramas = (filterTags: string[]) => {
    if (filterTags.length === 0) return dramas;
    return dramas.filter(drama => 
      filterTags.every(tag => drama.tags.includes(tag))
    );
  };

  const getDramasByStatus = (status: UserStatus) => {
    return dramas.filter(drama => drama.userStatus === status);
  };

  return (
    <DramaContext.Provider value={{ dramas, updateStatus, filteredDramas, getDramasByStatus }}>
      {children}
    </DramaContext.Provider>
  );
};

export const useDrama = () => {
  const context = useContext(DramaContext);
  if (context === undefined) {
    throw new Error('useDrama must be used within a DramaProvider');
  }
  return context;
};
