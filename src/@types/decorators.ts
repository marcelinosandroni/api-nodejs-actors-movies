import 'reflect-metadata'
import {AnyClass} from './generics'

export const Control = (path: string) => (target: AnyClass) =>
  Reflect.defineMetadata('path', path, target.prototype)

export const Route = (method: string = 'get', route: string = '/') => {
  return (target: any, key: string) => {
    const metaTarget = target.constructor.prototype
    const path = route.startsWith('/') ? route : `/${route}`
    const previousMeta = Reflect.getMetadata('routes', metaTarget) || []
    Reflect.defineMetadata(
      'routes',
      [...previousMeta, [method, path, key]],
      metaTarget
    )
  }
}
