// TODO: Implementar lógica para selecionar e utilizar diferentes provedores de LLM com base na configuração.
const openai = require('../config/providers/openai');
const gemini = require('../config/providers/gemini');
const huggingface = require('../config/providers/huggingface');

const activeProvider = process.env.LLM_PROVIDER || 'gemini'; // 'gemini', 'openai', 'huggingface', etc.

const providers = {
    'gemini': gemini,
    'openai': openai,
    'huggingface': huggingface,
};

/**
 * @param {string} prompt - A pergunta ou tarefa do estudante.
 * @param {object} options - Opções de configuração
 * @returns {Promise<string>} - A resposta gerada pelo modelo.
 */
async function generateResponse(prompt, options) {
    const provider = providers[activeProvider];

    if (!provider) {
        throw new Error(`Provedor de LLM "${activeProvider}" não configurado.`);
    }

    return provider.generate(prompt, options);
}

module.exports = { generateResponse };