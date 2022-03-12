import express from 'express'
const router = express.Router()

const examplePeople = [
  {
    id: 1,
    name: 'John Deo',
    nickname: 'john1234',
    country: 'America',
    birthday: '1990-10-20',
    age: 31,
    height: 177,
    weight: 68,
  },
  {
    id: 2,
    name: 'Jane Doe',
    nickname: 'janeeeee',
    country: 'USA',
    birthday: '1995-07-16',
    age: 26,
    height: 164,
    weight: 50,
  },
  {
    id: 3,
    name: 'Tom Hiddleston',
    nickname: 'tomExcvda',
    country: 'UK',
    birthday: '2000-03-25',
    age: 21,
    height: 180,
    weight: 76,
  }
]

router.get('/', home)

function home(req, res) {
  res.send({ msg: 'people router index' })
}

const controllersForTest = {
  home,
}

export default router

export { controllersForTest }
