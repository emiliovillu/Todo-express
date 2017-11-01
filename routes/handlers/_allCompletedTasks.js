const { allCompletedTasks } = require('../../services/todo')

function _allCompletedTask (req, res){
  const tasks = allCompletedTasks()
  res.redirect('/')
}

module.exports = _allCompletedTask