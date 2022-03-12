import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import { default as indexRouter } from './routes/index.js'
import { default as usersRouter } from './routes/users.js'
import { default as peopleRouter } from './routes/people/index.js'
import dirName from './modules/dir-name.js'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(dirName(), 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/people', peopleRouter)

export default app
