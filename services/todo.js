const uuid = require('uuid/v4')
let tasks = []

function getPendingTasks(){
   return tasks.filter( task => !task.done)
}

function addTask (task){
  return tasks.push({title: task, id: uuid(), done: false})
}

function getCompletedTask(id){
    tasks = tasks.map(task => {
      if (task.id === id) {return Object.assign({}, task, {done: true})}
      return task
  })
}

function getCompletedTasks(){
  return tasks.filter( task => task.done)
}

function deleteTasksById (id){
  tasks = tasks.filter(task => task.id !== id)
}

function editFormTaskById (id){
  return tasks.find(task => task.id === id) 
}

function allCompletedTasks (){
  tasks = tasks.map(task => {
    return Object.assign({}, task, {done: true})
 })
 return tasks
}

function editTaskById (id, title){
  tasks = tasks.map(task => {
    if(task.id === id) {
      task.title = title
    }
    return task
  }) 
}


module.exports = { getPendingTasks, addTask, getCompletedTask, getCompletedTasks, deleteTasksById, editFormTaskById, allCompletedTasks, editTaskById }