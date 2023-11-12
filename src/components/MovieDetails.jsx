import { useNavigate, useParams } from "react-router-dom";

function MovieDetails(props) {

    const {movieId} = useParams(); // useParams returns an object

    //note: url params are always strings
    // console.log(typeof movideId);

    const navigate = useNavigate();

    const movieDetails = props.moviesArr.find((movie) => {
        return movie.id == movieId;
    });

    return (
        <>
            <h1>{movieDetails.title}</h1>
            {movieDetails.imgURL && <img src={movieDetails.imgURL} alt={movieDetails.title} />}
            {movieDetails.rating && <p>Rating: {movieDetails.rating}</p>}
            {movieDetails.year && <p>Year: {movieDetails.year}</p>}
            {movieDetails.genres && movieDetails.genres.map((genreStr) => {
                return <span className='badge'>{genreStr}</span>
            })}

            <p>
                <button onClick={() => navigate(-1)}>Back</button>
                {/* Another way, you'd need to improt Link above: <Link to='/'>Back</Link> */}
            </p>
            
        </>
    )
}

export default MovieDetails;