const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json({ extended: false }));

// Ruta de ejemplo
app.get('/', (req, res) => res.send('API Running'));

// Usar las rutas
app.use('/api', require('./models/weather')); // Asegúrate de que esta ruta esté correcta

// Puerto en el que correrá el servidor de desarrollo
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));