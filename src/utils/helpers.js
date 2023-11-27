'use strict'

const removeExtensionFilename = filename => filename.split('.').shift() // Recive nombre archivo, quita la extensión.

export { removeExtensionFilename }