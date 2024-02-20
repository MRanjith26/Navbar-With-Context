// Write your code here
import './index.css'

import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backGroundTheme = isDarkTheme ? 'Dark' : 'Light'
      const textColor = isDarkTheme ? 'light-text' : null

      return (
        <>
          <Navbar />
          <div className={`none-container ${backGroundTheme}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="none-image"
            />
            <h1 className={`none-text ${textColor}`}>Lost Your Way?</h1>
            <p className={`none-brief ${textColor}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
