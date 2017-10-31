const express = require('express')
const bodyParser =require('body-parser')
const path = require('path')
const uuid = require('uuid/v4')
const app = express()
const { getTasks} = require('./services/todo')

let tasks = []

app.set('view engine', 'pug')
app.use(express.static('public'));
app.set('views', path.resolve(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', function(req,res){
  res.render('index', {tasks: tasks.filter(task => !task.done)})
})


app.get('/edit/:id', (req, res) => {
  const { id } = req.params
  const [task] = tasks.filter(task => task.id === id)
  res.render('edit', {task})
})

app.put('/edit/:id', function(req, res){
  console.log(req.params, 'edit put')
  const {id} =req.params
  const {title} = req.body
  tasks = tasks.map(task => {
    if(task.id === id) {
      task.title = title
    }
    return task
  })
  console.log(tasks, 'tasks')
  res.send('Edited ok')
})

app.get('/completed', function(req,res){
  res.render('completed', {tasks: tasks.filter(task => task.done)})
})

app.post('/new', function(req, res){
  const {task} = req.body // "mytarea"
  tasks.push({title: task, id: uuid(), done: false})
  res.redirect('/')
})

app.post('/delete/:id', (req, res) => {
  const id = req.params.id
  tasks = tasks.filter(task => task.id !== id)
  res.redirect('/')
})

app.post('/completed/:id', (req, res) => {
  const id = req.params.id
  tasks = tasks.map(task => {
    if (task.id === id) {return Object.assign({}, task, {done: true})}
    return task
  })
  res.redirect('/')
})

app.post('/allcompleted/', (req, res) => {
  tasks = tasks.map(task => {
     return Object.assign({}, task, {done: true})
  })
  res.redirect('/')
})

app.listen(3000)
console.log('Listening on PORT 3000...')