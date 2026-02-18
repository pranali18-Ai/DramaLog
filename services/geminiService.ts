import { GoogleGenAI } from "@google/genai";
import { RecommendationResult } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getGeminiRecommendations = async (
  currentDramaTitle: string,
  tags: string[]
): Promise<RecommendationResult> => {
  if (!apiKey) {
    return { 
      text: "API Key is missing. Please configure your environment to use AI features.",
      sources: []
    };
  }

  try {
    const prompt = `
      I am watching the Asian Drama "${currentDramaTitle}" which has tags: ${tags.join(', ')}.
      
      Please recommend 3 OTHER similar Asian Dramas (Korean, Chinese, or Thai) that I might like.
      For each recommendation, explain briefly why it matches the vibe of ${currentDramaTitle}.
      
      Also, find out where I can currently stream "${currentDramaTitle}" legally.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        // Using Google Search Grounding as requested to get accurate streaming info and recent popularity context
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "No recommendations found.";
    
    // Extract grounding chunks (sources) if available
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources = chunks
      .map(chunk => chunk.web)
      .filter(web => web !== undefined && web !== null)
      .map(web => ({
        uri: web.uri || '',
        title: web.title || 'Source'
      }));

    return { text, sources };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return { 
      text: "Sorry, I couldn't generate recommendations at this moment. Please try again later.",
      sources: []
    };
  }
};
