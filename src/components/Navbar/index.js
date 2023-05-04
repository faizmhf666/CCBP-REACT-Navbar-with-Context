import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const buttonImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const onChangeTheme = () => {
        toggleTheme()
      }

      const containerThemeClass = isDarkTheme ? 'dark-theme' : 'light-theme'
      const themeStyle = isDarkTheme ? 'dark-style' : 'light-style'
      const lineClass = isDarkTheme ? 'dark-line' : 'light-line'

      return (
        <div>
          <div className={containerThemeClass}>
            <img
              src={websiteLogo}
              alt="website logo"
              className="website-logo"
            />
            <ul className="list-container">
              <li className="list-item">
                <Link to="/" className={themeStyle}>
                  <p>Home</p>
                </Link>
              </li>
              <li className="list-item">
                <Link to="/about" className={themeStyle}>
                  <p>About</p>
                </Link>
              </li>
            </ul>
            <button
              type="button"
              data-testid="theme"
              className="button"
              onClick={onChangeTheme}
            >
              <img src={buttonImg} alt="theme" className="button-img" />
            </button>
          </div>
          <hr className={lineClass} />
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
