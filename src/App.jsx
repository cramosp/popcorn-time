import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import movies from './data/movies.json';
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import AddMovie from './components/AddMovie';
import About from './components/About';
import MovieDetails from './components/MovieDetails';
import './App.css';
import './index.css';
import './components/Header.css';

 
function App () {

    // const [something, setSomething] = useState(initialValue);

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    const addNewMovie = (newMovie) => {

      // Find out id for the movie that we want to add:
      const movieIds = moviesToDisplay.map(function (elm) {
        return elm.id;
      });
      const maxId = Math.max(...movieIds);
      const nextId = maxId + 1;

      // Prepare an object with the details of the new movie (inc. the id):
      const movieDetails = {
        ...newMovie,
        id: nextId
      }
      
      const newList = [movieDetails, ...moviesToDisplay];
      setMoviesToDisplay(newList);
    }

    const deleteMovie = (movieId) => {
      const newList = moviesToDisplay.filter( (movieDetails) => {
          return movieDetails.id !== movieId;
      });
      // moviesToDisplay = newList; // NEVER UPDATE STATE DIRECTLY !!
      // moviesToDisplay.pop(); // NEVER UPDATE STATE DIRECTLY !!
      setMoviesToDisplay(newList);
  }

  return (
    <>  
      <Header numberOfMovies={moviesToDisplay.length}/>

      <AddMovie callbackToAddMovie={addNewMovie} />    

      <Routes>
        <Route path='/' element = {<MovieList moviesArray={moviesToDisplay} callbackToDelete={deleteMovie}/>} />
        <Route path='/movies/:movieId' element={<MovieDetails moviesArr={moviesToDisplay} />}  />
        <Route path='/about' element= {<About />} />
      </Routes>

      <Footer />

    </>
  )
 }

export default App;