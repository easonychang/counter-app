import React, { Component } from 'react';

//Stateless Functional Component

const NavBar = ({ totalCounters }) => {

    console.log("NavBar - Rendered");

    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Pokemon{" "} 
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
};

/*
class NavBar extends Component {
    render() { 
        
    }
}
*/
 
export default NavBar;