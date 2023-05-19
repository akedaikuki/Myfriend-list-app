const db = require('../../config/mongoose')
const Friend = require('../friend')
const friendList = require('./friend.json')

db.once('open', () => {
  console.log('mongodb connected!')
  for(let i = 0; i < friendList.length; i++) {
    console.log(`add id: ${friendList[i]['id']} to mongodb`)
    Friend.create(friendList[i])
  } 
})