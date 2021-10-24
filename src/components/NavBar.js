import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function NavBar() {
  return (
    <nav className="wrapper">
      <Link to="/" className="logoIcon">
        <FontAwesomeIcon icon={faCoffee}/>
      </Link>
      <ul className="navMain">
        <li>
          <Link to="/Order">
            Order Online
          </Link>
        </li>
        <li className="navSubHeading">
          <Link to="/About">
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
              <Link to="/Order/Catering">
                Order Catering
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar