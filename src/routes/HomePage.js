// Package import
import {Link} from 'react-router-dom'

// image import 
import bread from '../assets/bread.jpg'
import latte from '../assets/latte.jpg'
import pastries from '../assets/cinnamonRolls.jpg';
import beer from '../assets/draughtBeer.jpg'
const HomePage = () => {
  return (
    <>
      <section className="homeContent homeContent--About">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt in recusandae, odit porro velit tenetur autem placeat exercitationem earum accusantium ducimus repellendus quibusdam eaque esse rem ipsum molestiae veritatis blanditiis nemo quas fugiat! Maxime blanditiis exercitationem nisi culpa sapiente? Aspernatur perferendis officiis quaerat numquam a nostrum modi quidem optio incidunt non unde excepturi, commodi culpa sunt praesentium dignissimos aperiam exercitationem?</p>
        <Link to="/About" className="pageLink">
          Read More
        </Link>
      </section>
      <section className="homeContent homeContent--menu">
        <h2>What's On Our Menu?</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum nisi nulla obcaecati sunt voluptas quo!</p>
        <div className="menuLinks">
          <Link to="/Menu">
            View Full Menu
          </Link>
          <Link to="/Menu/OnlineOrder">
            Order Online
          </Link>
        </div>
        <ul className="homeContent homeContent--menuGallery">
          <li className="menuItem" tabIndex="8">
            <div className="menuContainer">
              <img src={latte} alt="a cup of coffee" />
              <div className="overlayText">
                <h3>Delicious Coffee</h3>
              </div>
            </div>
          </li>
          <li className="menuItem" tabIndex="9">
            <div className="menuContainer">
              <img src={pastries} alt="a batch of cinnamon rolls" />
              <div className="overlayText">
                <h3>Homemade Pastries</h3>
              </div>
            </div>
          </li>
          <li className="menuItem" tabIndex="10">
            <div className="menuContainer">
              <img src={bread} alt="a cross-section for a loaf of freshly baked bread" />
              <div className="overlayText">
                <h3>Artisinal Bread</h3>
              </div>
            </div>
          </li>
          <li className="menuItem" tabIndex="11">
            <div className="menuContainer">     <img src={beer} alt="a glass of beer being poured from a tap" />
              <div className="overlayText">
                <h3>"Other" Beverages  (after 5pm only)</h3>
              </div>
            </div>
          </li>
        </ul>
      </section>

    </>
  )

}

export default HomePage