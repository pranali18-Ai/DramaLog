import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut, User as UserIcon } from 'lucide-react';

export const UserWidget: React.FC = () => {
  const { currentUser, signInWithGoogle, logout } = useAuth();
  const [isHovered, setIsHovered] = useState(false);

  if (!currentUser) {
    return (
      <button
        onClick={signInWithGoogle}
        className="flex items-center gap-2 bg-[#FFB7B2] text-white font-sans px-4 py-2 rounded-full shadow-sm hover:bg-[#FFC4C0] transition-colors duration-300"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#FFFFFF" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#FFFFFF" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FFFFFF" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#FFFFFF" />
        </svg>
        <span className="text-sm font-medium">Sign In</span>
      </button>
    );
  }

  return (
    <div 
      className="relative flex items-center gap-3 p-2 rounded-full hover:bg-white/50 transition-colors cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
        {currentUser.photoURL ? (
          <img 
            src={currentUser.photoURL} 
            alt={currentUser.displayName || 'User'} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#FFB7B2] flex items-center justify-center text-white">
            <UserIcon size={20} />
          </div>
        )}
      </div>
      
      <div className="hidden md:block">
        <p className="text-sm font-bold text-text truncate max-w-[100px]">
          {currentUser.displayName || 'User'}
        </p>
      </div>

      {isHovered && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white rounded-lg shadow-lg p-2 min-w-[120px] z-50 animate-in fade-in zoom-in-95 duration-200">
          <button
            onClick={logout}
            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-md transition-colors"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};
