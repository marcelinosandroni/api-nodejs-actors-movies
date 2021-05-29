import {Router} from 'express'

export const moviesRoute = Router()

moviesRoute.get('/', (req, res) => console.log('movies'))
