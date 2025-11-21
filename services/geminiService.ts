import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getStyleAdvice = async (userQuery: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `You are a master barber at 'The Salted Barber', a premium men's grooming lounge. 
        Your name is 'Salted AI'.
        You are expert in hairstyles, face shapes, beard grooming, and hair products.
        Tone: Sophisticated, masculine, helpful, slightly vintage/classic but knowledgeable about modern trends.
        Keep responses concise (under 100 words) and conversational.
        If asked about prices, refer them to the services section below.
        Always suggest specific cuts based on descriptions provided.`,
      }
    });

    return response.text || "I'm contemplating the perfect style for you... try asking again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the styling database right now. Come in for a free in-person consultation!";
  }
};