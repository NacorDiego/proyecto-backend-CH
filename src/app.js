'use strict'

import server from './server.js'
import config from './configs/config.js'
import { connectDB } from './configs/dbConnection.js'
import { engine } from 'express-handlebars'

server.engine('handlebars', engine())
server.set('views', process.cwd() + '/src/views')
server.set('view engine', 'handlebars')
server.use(express.static(process.cwd() + '/public'))

server.listen(config.PORT, () => console.log(`Server is running at http://localhost:${config.PORT}`))
connectDB()