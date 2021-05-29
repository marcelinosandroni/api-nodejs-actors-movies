import {Router} from 'express'
import {connection} from '../database/connection'

export const indexRoute = Router()

indexRoute.get('/', async (req, res) => {
  const [r] = await connection.raw('show tables')
  const tables = r.map((table: any[]) => `<li>${Object.values(table)}</li>`)
  const htmlList =
    tables.reduce((acc: string, item: string[]) => (acc += item), '<ul>') +
    '</ul>'

  res.send(htmlList)
})
