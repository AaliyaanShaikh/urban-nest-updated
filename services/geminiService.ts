import { GoogleGenAI, Chat } from "@google/genai";

// Safely access process.env to prevent ReferenceError in browsers
const getApiKey = () => {
  try {
    // Check if process is defined and has env
    if (typeof process !== 'undefined' && process.env) {
      return process.env.API_KEY || '';
    }
  } catch (e) {
    // Ignore error if process is not accessible
  }
  return '';
};

const apiKey = getApiKey();
const ai = new GoogleGenAI({ apiKey });

// System instruction for the chat assistant
const SYSTEM_INSTRUCTION = `
You are Lumière AI, a premier digital concierge for Lumière, a high-end real estate agency. 
Your tone is sophisticated, polite, knowledgeable, and elegant. 
You assist clients in finding their dream homes, explaining architectural styles, and discussing market trends in luxury real estate.
Keep responses concise but beautifully phrased.
Do not make up specific property data not provided, but speak generally about the luxury market if asked.
`;

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const generatePropertyDescription = async (propertyTitle: string, features: string[]): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a luxurious, captivating, and short (max 2 sentences) marketing description for a property titled "${propertyTitle}" with the following features: ${features.join(', ')}.`,
    });
    return response.text || "Experience the pinnacle of luxury living.";
  } catch (error) {
    console.error("Error generating description:", error);
    return "Experience the pinnacle of luxury living in this exclusive residence.";
  }
};