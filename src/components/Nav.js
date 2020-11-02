import React from "react";
import Search from "./Search";
import "../styles/Search.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <div className="search-area col-6">
                <Search />
            </div>
        </nav>
    )
}

export default Nav;