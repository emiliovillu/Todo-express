const { getCompletedTasks  } = require('../../services/todo')

function showCompletedTasks(req, res) {
  const tasks = getCompletedTasks()
  res.render('completed', {tasks: tasks})
}

module.exports = showCompletedTasks