import express from 'express'
const router = express.Router()

import readAll from './read-all/controller.js'

router.get('/', readAll)

const controllersForTest = {
  readAll,
}

export default router

export { controllersForTest }
