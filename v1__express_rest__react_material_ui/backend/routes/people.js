import express from 'express'
const router = express.Router()

router.get('/', home)

function home(req, res) {
  res.send({ msg: 'people router index' })
}

const controllersForTest = {
  home,
}

export default router

export { controllersForTest }
