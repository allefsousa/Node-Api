const express = require("express")
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express();
mongoose.connect('mongodb+srv://allef:allef@cluster0-lgvpo.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

// GET, POST, DELETE,PUT

// req.query = Acessar a query params (Para filtros)
// req.params = Acessar route params (Para edição e delete)
// req.body = Acessar corpo da requisição (Para criação e edição)

app.use(express.json())
app.use(routes)




app.listen(3000);