'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = productos();

module.exports =  mongoose.model('producto',ProductoSchema);

function productos() {
    return Schema({
        titulo: { type: String, required: true },
        slug: { type: String, required: true },
        galeria: [{ type: Object, required: false }],
        portada: { type: String, required: true },
        precio: { type: Number, required: true },
        descripcion: { type: String, required: true },
        contenido: { type: String, required: true },
        stock: { type: Number, required: true },
        nventas: { type: Number, default: 0, required: true },
        npuntos: { type: Number, default: 0, required: true },
        variedades: [{ type: Object, require: false }],
        // categoria: { type: String, required: false },
        titulo_variedad: { type: String, required: false },
        estado: { type: String, default: 'Edicion', required: true },
        createdAt: { type: Date, default: Date.now, require: true }
    });
}