'use strict'

import mongoose from 'mongoose'

const { connect, connection } = mongoose

mongoose.set('strictQuery', false) // Necesario desde v6 en adelante.

const mongooseOptions = { // Evita que salgan ciertos errores en consola
    useNewUrlParser: true, // Que use el nuevo parser de url
    useUnifiedTopology: true
}

connect('', mongooseOptions)
    .then(() => console.log('Successfully connected to the database')) // Cuando ya nos conectamos.
    .catch(error => console.error(`ERROR: in initial connection: ${error}`)) // Cuando hay un error al momento de conectar

if(process.env.NODE_ENV !== 'production'){
    connection.on('error', error => console.error(error))
}
