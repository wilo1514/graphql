const Cliente = require('./model');

// Agregar un nuevo Cliente
exports.addCliente = async (nombre, telefono) => {
  try {
    const nuevoCliente = new Cliente({ nombre, telefono });
    return await nuevoCliente.save();
  } catch (error) {
    throw error;
  }
};

// Obtener todos los Clientes
exports.getClientes = async () => {
  try {
    return await Cliente.find();
  } catch (error) {
    throw error;
  }
};

// Obtener un Cliente por ID
exports.getClienteById = async (id) => {
  try {
    return await Cliente.findById(id);
  } catch (error) {
    throw error;
  }
};
