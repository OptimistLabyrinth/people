import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

import { default as indexRouter } from './routes/index.js'
import { default as usersRouter } from './routes/users.js'
import { default as peopleRouter } from './routes/people/index.js'
import dirName from './modules/dir-name.js'
import MysqlConnection from './modules/mysql/index.js'

const app = express()
const mysqlConnectionInstance = new MysqlConnection(process)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(dirName(), 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/people', peopleRouter)

export default app

export { mysqlConnectionInstance }
