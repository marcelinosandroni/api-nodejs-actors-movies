import {BaseController} from './base'
import {RequestHandler} from 'express'
import {Control, Route} from '../@types/decorators'
import {connection} from '../database/connection'

@Control('/')
export class HomeController extends BaseController {
  @Route()
  getAll: RequestHandler = async (_, res) => {
    const [r] = await connection.raw('show tables')
    const tables = r.map((table: any[]) => `<li>${Object.values(table)}</li>`)
    const htmlList =
      tables.reduce((acc: string, item: string[]) => (acc += item), '<ul>') +
      '</ul>'

    console.log('oi')

    res.send(htmlList)
  }
}
