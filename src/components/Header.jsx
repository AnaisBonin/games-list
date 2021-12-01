import { Link } from 'react-router-dom'
import "./Header.css"

const Header = ({name}) => {
    return (
        <header className="header">
            <h1>Welcome everyone &#128579; <br/> Let's play {name}!</h1>
            { name !== "together" ? <Link className="header-return" to="/"> &lt; Return...</Link> : null}
        </header>
    )
}

export default Header
