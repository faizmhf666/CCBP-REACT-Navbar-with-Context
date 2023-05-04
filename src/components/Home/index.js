import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <div>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const homeImg = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

        const themeStyle = isDarkTheme ? 'dark-style-home' : 'light-style-home'
        const themeContainerStyle = isDarkTheme
          ? 'dark-theme-home'
          : 'light-theme-home'

        return (
          <div className={themeContainerStyle}>
            <img src={homeImg} alt="home" />
            <h1 className={themeStyle}>Home</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </div>
)

export default Home
