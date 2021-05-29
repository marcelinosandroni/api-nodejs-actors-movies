import {SetupServer} from './server'
import colors from 'colors'

// const server = app.listen(3000)
const server = new SetupServer(3000)
server.init('Pai ta ON na PORT')
colors.enable()
