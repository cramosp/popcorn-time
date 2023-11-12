import { useState } from "react";

function AddMovie(props) {

    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Create an object with the details of the new movie to add:
        const newMovie = {
          title: title, // This comes from the variable above that it's where we store what the user types in the form: const [title, setTitle] = useState('');
          rating: rating
        }
    
        // update the list of movies (invoking a function in the parent component)
        props.callbackToAddMovie(newMovie);
    
        // Clear the form:
        setTitle("");
        setRating("");
    
    }

    return(
        <section className="box">

        <form onSubmit={handleSubmit}>

          <label>
            Title:
            <input
              type="text"
              name="title"
              placeholder="enter the title"
              required={true}
              value={title}
              onChange={(e) => {setTitle(e.target.value)}}
            />
          </label>
          
          <label>
            Rating:
            <input
              type="number"
              name="rating"
              min={0}
              max={10}
              required={true}
              value={rating}
              onChange={(e) => {setRating(e.target.value)}}
            />
          </label>
          
          <button>Create movie</button>
        </form>

      </section>
    );
}


export default AddMovie;