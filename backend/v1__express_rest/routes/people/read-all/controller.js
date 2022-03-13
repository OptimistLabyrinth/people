import ReadAllRepository from './repository.js'
import readAllService from './service.js'
import { mysqlConnectionInstance } from '../../../app.js'
import { debugError } from '../../../modules/logging.js'

async function readAll(req, res) {
  let connection = {}
  try {
    connection = await mysqlConnectionInstance.getConnection()
    const people = await readAllService(connection, ReadAllRepository)
    res.send({ msg: 'OK', result: people })
  } catch (error) {
    debugError(error)
    res.status(500).send({ msg: 'Internal Server Error' })
  } finally {
    mysqlConnectionInstance.releaseConnection(connection)
  }
}

export default readAll
