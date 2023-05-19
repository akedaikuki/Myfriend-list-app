const express = require('express')
const router = express.Router()
const friendList = require('../../models/friend') 

// 設定路由主頁頁面
router.get('/', (req, res) => {
    friendList.find()
    .lean()
    // .sort({ _id: 'asc' })
    .then(friends => res.render('index', { friends }))
    .catch(error => console.log(error))
})

// 搜尋功能
router.get('/search', (req, res) => {
    const keywords = req.query.keyword
    const keyword = req.query.keyword.trim().toLowerCase()
    const sort = req.query.sort
    // if (!keywords) {
    //   return res.redirect('/')
    // }
    
    friendList.find()
    .lean()
    .sort(`${sort}`)
    .then(friendData => {
      const friends = friendData.filter((friend) => {
        return friend.name.toLowerCase().includes(keyword) 
      })

      res.render('index', { friends, keywords })
    })
    .catch(error => console.log(error))
})

module.exports = router