const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();


// Middleware verbeux et un peu inutile
    if (process.env.NODE_ENV === 'development') {
        app.use((req, _res, next) => {
            console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
            next();
        });
    }

    app.get('/', (_req, res) => {
        res.send('Hello world — serveur volontairement non optimisé mais fonctionnel');
    });


app.get('/big', async (_req, res) => {
    const filePath = path.join(__dirname, 'maybe-big-file.txt');
    try {
        const data = await fs.promises.readFile(filePath, 'utf8');
        res.type('text/plain').send(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            return res.status(404).send('Fichier introuvable');
        }
        console.error('Erreur lors de la lecture du fichier :', error);
        return res.status(500).send('Erreur lors de la lecture du fichier');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});