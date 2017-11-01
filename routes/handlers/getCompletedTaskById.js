const { getCompletedTask } = require('../../services/todo')

function getCompletedTaskById(req, res){
  const { id } = req.params
  tasks = getCompletedTask(id)
  res.redirect('/')
}

module.exports = getCompletedTaskById