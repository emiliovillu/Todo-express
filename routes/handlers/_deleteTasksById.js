const { deleteTasksById } = require('../../services/todo')

function _deleteTasksById (req,res){
  const { id } = req.params
  deleteTasksById(id)
  res.redirect('/')
}

module.exports = _deleteTasksById