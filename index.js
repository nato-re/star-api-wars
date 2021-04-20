const app = require('express');
const data = require('./data')
const cors = require('cors');
 
const { PORT } = process.env


const corsOps = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

app.use(cors(corsOps));
app.get('/', (req, res) => {
  res.status(200).json(data)
})

app.use((req, res) => {
  res.status(404).json({ message: 'Página não encontrada' })
})

app.listen(PORT, () => console.log('Ouvindo na porta ' + PORT))