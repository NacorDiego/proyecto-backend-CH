import mongoose from 'mongoose'
import config from './config.js'

export const connectDB = async () => {
    try {
        const mongoURI = config.MONGODB_URI

        if (!mongoURI) {
            throw new Error('La variable de entorno MONGO_URI no está configurada.')
        }

        await mongoose.connect(mongoURI)
        console.log('Base de datos conectada con éxito.');
    } catch (error) {
        console.error(`Error al conectar la base de datos: ${error.message}`)
    }
}