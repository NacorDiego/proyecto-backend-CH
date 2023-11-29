'use strict'

import { Cart } from '../models/CartModel.js'

export const getCart = async (req, res) => {
    try {
        const { userId } = req.params

        const cart = await Cart.findOne({ user: userId }).populate('items.product', 'name price')

        if (!cart) {
            return res.status(404).send({
                status: 404,
                message: 'No se encontró el carrito para el usuario.'
            })
        }

        res.status(200).send({
            status: 200,
            message: 'OK',
            data: cart
        })
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: `Error al procesar la petición: ${err}`
        })
    }
}

export const addToCart = async (req, res) => {
    try {
        const { userId } = req.params
        const { productId, quantity } = req.body

        // Validaciones

        const cart = await Cart.findOneAndUpdate(
            { user: userId },
            {
                $push: {
                    items: {
                        product: productId,
                        quantity: quantity || 1,
                        price: 0 // Calcularlo
                    }
                }
            },
            { new: true, upsert: true }
        ).populate('items.product', 'name price')

        res.status(200).send({
            status: 200,
            message: 'OK',
            data: cart
        })
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: `Error al procesar la petición: ${err}`
        })
    }
}