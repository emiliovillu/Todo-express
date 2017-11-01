const { editTaskById } = require('../../services/todo')

function _editTaskById (req, res){
  const { id } = req.params
  const { title } = req.body
  tasks = editTaskById(id, title)
  res.send('OK')
}

module.exports = _editTaskById