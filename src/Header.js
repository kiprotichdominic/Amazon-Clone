import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"

function Header() {
    return (
        <nav className='header'>
            {/* Logo on the left -> img */}
            <Link to="/">
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
            {/* Search Box */}
            <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
            </div>
        </nav>
    )
}

export default Header
