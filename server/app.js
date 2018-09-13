const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')

const app = express();

app.use('/graphql', graphqlHTTP({
  // could use the following ES6 syntax since property and value have smae name
  // schema
  schema: schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
