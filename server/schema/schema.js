const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
const _ = require('lodash');

// dummy data

let books = [
  {name: 'Name of the Wind', genre: 'Fantasy', id: '1'},
  {name: 'The Final Empire', genre: 'Fantasy', id: '2'},
  {name: 'The Long Earth', genre: 'ci-Fi', id: '3'},
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQueury = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {id: {type: GraphQLString } },
      resolve(parent, args) {
        // code to get data from db/other source
        return _.find(books, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQueury
});
