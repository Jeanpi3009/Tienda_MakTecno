'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var CategoriaSchema = categorias();

module.exports =  mongoose.model('categorias',CategoriaSchema);

function categorias() {
    return Schema({
        ropa:{type:String, required: true},
        electrodomesticos:{type:String, required: true},
        vehiculos:{type:String, required: true},
        moviles:{type:String, required: true},
        ropa:{type:String, required: true},
    });
}