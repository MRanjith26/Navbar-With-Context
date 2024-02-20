// Write your code here
import './index.css'

import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backGroundTheme = isDarkTheme ? 'Dark' : 'Light'
      const textColor = isDarkTheme ? 'light-text' : null

      return (
        <>
          <Navbar />
          <div className={`home-container ${backGroundTheme}`}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="home-image"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="home-image"
              />
            )}
            <h1 className={`home-text ${textColor}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
