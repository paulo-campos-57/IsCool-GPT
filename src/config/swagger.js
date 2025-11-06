import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'IsCool-GPT API Documentation',
        version: '1.0.0',
        description: 'API de assistente de estudos que utiliza o LLM Gemini para responder a perguntas.',
        contact: {
            name: 'Paulo Campos',
            email: 'paulo.m.campos6601@gmail.com',
            url: 'https://github.com/paulo-campos-57/IsCool-GPT'
        },
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Servidor de Desenvolvimento Local',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.js', './src/controllers/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;