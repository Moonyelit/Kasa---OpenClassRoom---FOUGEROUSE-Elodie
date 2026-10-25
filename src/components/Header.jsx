import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Kasa - Accueil" />
      </Link>
      <nav className="header__nav">
        <NavLink to="/" end className="header__link">
          Accueil
        </NavLink>
        <NavLink to="/a-propos" className="header__link">
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
