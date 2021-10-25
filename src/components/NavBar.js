import {Link} from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function NavBar() {
  return (
    <nav>
      <div className="navFlex wrapper">
        {/* <Link to="/" className="logoIcon">
          <FontAwesomeIcon icon={faCoffee}/>
        </Link> */}
        <ul className="navMain">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="navSubHeading">
            <Link to="/">
              About Us
            </Link>
            <ul className="navSub">
              <li>
                <Link to="/About">
                  Who are We?
                </Link>
              </li>
              <li>
                <Link to="/About/Staff">
                  Our Staff
                </Link>
              </li>
              <li>
                <Link to="/About/Coffee">
                  Our Coffee
                </Link>
              </li>
            </ul>
          </li>
          <li className="navSubHeading">
            <Link to="/Menu">
              Food & Drinks
            </Link>
            <ul className="navSub">
              <li>
                <Link to="/Menu">
                  View Menu
                </Link>
              </li>
              <li>
                <Link to="/Menu/OnlineOrder">
                  Order Online
                </Link>
              </li>
              <li>
                <Link to="Menu/Catering">
                  Catering
                </Link>
              </li>
            </ul>
          </li>
          <li className="navSubHeading">
            <Link to ="/Contact">
              Get in Touch 
            </Link>
            <ul className="navSub">
              <li>
                <Link to="/Contact/Careers">
                  Join our Team
                </Link>
              </li>
              <li>
                <Link to="/Contact/Locations">
                  Our Location
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar