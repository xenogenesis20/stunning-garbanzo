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
  type Mutation {
    addCountry(country: String, year: Int, areaSquareKilometres: Int, totalPopulation: Int): [Country]
  }
`;

let countries = [
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
const resolvers = {
    Query: {
      countries: (parent,args,context,info) => {
        // console.log("Query information");
        // console.log("parent",parent);
        // console.log("context",context);
        // console.log("info",info);
        // console.log("args",args);
        return countries
      }
    },
    Mutation:{
      addCountry: (parent,args,context,info) =>{
        // console.log("Mutation information");
        // console.log("info",info);
        // console.log("args",args);
        countries.push(args)
        console.log(countries);
        return countries
      }
    }
  };
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

