const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

const todoRoutes = require("./routes/todo")

app.use(express.json())

app.use("/todo", todoRoutes)

app.listen(port, () => {
  console.log(`Exemplo do App rodando em: http://localhost:${port}`)
})