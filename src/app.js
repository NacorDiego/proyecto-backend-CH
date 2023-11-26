'use strict'

import server from './server.js'

const port = 8080

server.listen(port, () => console.log(`Server is running at http://localhost:${port}`))