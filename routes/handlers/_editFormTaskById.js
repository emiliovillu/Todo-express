const { editFormTaskById } = require('../../services/todo')

function _editFormTaskById (req, res){
  const { id } = req.params
  const task = editFormTaskById(id)
  res.render('edit', {task})
}

module.exports = _editFormTaskById