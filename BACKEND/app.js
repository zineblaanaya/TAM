const express = require('express');
const app = express();
const routes = require("./routes/route")
const db = require ("./db/db")
const port = 1415;

app.use(routes)


db();

//Etape 3 : Définition d'une route 
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`All Good port ${port}`)
  })
