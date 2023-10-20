const express = require('express');
const config = require('./config');
const db = require('./db');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const controller = require('./controller');

var app = express();
db(config.DB_URL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static('public'));

let schema = buildSchema(`
  type Cliente {
    id: ID
    nombre: String
    telefono: String
  }
  type Query {
    clientes: [Cliente]
    cliente(id: ID): Cliente
  }
  type Mutation {
    addCliente(nombre: String, telefono: String): Cliente
  }
`);

let root = {
    clientes: async () => {
      return await controller.getClientes();
    },
    cliente: async (data) => {
      return await controller.getClienteById(data.id);
    },
    addCliente: async (data) => {
      return await controller.addCliente(data.nombre, data.telefono);
    },
  };


app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(config.PORT, () => {
console.log(`La app está lista en http://localhost:${config.PORT}/`);
});
