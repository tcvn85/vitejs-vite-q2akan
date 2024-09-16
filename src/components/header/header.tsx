import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png"
import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/"><img src={Logo} alt="Stove" /></Link>
        <nav className="nav">
          <ul>
            <li><Link to="/indie-game">Indie Game</Link></li>
            <li><Link to="/entry-game">Entry Game</Link></li>
            <li><Link to="/community">Community</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}