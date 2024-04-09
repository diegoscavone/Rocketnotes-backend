//imports
const { Router } = require('express')

const NotesController = require('../controllers/NotesController')
const ensureAuthenticated = require ('../middlewares/ensureAuthenticated')

const notesRoutes = Router()

//instances
const notesController = new NotesController()

notesRoutes.use(ensureAuthenticated)

notesRoutes.get('/', notesController.index)
notesRoutes.post('/', notesController.create)
notesRoutes.get('/:id', notesController.show)
notesRoutes.delete('/:id', notesController.delete)

//Exportando o modulo usersRoutes
module.exports = notesRoutes
