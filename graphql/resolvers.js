// import { getMovie, getById, addMovie, getMovies } from "./db";
// // query : questions
// // resolver : respond to query(question)
// const resolvers = {
//     Query: {
//         // name:() => "mijeong"
//         movies: () => getMovies(),
//         movie: (_, { id }) => getById(id)
//     },
//     Mutation: {
//         addMovie: (_, {name, score}) => addMovie(name, score),
//         deleteMovie: (_, {id}) => deleteMovie(id)
//     } 
// };

// export default resolvers;

import { getMovies, getMovie, getSuggestions } from "./db";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id)
  }
};

export default resolvers;