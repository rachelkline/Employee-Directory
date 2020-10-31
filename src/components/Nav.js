import React from "react";
import Search from "./Search";
import "../styles/Search.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
            className="navbar-toggler"
            type="button">
                NavBar
            </button>
            <div className="search-area col-12">
                <Search />
            </div>
        </nav>
    )
}

export default Nav;