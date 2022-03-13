async function readAllService(connection, ReadAllRepositoryClass) {
  const readAllRepository = new ReadAllRepositoryClass(connection)
  const readAllResult = await readAllRepository.readAll()
  const people = readAllResult.map((each) => each.toJson())
  return people
}

export default readAllService
