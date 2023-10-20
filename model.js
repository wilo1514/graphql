const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: String,
  telefono: String,
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;