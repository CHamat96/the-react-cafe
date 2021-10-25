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
      <section className="homeContent homeContent--about">
        <div className="wrapper">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt in recusandae, odit porro velit tenetur autem placeat exercitationem earum accusantium ducimus repellendus quibusdam eaque esse rem ipsum molestiae veritatis blanditiis nemo quas fugiat! Maxime blanditiis exercitationem nisi culpa sapiente? Aspernatur perferendis officiis quaerat numquam a nostrum modi quidem optio incidunt non unde excepturi, commodi culpa sunt praesentium dignissimos aperiam exercitationem?</p>
          <Link to="/About" className="pageLink">
            Read More
          </Link>
        </div>
      </section>
      <section className="homeContent homeContent--menu">
        <div className="wrapper flexParent">
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
            <li className="menuItem" tabIndex="21">
              <div className="menuContainer">
                <img src={latte} alt="a cup of coffee" />
                <div className="overlayText">
                  <h3>Delicious Coffee</h3>
                </div>
              </div>
            </li>
            <li className="menuItem" tabIndex="22">
              <div className="menuContainer">
                <img src={pastries} alt="a batch of cinnamon rolls" />
                <div className="overlayText">
                  <h3>Homemade Pastries</h3>
                </div>
              </div>
            </li>
            <li className="menuItem" tabIndex="23">
              <div className="menuContainer">
                <img src={bread} alt="a cross-section for a loaf of freshly baked bread" />
                <div className="overlayText">
                  <h3>Artisinal Bread</h3>
                </div>
              </div>
            </li>
            <li className="menuItem" tabIndex="24">
              <div className="menuContainer">     
                <img src={beer} alt="a glass of beer being poured from a tap" />
                <div className="overlayText">
                  <h3>"Other" Beverages  (see below for details)</h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="homeContent homeContent--testimonials">
        <div className="wrapper">
          <h2>Testimonials</h2>
          <div className="commentContainer">
            <div className="testimony">
              <div className="comment">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime rerum laboriosam eum, assumenda consequatur blanditiis?</p>
              </div>
              <p className="signature"> - Inigo Montoya</p>
            </div>
            <div className="testimony">
              <div className="comment">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, maxime. Similique quia a ipsam numquam qui magni perferendis at quibusdam? Totam voluptatibus dignissimos minus quidem.</p>
              </div>
              <p className="signature"> - Alfred Pennyworth</p>
            </div>
          </div>
        </div>
      </section>
      <section className="homeContent homeContent--hours">
        <div className="wrapper">
          <h2>Come Visit Us!</h2>
          <p class="intro">We are open Monday to Saturday at the following times:</p>
          <ul>
            <li>
              <p><span className="day">Monday:</span> 8am to 6pm</p>
            </li>
            <li>
              <p><span className="day">Tuesday:</span> 8am to 6pm</p>
            </li>
            <li>
              <p><span className="day">Wednesday:</span> 8am to 6pm</p>
            </li>
            <li>
              <p><span className="day">Thursday:</span> 8am to 6pm | 9pm to Midnight</p>
            </li>
            <li>
              <p><span className="day">Friday:</span> 8am to 6pm | 9pm to Midnight</p>
            </li>
            <li>
              <p><span className="day">Saturday</span> 8am to 6pm | 9pm to Midnight</p>
            </li>
          </ul>
          <p className="disclaimer"><span className="emphasis">Note:</span> Alcohol is only available Thursday to Saturday starting at 9pm</p>
          <Link to="/Contact/Locations">
            Our Locations
          </Link>
        </div>
      </section>
      <section className="homeContent homeContent--dividerBlock">
        {/* empty block to space out elements on the page */}
      </section>
    </>
  )

}

export default HomePage