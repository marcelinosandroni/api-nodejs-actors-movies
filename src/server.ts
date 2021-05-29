import express, {Express, Router} from 'express'
import cors from 'cors'
import {Model} from './models/base'
import {Actors, Movies} from './models'
import {Controller} from './controllers/base'
import {
  HomeController,
  PingController,
  ActorsController,
  MoviesController
} from './controllers'

interface Server {
  app: Express
}

type Constructable<T> = new (...args: any[]) => T
type OneOrTwoList<T, M> = ([T, M] | [T])[]

type RouteMatch =
  | 'all'
  | 'get'
  | 'post'
  | 'put'
  | 'delete'
  | 'patch'
  | 'options'
  | 'head'

export class SetupServer implements Server {
  app!: Express

  constructor(public port = 3000) {}

  async init(msg: string) {
    this.app = express()
    this.addMidleWares()
    this.addController([
      [HomeController],
      [PingController],
      [ActorsController, Actors],
      [MoviesController, Movies]
    ])
    this.listen(msg)
  }

  addMidleWares() {
    this.app.use(cors())
    this.app.use(express.json())
  }

  listen(msg: string) {
    const server = this.app.listen(this.port, () => {
      if (!server) {
        console.log('Erro iniciando o server!'.red)
        return
      }
      console.log(`${msg}`.replace(/port/i, `PORT ${this.port}`).green)
    })
  }

  addController(
    controllerList: OneOrTwoList<
      Constructable<Controller>,
      Constructable<Model>
    >
  ) {
    controllerList.forEach(([controller, model]) => {
      const constructedController = model
        ? new controller(model)
        : new controller()
      this.buildRoutes(constructedController)
    })
  }

  buildRoutes(controller: Controller) {
    const router = Router()
    const path = Reflect.getMetadata('path', controller)
    const routes = Reflect.getMetadata('routes', controller)

    routes.forEach(
      ([method, route, key]: [RouteMatch, string, keyof Controller]) =>
        router[method](route, controller[key] as any)
    )

    console.log(`Settings route: ${path}`.blue)
    this.app.use(path, router)
  }

  startDatabase() {}
}
