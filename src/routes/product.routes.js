'use strict'

import { Router } from 'express'
import { deleteProduct, getProductByID, getProducts, saveProduct, updateProduct } from '../controllers/ProductController.js'

const router = Router()

router.get('/', getProducts)
router.get('/:pid', getProductByID)
router.post('/', saveProduct)
router.put('/:pid', updateProduct)
router.delete('/:pid', deleteProduct)

export { router }