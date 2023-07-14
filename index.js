import { ApolloServer, gql } from 'apollo-server';
// https://www.apollographql.com/blog/graphql/examples/building-a-graphql-api/
// https://graphql.org/learn/

const typeDefs = gql`

  type Pillow {
    type: String
    material: String
    volume: Float
  }


  type Query {
    pillows: [Pillow]
  }
`;



const resolvers = {
  Query: {
    pillows: () => pillows,
  },
};





const pillows = [
  {
    type: "head",
    material: "cement",
    volume: 3
  },
  {
    type: "neck",
    material: "cotton",
    volume: 1
  }
]



// curl -X POST -H "Content-Type: application/json" \
// --data '{ "query": "{pillows { type material volume }}"}' \
// http://localhost:4000/ -i

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});