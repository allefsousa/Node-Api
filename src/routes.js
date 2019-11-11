const express= require('express')
const SessionController= require('./controllers/SessionController')
const SpotController= require('./controllers/SpotController')
const DashboardController= require('./controllers/DashboardController')


const multer= require('multer')
const UploadConfig= require('./config/upload')


const routes = express.Router();
const upload = multer(UploadConfig); // config imagens da aplicação

routes.post('/sessions',SessionController.store)


routes.post('/spots',upload.single('thumbnail'),SpotController.store)
routes.get('/spots',SpotController.index)
routes.get('/dashboard',DashboardController.show)



// exportando as totas
module.exports = routes
