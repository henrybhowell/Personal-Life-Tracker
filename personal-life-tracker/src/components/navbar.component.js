import React, { Component } from 'react';
import {Link} from 'react-router-dom';


// Creation of the NavBar using Bootstrap formatting
export default class Navbar extends Component {

    render() {
        const navbarBrandStyle = {
            marginLeft: '20px', // Adjust the value based on your desired spacing
          };
        return(
            <nav className='navbar navbar-dark bg-dark navbar-expand'>
                <Link to="/" className='navbar-brand' style={navbarBrandStyle}> ExerTracker</Link>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='navbar-item'>
                        <Link to="/" className='nav-link'> Exercises</Link>
                        </li>
                        <li className='navbar-item'>
                        <Link to="/create" className='nav-link'> Create Exercise Log</Link>
                        </li>
                        <li className='navbar-item'>
                        <Link to="/user" className='nav-link'> Create User</Link>
                        </li>
                    </ul>
                </div>
                
            </nav>
        )
    }



}