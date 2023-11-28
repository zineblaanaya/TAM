
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur Express !');
});

//routes pour gérer les requêtes API depuis votre application React.
app.get('/api/data', (req, res) => {
  // Gérer la logique backend ici
  res.json({ message: 'Données provenant du serveur backend' });
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});


