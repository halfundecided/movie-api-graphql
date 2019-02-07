import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

/* Schema: the description of data (send or get the data from users) */
const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql", /* adding schema.graphql which contains query statements */
    resolvers /* resolver file */
});

server.start(() => console.log("Graphql Server Running"));