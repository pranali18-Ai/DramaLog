import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDrama } from '../context/DramaContext';
import { UserStatus, RecommendationResult } from '../types';
import { getGeminiRecommendations } from '../services/geminiService';
import { 
  ArrowLeft, 
  PlayCircle, 
  ShoppingBag, 
  Sparkles, 
  Check, 
  ChevronDown, 
  ExternalLink,
  Info
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export const DramaDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { dramas, updateStatus } = useDrama();
  
  const drama = dramas.find(d => d.id === id);
  
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState<RecommendationResult | null>(null);

  if (!drama) return <div className="p-8 text-center text-gray-500 font-serif text-xl">Drama not found</div>;

  const handleStatusChange = (status: UserStatus) => {
    updateStatus(drama.id, status);
    setIsStatusOpen(false);
  };

  const handleAiRecommendation = async () => {
    setAiLoading(true);
    setAiResult(null);
    const result = await getGeminiRecommendations(drama.title, drama.tags);
    setAiResult(result);
    setAiLoading(false);
  };

  const statusColors: Record<UserStatus, string> = {
    'Plan to Watch': 'bg-gray-400',
    'Watching': 'bg-[#FFB7B2]',
    'Completed': 'bg-[#98DDCA]', // Mint Green
    'Dropped': 'bg-[#FFaaa5]'
  };

  return (
    <div className="min-h-screen pb-20 relative bg-[#FFF0F5]">
      {/* Hero Header */}
      <div className="relative h-[60vh] w-full overflow-hidden rounded-b-[3rem] shadow-xl shadow-pink-200/50">
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF0F5] via-transparent to-transparent z-10" />
        <img 
          src={drama.backdropUrl} 
          alt={drama.title} 
          className="w-full h-full object-cover"
        />
        
        {/* Navigation Back */}
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 z-20 p-3 bg-white/80 backdrop-blur-md rounded-full text-gray-700 hover:bg-white transition-colors shadow-lg"
        >
          <ArrowLeft size={24} />
        </button>

        {/* Title Block */}
        <div className="absolute bottom-10 left-6 right-6 md:left-12 z-20">
           <h1 className="text-4xl md:text-6xl font-serif font-black text-gray-800 mb-3 drop-shadow-sm">{drama.title}</h1>
           <div className="flex flex-wrap gap-3 text-sm font-bold tracking-wide">
             <span className="bg-white/90 backdrop-blur text-gray-800 px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                ⭐ {drama.rating}
             </span>
             <span className="bg-white/90 backdrop-blur text-gray-600 px-3 py-1 rounded-full shadow-sm">
                {drama.year}
             </span>
           </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 mt-8">
        {/* Actions Row */}
        <div className="flex flex-col sm:flex-row gap-5 mb-10">
          {/* Watch Trailer Button */}
          <a 
            href={drama.trailerUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-white text-gray-800 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all shadow-md shadow-pink-100 border border-pink-50"
          >
            <PlayCircle size={20} className="text-[#FFB7B2]" /> Watch Trailer
          </a>

          {/* Status Dropdown */}
          <div className="relative flex-1">
            <button 
              onClick={() => setIsStatusOpen(!isStatusOpen)}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-white flex items-center justify-between transition-colors shadow-md ${statusColors[drama.userStatus]}`}
            >
              <span>{drama.userStatus}</span>
              <ChevronDown size={20} className={`transition-transform ${isStatusOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isStatusOpen && (
              <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-pink-100 rounded-2xl shadow-xl shadow-pink-200/50 z-30 overflow-hidden">
                {(['Plan to Watch', 'Watching', 'Completed', 'Dropped'] as UserStatus[]).map((status) => (
                  <button
                    key={status}
                    onClick={() => handleStatusChange(status)}
                    className="w-full text-left px-6 py-4 hover:bg-pink-50 text-gray-600 font-medium border-b border-pink-50 last:border-0"
                  >
                    {status}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Description & Tags */}
        <div className="mb-12 bg-white p-8 rounded-3xl shadow-sm border border-pink-50">
          <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">Synopsis</h2>
          <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">{drama.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {drama.tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-[#FFF0F5] rounded-full text-sm font-semibold text-gray-600 border border-pink-100">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Fashion Section */}
        {drama.fashionLinks.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6 text-gray-800">
              <div className="p-2 bg-[#FFB7B2] text-white rounded-full">
                <ShoppingBag size={20} />
              </div>
              <h2 className="text-2xl font-serif font-bold">Shop the Look</h2>
            </div>
            
            <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-6 pl-2">
              {drama.fashionLinks.map((fashion, idx) => (
                <a 
                  key={idx}
                  href={fashion.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 group min-w-[120px]"
                >
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-lg shadow-pink-100 group-hover:border-[#FFB7B2] transition-colors flex items-center justify-center overflow-hidden">
                     <span className="text-3xl">👗</span>
                  </div>
                  <span className="text-sm font-semibold text-center text-gray-500 group-hover:text-[#FFB7B2] transition-colors max-w-[140px] leading-tight">
                    {fashion.item}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* AI Recommendations Section */}
        <div className="mb-24 bg-white rounded-3xl p-8 border border-pink-100 shadow-xl shadow-pink-100/50">
          <div className="flex items-center justify-between mb-6">
             <div className="flex items-center gap-3">
                <Sparkles size={24} className="text-[#FFB7B2]" />
                <h2 className="text-2xl font-serif font-bold text-gray-800">AI Assistant</h2>
             </div>
          </div>

          <p className="text-gray-500 mb-8 font-light">
            Need more recommendations based on "{drama.title}"?
          </p>

          {!aiResult && !aiLoading && (
            <button 
              onClick={handleAiRecommendation}
              className="w-full py-4 rounded-xl bg-[#FFF0F5] hover:bg-pink-100 text-gray-700 font-bold transition-colors border border-pink-200 flex items-center justify-center gap-2"
            >
              <Sparkles size={18} className="text-[#FFB7B2]" /> Find Similar & Where to Watch
            </button>
          )}

          {aiLoading && (
            <div className="flex flex-col items-center justify-center py-10 text-gray-400">
              <div className="w-10 h-10 border-4 border-[#FFB7B2] border-t-transparent rounded-full animate-spin mb-4" />
              <span className="font-serif italic text-[#FFB7B2]">Consulting the drama gods...</span>
            </div>
          )}

          {aiResult && (
            <div className="animate-fade-in">
              <div className="prose prose-pink max-w-none bg-[#FFF0F5] p-6 rounded-2xl border border-pink-100 text-gray-700">
                <ReactMarkdown>{aiResult.text}</ReactMarkdown>
              </div>
              
              {/* Google Search Sources */}
              {aiResult.sources && aiResult.sources.length > 0 && (
                 <div className="mt-6 pt-6 border-t border-dashed border-pink-200">
                    <p className="text-xs text-gray-400 mb-3 font-bold uppercase tracking-wider">Sources from Google Search</p>
                    <ul className="space-y-3">
                      {aiResult.sources.map((source, i) => (
                        <li key={i}>
                          <a 
                            href={source.uri} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-[#FFB7B2] hover:text-pink-600 hover:underline truncate bg-white p-2 rounded-lg border border-pink-50 shadow-sm"
                          >
                             <ExternalLink size={14} />
                             {source.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                 </div>
              )}

              <button 
                onClick={handleAiRecommendation}
                className="mt-6 text-sm text-gray-400 hover:text-[#FFB7B2] underline font-medium"
              >
                Refresh Recommendations
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};