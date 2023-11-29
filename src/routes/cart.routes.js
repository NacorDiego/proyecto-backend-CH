'use strict'

import { Router } from 'express'
import { getCart, addToCart } from '../controllers/CartController'

const router = Router()

router.get('/:userId',getCart)
router.post('/:userId/add',addToCart)

export { router }