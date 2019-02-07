import { getMovie, getById, addMovie, getMovies } from "./db";
// query : questions
// resolver : respond to query(question)
const resolvers = {
    Query: {
        // name:() => "mijeong"
        movies: () => getMovies(),
        movie: (_, { id }) => getMovie(id)
    },
    Mutation: {
        addMovie: (_, {name, score}) => addMovie(name, score),
        deleteMovie: (_, {id}) => deleteMovie(id)
    }
};

export default resolvers;
