const express= require('express')
const SessionController= require('./controllers/SessionController')
const SpotController= require('./controllers/SpotController')

const multer= require('multer')
const UploadConfig= require('./config/upload')


const routes = express.Router();
const upload = multer(UploadConfig); // config imagens da aplicação

routes.post('/sessions',SessionController.store)

routes.post('/spots',upload.single('thumbnail'),SpotController.store)

// exportando as totas
module.exports = routes
