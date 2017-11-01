const { getPendingTasks } = require('../../services/todo')

function showPendingTasks(req, res) {
  const tasks = getPendingTasks()
  res.render('index', {tasks: tasks})
}
module.exports = showPendingTasks