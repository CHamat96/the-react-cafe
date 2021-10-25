import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <div className="navBar navBar--navMain wrapper">          
        <ul className="navBar navBar--navMenu">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="navBar navBar--navSubHeading">
            <Link to="/">
              About Us
            </Link>
            <ul className="navBar navBar--navSub subMenu">
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
          <li className="navBar navBar--navSubHeading">
            <Link to="/Menu">
              Food & Drinks
            </Link>
            <ul className="navBar navBar--navSub">
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
          <li className="navBar navBar--navSubHeading">
            <Link to ="/Contact">
              Get in Touch 
            </Link>
            <ul className="navBar navBar--navSub">
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