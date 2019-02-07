import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

// /* Schema: the description of data (send or get the data from users) */
// const server = new GraphQLServer({
//     /* adding schema.graphql which contains query statements */
//     typeDefs: "graphql/schema.graphql",
//     resolvers /* resolver file */
// });

const server = new GraphQLServer({
  typeDefs: `type Movie {
      id: Int!
      title: String!
      rating: Float
      description_intro: String
      language: String
      medium_cover_image: String
      genres: [String]
    }
    
    type Query {
      movies(limit: Int, rating: Float): [Movie]!
      movie(id: Int!): Movie
      suggestions(id: Int!): [Movie]!
    }
    `,
  resolvers
});

server.start(() => console.log("Graphql Server Running"));
