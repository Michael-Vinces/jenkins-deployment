const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Ruta del archivo donde se almacenarán las visitas
const visitFile = 'visits.txt';

// Función para leer el número de visitas desde el archivo
const getVisits = () => {
    if (!fs.existsSync(visitFile)) {
        fs.writeFileSync(visitFile, '0');
    }
    return parseInt(fs.readFileSync(visitFile, 'utf-8'), 10);
};

// Función para incrementar y guardar las visitas
const incrementVisits = () => {
    const visits = getVisits() + 1;
    fs.writeFileSync(visitFile, visits.toString());
    return visits;
};

app.get('/', (req, res) => {
    const visits = incrementVisits();
    res.send(`¡Hola Mundo! Esta es una aplicación lista para Jenkins.<br>Contador de visitas: ${visits}`);
});

app.listen(port, () => {
    console.log(`Aplicación ejecutándose en http://localhost:${port}`);
});
