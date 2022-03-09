import express from 'express'
const router = express.Router()

/* GET users listing. */
router.get('/', home)

async function home(req, res) {
  res.send('respond with a resource')
}

const routerForTest = {
  home,
}

export default router

export { routerForTest }
