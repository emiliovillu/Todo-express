$('.edit-task').on('submit', function(e) {
  e.preventDefault()
  console.log('submit...')
  const idTask = $(this).data('id')
  console.log(idTask)
  const title = $(this).find('[name="task"]').val()
  
  const url = `/edit/${idTask}`
  const method = 'PUT'
  const data = { title, idTask }

  $.ajax({ url, method, data })
    .then( response => {
      window.location.href = '/'
    })
})

