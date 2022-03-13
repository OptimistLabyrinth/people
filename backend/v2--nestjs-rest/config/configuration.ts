export default () => {
  const configDefault = {
    port: parseInt(process.env.PORT, 10) || 7100,
    mysqlDatabase: {
      host: process.env.MYSQL_DATABASE_HOST,
      port: parseInt(process.env.MYSQL_DATABASE_PORT, 10) || 3306,
      user: process.env.MYSQL_DATABASE_USER,
      password: process.env.MYSQL_DATABASE_PASSWORD,
      schema: process.env.MYSQL_DATABASE_SCHEMA,
    },
    postgresqlDatabase: {
      host: process.env.POSTGRESQL_DATABASE_HOST,
      port: parseInt(process.env.POSTGRESQL_DATABASE_PORT, 10) || 5432,
      user: process.env.POSTGRESQL_DATABASE_USER,
      password: process.env.POSTGRESQL_DATABASE_PASSWORD,
      schema: process.env.POSTGRESQL_DATABASE_SCHEMA,
    },
  };
  return configDefault;
};
