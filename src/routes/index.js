'use strict'

import { Router } from 'express'
import { readdirSync } from 'node:fs'
import { dirname } from 'node:path'
import { removeExtensionFilename } from '../utils/helpers.js'

const router = Router()

const PATH_ROUTES = dirname(`${import.meta.url}`).split('file:///')[1]

// Devuelve un array que voy a filtrar, si son distintos de 'index' los importo dinamicamente.
readdirSync(PATH_ROUTES).filter(filename => {
    const routeFilename = removeExtensionFilename(filename)
    if (routeFilename != 'index') {
        import(`./${routeFilename}.js`)
            .then(routerModule => {
                router.use(`/${routeFilename}`, routerModule.router) // Establezco un endpoint con el mismo nommbre que el archivo.
            })
    }
})

export { router }