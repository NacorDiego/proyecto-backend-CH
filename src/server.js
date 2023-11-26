'use strict'

import express, {json} from 'express'
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'
import YAML from 'yamljs'

const server = express()
const route = process.cwd() + '\\openapi.yml'
const swaggerDocument = YAML.load(route) // Leer archivo openapi.yml

server.use(json()) // Permite respuestas tipo JSON
server.use(cors()) // Permite definir desde donde nos pueden consultar la API

server.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument)) // Levantar en la ruta /api-doc lo que sea que leyo 'swaggerDocument'.

function gracefullShutdown (message, code) {
    console.log(`ERROR: ${message}: ${code}`)
}

process.on('exit', (code) => gracefullShutdown(`About to exit with: ${code}`))

export default server