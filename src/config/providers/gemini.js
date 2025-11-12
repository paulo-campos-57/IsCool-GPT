import { GoogleGenAI } from "@google/genai";

console.log("API Key Carregada:", !!process.env.GEMINI_API_KEY);

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const MODEL_NAME = "gemini-2.5-flash";

/**
 * @param {string} prompt
 * @returns {Promise<string>}
 */
async function generate(prompt) {
    const retries = 3;
    
    for (let attempt = 1; attempt <= retries; attempt++) {
        console.log(`[Gemini Provider] Chamando o modelo ${MODEL_NAME} com o prompt...`);

        try {
            console.log("Prompt:", prompt);
            const response = await ai.models.generateContent({
                model: MODEL_NAME,
                contents: [{ role: "user", parts: [{ text: prompt }] }],
            });
            console.log("Resposta recebida do Gemini.");
            console.log("Texto gerado:", response.text);

            return response.text;
        } catch (error) {
            if (error.message.includes("overloaded") && attempt < retries) {
                console.warn(`Tentativa ${attempt} falhou (modelo sobrecarregado). Reenviando...`);
                await new Promise((r) => setTimeout(r, 2000 * attempt));
                continue;
            }

            console.error("ERRO na chamada do Gemini:", error.message);
            throw new Error("Falha ao se comunicar com o modelo Gemini.");
        }
    }
}

export default { generate };