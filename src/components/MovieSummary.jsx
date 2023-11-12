import {Link} from 'react-router-dom';
import './MovieSummary.css';

function MovieSummary(props) {
    return (
        <section id='card'>
            {props.movieDetails.imgURL
            ? <img src={props.movieDetails.imgURL} alt="cover of the film" />
            : 'NO IMAGE'
            }
            <h2>{props.movieDetails.title}</h2>
            <div className='details'>
                <p>{props.movieDetails.year}</p>
                <p>Rating: {props.movieDetails.rating}</p>
                { props.movieDetails.rating > 8 && <p>RECOMMENDED</p>}
            </div>
            <button onClick={function(){props.callbackToDelete(props.movieDetails.id)}}>Delete</button>
            <Link to={`/movies/${props.movieDetails.id}`}>More Details</Link>
            
        </section>
    );
}

export default MovieSummary;

{/* Previous code in Main.jsx:
 <div key={movieObj.id} id='card'>
    {movieObj.imgURL
        ? <img src={movieObj.imgURL} alt="cover of the film" />
        : <p>NO IMAGE</p>
    }

    <h2>{movieObj.title}</h2>
    <div className='details'>
        <h3>{movieObj.year}</h3>
        <h3 className='rating'>Rating: {movieObj.rating}</h3>
    </div>

    { movieObj.rating > 8 && <p>RECOMMENDED</p>}

    <button onClick={function(){ deleteMovie(movieObj.id) }}>Delete</button>
</div> */}