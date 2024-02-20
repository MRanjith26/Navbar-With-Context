// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const backGroundTheme = isDarkTheme ? 'DarkNav' : 'LightNav'
      const fontTheme = isDarkTheme ? 'light-text' : 'dark-text'

      const onClickToggleTheme = () => {
        toggleTheme()
      }

      return (
        <>
          <nav className={`nav-bar ${backGroundTheme}`}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="web-logo"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="web-logo"
              />
            )}
            <ul className="nav-menu">
              <Link to="/" className="nav-link">
                <li className={`menu-text ${fontTheme}`}> Home</li>
              </Link>

              <Link to="/about" className="nav-link">
                <li className={`menu-text ${fontTheme}`}>About</li>
              </Link>
            </ul>
            <button
              className="theme-button"
              type="button"
              onClick={onClickToggleTheme}
              data-testid="theme"
            >
              {isDarkTheme ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="theme-icon"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="theme-icon"
                />
              )}
            </button>
          </nav>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
