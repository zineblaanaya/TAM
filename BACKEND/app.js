const express = require('express');
const app = express();
const routes = require("./routes/route")

app.use(routes)


const port = 1415;

//Etape 3 : Définition d'une route 
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`All Good port ${port}`)
  })