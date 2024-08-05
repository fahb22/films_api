const express = require('express');
const connectDB = require('./config/db');
const filmRoutes = require('./routes/filmRoutes');

const app = express();
app.use(express.json());

// Defina a porta e o host
const port = 3000;
const HOST = '0.0.0.0';

// Conecte ao banco de dados
connectDB();

// Defina uma rota simples
app.get('/', (req, res) => {
    res.send('UAAAAAAAAAAAIx');
});

// Use as rotas para filmes
app.use('/films', filmRoutes);

// Inicie o servidor
app.listen(port, HOST, () => {
    console.log(`App running on http://${HOST}:${port}`);
});
