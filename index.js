const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const schema = gql(`
  type Query {
    UserName: String!
    UserAge: Int
    UserEmail: String!
  }
`);

const resolvers = {
  Query: {
    UserName: () => 'Marcelo Lima',
    UserAge: () => 21,
    UserEmail: () => 'jmdl.k8@gmail.com'
  }
};

const server = new ApolloServer({ typeDefs: schema, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`Server runing at port localhost:4000/${server.graphqlPath}`)
);