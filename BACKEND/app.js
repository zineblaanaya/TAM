//Etape 1 : Création de l'application Express avec ces deux lignes  :
//On importe le module Express et on crée une instance de l'application Express avec express().

const express = require('express');
const app = express();

//Etape 2 : Le serveur écoutera sur le port 3000
const port = 1415;

//Etape 3 : Définition d'une route 
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })