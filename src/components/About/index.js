import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <div>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const homeImg = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

        const themeStyle = isDarkTheme
          ? 'dark-style-about'
          : 'light-style-about'
        const themeContainerStyle = isDarkTheme
          ? 'dark-theme-about'
          : 'light-theme-about'

        return (
          <div className={themeContainerStyle}>
            <img src={homeImg} alt="about" />
            <h1 className={themeStyle}>About</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </div>
)

export default About
