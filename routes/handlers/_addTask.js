const { addTask } = require('../../services/todo')

function _addTask(req ,res){
  const { task } = req.body
  addTask(task)
  req.session.tasks.push(task)
  res.redirect('/')
}
module.exports = _addTask