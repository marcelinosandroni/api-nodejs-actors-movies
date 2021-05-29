import {SetupServer} from './server'
import colors from 'colors'

colors.enable()
const server = new SetupServer(3000)
server.init('Pai ta ON na PORT')
