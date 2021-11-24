import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = ({name}) => {
    return (
        <header className="header">
            <h1>Welcome everyone! Let's play {name}!</h1>
            <Link to="/">Return</Link>
        </header>
    )
}

export default Header
