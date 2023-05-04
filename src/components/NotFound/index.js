import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <div>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const themeContainerNF = isDarkTheme ? 'dark-nf' : 'light-nf'

        const themeStyle = isDarkTheme ? 'dark-style-nf' : 'light-style-nf'
        const themeStyleHeading = isDarkTheme
          ? 'dark-style-nf-heading'
          : 'light-style-nf-heading'

        return (
          <div className={themeContainerNF}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              alt="not found"
              className="nf-img"
            />
            <h1 className={themeStyleHeading}>Lost your Way?</h1>
            <p className={themeStyle}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </div>
)
export default NotFound
