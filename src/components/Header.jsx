import React from 'react'
import "./Header.css"

const Header = ({name}) => {
    return (
        <header className="header">
            <h1>Welcome everyone! Let's play {name}!</h1>
        </header>
    )
}

export default Header
