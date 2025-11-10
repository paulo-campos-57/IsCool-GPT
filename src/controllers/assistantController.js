import { generateResponse } from '../services/llmService.js';

/**
 * @swagger
 * /api/assistente/explicar:
 *   post:
 *     summary: Explica um tópico usando o LLM (Gemini) com diferentes níveis de detalhamento.
 *     tags:
 *       - Assistente LLM
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               topic:
 *                 type: string
 *                 description: O tópico ou pergunta a ser explicada pelo LLM.
 *                 example: "O que é a lei de Hooke?"
 *               tipo_resposta:
 *                 type: string
 *                 description: Define o nível de detalhe da resposta. Pode ser "curta", "média" ou "detalhada".
 *                 example: "média"
 *     responses:
 *       '200':
 *         description: Resposta do LLM gerada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 topic:
 *                   type: string
 *                   example: "O que é a lei de Hooke?"
 *                 tipo_resposta:
 *                   type: string
 *                   example: "detalhada"
 *                 explanation:
 *                   type: string
 *                   example: "A Lei de Hooke estabelece que a força exercida por uma mola é proporcional à deformação sofrida, desde que não ultrapasse o limite elástico do material."
 *       '400':
 *         description: Requisição inválida (campos ausentes ou incorretos).
 *       '500':
 *         description: Erro interno ao processar a requisição ou falha na API do LLM.
 */
export const explainTopic = async (req, res) => {
    const { topic, tipo_resposta } = req.body;

    if (!topic) {
        return res.status(400).json({ error: 'O campo "topic" é obrigatório.' });
    }

    const tipo = (tipo_resposta || 'média').toLowerCase();
    const validos = ['curta', 'média', 'detalhada'];

    if (!validos.includes(tipo)) {
        return res.status(400).json({
            error: `O campo "tipo_resposta" deve ser um dos seguintes valores: ${validos.join(', ')}.`
        });
    }

    const instrucoes = {
        curta: "explique de forma breve e direta.",
        média: "forneça uma explicação clara e concisa.",
        detalhada: "dê uma explicação detalhada com exemplos."
    }

    const prompt = `Como um professor de Ciência da computação, de Cloud, ${instrucoes[tipo]} o seguinte tópico para um estudante: "${topic}"`;

    try {
        const explanation = await generateResponse(prompt);

        console.log("Explicação pronta:", explanation);

        return res.status(200).json({
            topic: topic,
            explanation: explanation
        });

    } catch (error) {
        console.error('Erro no controller de explicação:', error);
        return res.status(500).json({ error: 'Não foi possível gerar a explicação neste momento.' });
    }
};