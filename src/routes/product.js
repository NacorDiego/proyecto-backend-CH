'use strict'

import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send('Lista de productos')
})

export { router }