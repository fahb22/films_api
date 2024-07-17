const express = require('express');
const connectDB = require('./config/db');
const filmRoutes = require('./routes/filmRoutes');

const app = express();
app.use(express.json());
const port = 3000;

connectDB();

app.use('/films', filmRoutes);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
