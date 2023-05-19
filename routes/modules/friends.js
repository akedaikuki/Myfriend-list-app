const express = require('express')
const router = express.Router()
const friendList = require('../../models/friend')

//新增頁面
router.get('/new', (req, res) => {
    return res.render('new')
})
  
//新增功能
router.post('/', (req, res) => {
    return friendList.create(req.body)
       .then(() => res.redirect('/'))
       .catch((error) => console.log(error))
})

//瀏覽特定頁面
router.get('/:id', (req, res) => {
      const id = req.params.id
      return friendList.findById(id)
        .lean()
        .then((friend) => res.render('show', { friend }))
        .catch((error) => console.log(error))
})
  
//編輯頁面
router.get('/:id/edit', (req, res) => {
    const id = req.params.id
    return friendList.findById(id)
      .lean()
      .then((friend) => res.render('edit', { friend }))
      .catch((error) => console.log(error))
})
  
//編輯資料功能
router.put('/:id', (req, res) => {
    const id = req.params.id
    return friendList.findById(id)
       .then((friend) => {
        for (let key in req.body) {
          friend[key] = req.body[key]
        }
        return friend.save()
       })
       .then(() => res.redirect(`/friends/${id}`))
       .catch((error) => console.log(error))
})
  
//刪除功能
router.delete('/:id', (req, res) => {
    const id = req.params.id
    return friendList.findById(id)
       .then((friend) => friend.remove())
       .then(() => res.redirect('/'))
       .catch((error) => console.log(error))
})

module.exports = router