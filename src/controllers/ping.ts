import {BaseController} from './base'
import {RequestHandler} from 'express'
import {Control, Route} from '../@types/decorators'

@Control('/ping')
export class PingController extends BaseController {
  @Route()
  getAll: RequestHandler = async (_, res) => res.send('Pong!')
}
