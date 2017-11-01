const express = require('express')

const router = express.Router()

const showPendingTasks = require('./handlers/showPendingTasks')
const _addTask = require('./handlers/_addTask')
const getCompletedTaskById = require('./handlers/getCompletedTaskById')
const showCompletedTasks = require('./handlers/showCompletedTasks')
const _deleteTasksById = require('./handlers/_deleteTasksById')
const _editFormTaskById = require('./handlers/_editFormTaskById')
const _allCompletedTask = require('./handlers/_allCompletedTasks')
const _editTaskById = require('./handlers/_editTaskById')

// router.use((req, res, next) => {
//   console.log(req.originalUrl)
//   next()
// })
router.get('/', showPendingTasks)
router.post('/new', _addTask)
router.post('/completed/:id', getCompletedTaskById)
router.get('/completed', showCompletedTasks)
router.post('/delete/:id', _deleteTasksById)
router.get('/edit/:id', _editFormTaskById)
router.post('/allcompleted', _allCompletedTask)
router.put('/edit/:id', _editTaskById)



module.exports = router