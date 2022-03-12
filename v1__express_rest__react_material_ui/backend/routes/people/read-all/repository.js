import ReadAllDto from './dto.js'

class ReadAllRepository {
  constructor(conn) {
    this.conn = conn
    this.statement = `SELECT
      id,
      name,
      nickname,
      country,
      birthday,
      age,
      height,
      weight
    FROM
      people`

    this.readAll = this.readAll.bind(this)
    this.validateEachRow = this.validateEachRow.bind(this)
  }

  async readAll() {
    const result = await this.conn.execute(this.statement)
    const resultAsDto = result[0].map((eachRow) => {
      if (!this.validateEachRow(eachRow)) {
        throw new Error('invalid row')
      }
      return new ReadAllDto(eachRow)
    })
    return resultAsDto
  }

  validateEachRow(eachRow) {
    return (
      Object.entries(eachRow).length === 8 &&
      eachRow.id !== undefined &&
      eachRow.name !== undefined &&
      eachRow.nickname !== undefined &&
      eachRow.country !== undefined &&
      eachRow.birthday !== undefined &&
      eachRow.age !== undefined &&
      eachRow.height !== undefined &&
      eachRow.weight !== undefined
    )
  }
}

export default ReadAllRepository
