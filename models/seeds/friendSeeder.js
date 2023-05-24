const db = require('../../config/mongoose')
const Friend = require('../friend')
const { faker } = require('@faker-js/faker');
// const friendList = require('./friend.json')

// db.once('open', () => {
//   console.log('mongodb connected!')
//   for(let i = 0; i < friendList.length; i++) {
//     console.log(`add id: ${friendList[i]['id']} to mongodb`)
//     Friend.create(friendList[i])
//   } 
// })
db.once('open', () => {
  // function generateCustomers() {
    const users = [];
    // 自動產生 10筆 假資料
    for (let i = 0; i < 10; i++) {
      const userData = {
          id: i+1,
          natureImageUrl: faker.image.url(640, 480, true),
          avatarUrl: faker.image.avatarLegacy(),
          name: faker.person.fullName(),
          birthdate: faker.date.birthdate({ min: 1970, max: 2010, mode: 'year', refDate: Date }),
          email: faker.internet.email(),
          phone: faker.phone.number(),
          
        address: {
          address: faker.location.streetAddress(),
          city: faker.location.city(),
          state: faker.location.state({ abbreviated: true }),
          zip: faker.location.zipCode(),
      },
          jobTitle: faker.person.jobTitle(),
          company: faker.company.buzzAdjective(),
        };
        users.push(userData);
        Friend.create(users[i]);    
    }
    // res.json(users);
    
  // }
// 如果你要用json的話，就需要export
// module.exports = generateCustomers();

})