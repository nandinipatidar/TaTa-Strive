import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { Routes } from 'react-router-dom';
import './Navbar.css';

// import Home from './Home';
// import About from './About';
// import Course from './Course';
// import Career from './Career';
// import Partner from './Partner';
// import Contact from './Contact';

const Navbar = () => {
  return (
      <>
        <nav>
            <div></div>
            
            <div>
                <ul id="navbar">
                    <li><a className='active' href="#">Home</a></li>
                    <li><a href="#About">About us</a></li>
                    <li><a href="#Course">Courses</a></li>
                    <li><a href="#Career">Career</a></li>
                    <li><a href="#Partner">Partners</a></li>  
                    <li><a href="#Contact">Contact us</a></li>
                </ul>
            </div>
        </nav>
        </>
  );
};

export default Navbar;
