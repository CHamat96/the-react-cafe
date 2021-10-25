// component import
import NavBar from "./NavBar.js"

// package import
import HeroSlider, { Slide, OverlayContainer, Nav } from "hero-slider";
import {Link} from 'react-router-dom'

// image import
import hero from '../assets/hero.jpg'
import baristaHero from '../assets/baristaHero.jpg'
import pastry from '../assets/pastry.jpg'
import coffeeHero from '../assets/coffeeHero.jpg'


const Header = () => {

  return (
    <header>
      <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      style={{
        backgroundColor:"#000",
        background:'Cover'
      }}
      settings={{
        slidingDuration:600,
        shouldAutoplay:false,
        shouldDisplayButtons:true,
        height:'70vh'
      }}
      >
        <NavBar />
        <Link to="/">
          <Slide
          background={{
            backgroundImage:hero
          }}>
            <OverlayContainer>
              <div className="title">
                <h1>
                  The React Cafe
                </h1>
              </div>
            </OverlayContainer>
          </Slide>
        </Link>
        <Link to="/About"> 
          <Slide
          background={{
            backgroundImage:baristaHero
          }}>
            <OverlayContainer>
              <div className="title">
                <h2>
                  About Us
                </h2>
              </div>
            </OverlayContainer>
          </Slide>
        </Link>
        <Link to="/Menu/OrderOnline">
          <Slide
          background={{
            backgroundImage:coffeeHero
          }}>
            <OverlayContainer>
              <div className="title">
                <h2>Order Online</h2>
              </div>
            </OverlayContainer>
          </Slide>
        </Link>
        <Link to="/Menu/Catering">
          <Slide
          background={{
            backgroundImage:pastry
          }}>
            <OverlayContainer>
              <div className="title">
                <h2>We Cater!</h2>
              </div>
            </OverlayContainer>
            
          </Slide>
        </Link>
        <Nav />
      </HeroSlider>
    </header>

  )

}
export default Header