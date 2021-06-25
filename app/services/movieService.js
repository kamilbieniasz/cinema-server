import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __driname = dirname(__filename);

let movies = JSON.parse(readFileSync(new URL('../database/movies.json', import.meta.url)));

const allMovies = () => {
    return movies;
}

const findMovieById = (id) => {
    return movies.find(movie => 
        movie.id == id
    );
}

const getPlaces = (id, date, time) => {
    const movie = movies.find(movie =>
        movie.id == id
    );

    const day = new Date(date).getDay();
    console.log(day);

    const findingDate = movie.date.find(date => 
        date.day = day
    );

    const findingtime = findingDate.hours.find(hour => 
        hour.hour = time    
    );

    return findingtime.places;
}

const bookPlace = (id, date, time, reservedPlaces) => {

    const day = new Date(date).getDay();

    const movie = findMovieById(id);
    movie.date.forEach(date => {
        if(date.day === day){
            date.hours.forEach(hour => {
                if(hour.hour === time){
                    reservedPlaces.forEach(place => {
                        hour.places.forEach(hPlace => {
                            if(hPlace.number === place){
                                hPlace.free = false;
                            }
                        })

                    })
                }
            })
        }
    })

    updateMovieById(id, movie);

    return movies;

}

const updateMovieById = (id, movie) => {
    movies.map(m => {
        if(m.id === id){
            m = movie;
        }
    })
    
    try{
        writeFileSync(new URL('../database/movies.json',import.meta.url), JSON.stringify(movies));
    } catch(err) {
        console.log(err);
    }

    movies = JSON.parse(readFileSync(new URL('../database/movies.json', import.meta.url)));   
}

const bestThreeMovie = () => {
    const bestMovies = movies
    .sort((a, b) => {
      return a.note - b.note;
    })
    .slice(0, 3);

    return bestMovies;
}

const lastThreeMovie = () => {
    const lastMovies = movies
    .sort((a, b) => {
        return a.year - b.year;
    })
    .slice(0, 3);

    return lastMovies;
}
export {allMovies, findMovieById, getPlaces, bookPlace, bestThreeMovie, lastThreeMovie};
