//imports
const { Router } = require('express')

const TagsController = require('../controllers/TagsController')
const ensureAuthenticated = require ('../middlewares/ensureAuthenticated')

const tagsRoutes = Router()

//instances
const tagsController = new TagsController()

tagsRoutes.get('/', ensureAuthenticated, tagsController.index)

//Exportando o modulo usersRoutes
module.exports = tagsRoutes
