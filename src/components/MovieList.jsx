import './MovieList.css';
import MovieSummary from './MovieSummary';

function MovieList(props) {

    return (
        <div className='Main'>
            {props.moviesArray.map(function(movieObj, index){
                return <MovieSummary
                            key={index}
                            movieDetails={movieObj}
                            callbackToDelete={props.callbackToDelete}
                        />
            })}
        </div>
    );
}


export default MovieList;

/*
A forEach() returns undefined, so we can't do {movies.forEach()}
Instead we use map() to get the title of the movies from the movies array.
*/