'use strict'

import { productModel } from '../models/ProductModel.js'

export const getProducts = async (req, res) => {
    try {
        const products = await productModel.find()

        if (!products) {
            return res.status(404).send({
                status:404,
                message:'No existen productos'
            })
        }

        res.status(200).send({
            status: 200,
            message: 'OK',
            data: products
        })
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: `Ha ocurrido un error al procesar la petición ${err}`
        })
    }
}

export const getProductByID = async (req, res) => {
    try {
        const { pid } = req.params

        const product = await productModel.findById({_id:pid})

        if (!product) {
            return res.status(404).send({
                status:404,
                message: `No existe el producto con id = ${pid} en la base de datos.`
            })
        }

        res.status(200).send({
            status: 200,
            message: 'OK',
            data: product
        })
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: `Ha ocurrido un error al procesar la petición ${err}`
        })
    }
}

export const saveProduct = async (req, res) => {
    try {
        const { name, photo, price, category, description } = req.body

        const product = new productModel({
            name: name,
            photo: photo,
            price: price,
            category: category,
            description: description
        })

        const productSave = await product.save()

        res.status(201).send({
            status: 201,
            message: 'OK',
            data: productSave
        })
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: `Error al guardar en la base de datos ${err}`
        })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { pid } = req.params

        const productReplace = req.body

        const productUpdated = await productModel.updateOne({ _id: pid }, productReplace)

        if (!productUpdated) {
            return res.status(404).send({
                status: 404,
                message: `No existe el producto con id = ${pid} en la base de datos.`
            })
        }

        res.status(200).send({
            status: 200,
            message: 'OK',
            data: productUpdated
        })
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: `Ha ocurrido un error al procesar la petición ${err}`
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { pid } = req.params

        const productDelete = await productModel.deleteOne({ _id: pid })

        !productDelete ?? res.status(404).send({ status:404, message: `No existe el producto con id = ${pid} en la base de datos.` })

        res.status(200).send({
            status: 200,
            message: 'OK',
            data: productDelete
        })
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: `Ha ocurrido un error al procesar la petición ${err}`
        })
    }
}

