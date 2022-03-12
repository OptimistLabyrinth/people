import ReadAllRepository from './repository.js'
import { mysqlConnectionInstance } from '../../../app.js'
import { debugError } from '../../../modules/logging.js'

async function readAll(req, res) {
  let connection = {}
  try {
    connection = await mysqlConnectionInstance.getConnection()
    const readAllRepository = new ReadAllRepository(connection)
    const readAllResult = await readAllRepository.readAll()
    const examplePeople = readAllResult.map((each) => each.toJson())
    res.send({ msg: 'people router index', result: examplePeople })
  } catch (error) {
    debugError(error)
    res.status(500).send({ msg: 'Internal Server Error' })
  } finally {
    mysqlConnectionInstance.releaseConnection(connection)
  }
}

export default readAll
