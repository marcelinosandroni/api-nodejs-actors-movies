import knex from 'knex'
import {config} from 'dotenv'

config()

export const connection = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_SCHEMA,
    port: Number(process.env.DB_PORT),
    multiStatements: true
  }
})
