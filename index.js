const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Country {
    country: String
    year: Int
    areaSquareKilometres: Int
    totalPopulation: Int
  }
  type Query {
    countries: [Country]
  }
<<<<<<< HEAD
  type Mutation {
    addCountry(country: String, year: Int, areaSquareKilometres: Int, totalPopulation: Int): Country
  }
`;

let countries = [
=======
`;

const countries = [
>>>>>>> 78df68d260b9f9ae9016f18cd580d9706b876d8c
   {
      country: "Albania",
      year: 2000,
      areaSquareKilometres: 28748,
      totalPopulation: 3401198
   },
   {
      country: "Albania",
      year: 2001,
      areaSquareKilometres: 28748,
      totalPopulation: 3073734
   },
   {
      country: "Albania",
      year: 2002,
      areaSquareKilometres: 28748,
      totalPopulation: 3093465
   },
   {
      country: "Albania",
      year: 2003,
      areaSquareKilometres: 28748,
      totalPopulation: 3111162
   }
]
<<<<<<< HEAD
const resolvers = {
    Query: {
      countries: (parent,args,context,info) => countries,
    },
    Mutation:{
      addCountry: (parent,args,context,info) => args,
    }
  };
const server = new ApolloServer({ typeDefs, resolvers });

=======

  // Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      countries: () => countries,
    },

  };

  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
>>>>>>> 78df68d260b9f9ae9016f18cd580d9706b876d8c
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

