// Write your code here
import './index.css'

import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backGroundTheme = isDarkTheme ? 'Dark' : 'Light'
      const textColor = isDarkTheme ? 'light-text' : null

      return (
        <>
          <Navbar />
          <div className={`about-container ${backGroundTheme}`}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="about-image"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="about-image"
              />
            )}
            <h1 className={`about-text ${textColor}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
