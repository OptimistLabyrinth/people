import express from 'express'
const router = express.Router()

/* GET home page. */
router.get('/', home)

async function home(req, res) {
  res.render('index')
}

const routerForTest = {
  home,
}

export default router

export { routerForTest }
