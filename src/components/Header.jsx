import { NavLink } from "react-router-dom";
import './Header.css';

function Header(props) {
    return (
        <div className='Header'>
            <h1>Welcome to Popcorn Time!</h1>

            <nav>
                <NavLink to="/">Home </NavLink> | 
                <NavLink to="/about">About </NavLink>
            </nav>

            {props.numberOfMovies > 0
            ? <h2>Number of movies: {props.numberOfMovies}</h2>
            : <h2>Sorry, no movies to display.</h2>
            }
        </div>
    )
}

export default Header;

/*
To apply styles to a component:
    - Create a .css file for that component.
    - Import the .css in the component.
    - In order to apply the style only to that element, create a div with a className.
*/