import { GoogleGenAI, Chat } from "@google/genai";

// Lazy init so app doesn't crash if API key is missing
let ai: GoogleGenAI | null = null;
function getAI(): GoogleGenAI {
  if (!ai) {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY ?? import.meta.env.GEMINI_API_KEY ?? '';
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
}

// System instruction for the chat assistant
const SYSTEM_INSTRUCTION = `
You are LuxAI, a premier digital concierge for LuxEstate, a high-end real estate agency. 
Your tone is sophisticated, polite, knowledgeable, and elegant. 
You assist clients in finding their dream homes, explaining architectural styles, and discussing market trends in luxury real estate.
Keep responses concise but beautifully phrased.
Do not make up specific property data not provided, but speak generally about the luxury market if asked.
`;

export const createChatSession = (): Chat => {
  return getAI().chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const generatePropertyDescription = async (propertyTitle: string, features: string[]): Promise<string> => {
  try {
    const response = await getAI().models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a luxurious, captivating, and short (max 2 sentences) marketing description for a property titled "${propertyTitle}" with the following features: ${features.join(', ')}.`,
    });
    return response.text || "Experience the pinnacle of luxury living.";
  } catch (error) {
    console.error("Error generating description:", error);
    return "Experience the pinnacle of luxury living in this exclusive residence.";
  }
};