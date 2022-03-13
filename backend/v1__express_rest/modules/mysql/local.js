import mysql from 'mysql2/promise'

class MysqlConnectionLocal {
  constructor(process) {
    this.connectionPool = mysql.createPool({
      host: process.env.hostLocal,
      port: process.env.portLocal,
      user: process.env.userLocal,
      password: process.env.passwordLocal,
      database: process.env.schemaLocal,
      trace: process.env.traceLocal === 'true',
      waitForConnections: process.env.waitForConnectionsLocal === 'true',
      connectionLimit: parseInt(process.env.connectionLimitLocal ?? 1),
      queueLimit: parseInt(process.env.queueLimitLocal ?? 0),
    })

    this.getConnection = this.getConnection.bind(this)
    this.releaseConnection = this.releaseConnection.bind(this)
  }

  async getConnection() {
    return await this.connectionPool.getConnection()
  }

  releaseConnection(connection) {
    connection.release()
  }
}

export default MysqlConnectionLocal
