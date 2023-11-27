'use strict'

import server from './server.js'
import config from './configs/config.js'
import { connectDB } from './configs/dbConnection.js'


server.listen(config.PORT, () => console.log(`Server is running at http://localhost:${config.PORT}`))
connectDB()