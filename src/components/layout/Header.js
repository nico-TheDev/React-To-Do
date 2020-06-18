import React from "react";
import {Link} from 'react-router-dom';


function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link style={{color:'white'}} to="/">Home</Link> | 
            <Link style={{color:'white'}} to="/about">About</Link>
        </header>
    );
}

const headerStyle = {
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "crimson",
    color: "white",
    padding:'1rem 0'
};

export default Header;
