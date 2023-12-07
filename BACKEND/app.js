const express = require('express');
const app = express();
const routes = require("./routes/route")
const db = require ("./db/db")
const port = 1415;

db();

app.use(express.json())
app.use(express.urlencoded({extended:true}))


//Etape 3 : Définition d'une route 
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`All Good port ${port}`)
  })

  app.use(routes)