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

`;

const countries = [
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
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

