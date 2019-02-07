let movies = [ 
    {
        id: 0,
        name: "Star Wars - The new one",
        age: 1
    },
    {
       id: 1,
       name: "Avengers - The new one",
       age: 8
    },
    {
        id: 2,
        name: "The Godfather I",
        score: 99
    },
    {
        id: 3,
        name: "Logan",
        age: 2
    },
];

export const getMovies = () => movies

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === String(id));
    return filteredMovies[0];
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movies => movie.id !== String(id));
    if(movies.length > cleanedMovies.length) {
        movie = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name, 
        score
    };
    movies.push(newMovie);
    return newMovie;
}