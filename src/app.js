import express from 'express';
import routes from './routes/index.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.js';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(routes);

app.use((req, res) => {
    res.status(404).send('Rota Não Encontrada');
});

export default app;