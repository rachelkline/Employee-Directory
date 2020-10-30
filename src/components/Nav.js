import React from "react";
import SearchName from "./searchName";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
            className="navbar-toggler"
            type="button">
                NavBar
            </button>
            <div className="search-area">
                <SearchName />
            </div>
        </nav>
    )
}

export default Nav;