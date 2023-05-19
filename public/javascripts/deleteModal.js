// use sweetalert2 & use fetch send POST
const friendPanel = document.querySelector('#friend-panel')
friendPanel.addEventListener('click', function onDeleteBtnClick (event) {
  const { id, name } = event.target.dataset
  // console.log(event.target)
  if (id) {
    Swal.fire({
      title: `${name}<br>確定要刪除此朋友嗎?`,
      text: '(刪除將無法復原)',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        ).then(() => {
          fetch(`/friends/${id}?_method=delete`, { method: 'POST' })
            .then(() => window.location.reload())
            .catch(error => console.log(error))
            
        })
      }
    })
  }
})
