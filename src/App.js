// Components import 
import HomePage from './routes/HomePage.js'
import Header from './components/Header.js'
import Menu from './routes/Menu.js'
import AboutPage from './routes/About.js'
import Footer from './components/Footer.js'

// package import
import {BrowserRouter as Router, Route} from 'react-router-dom'

// style import
import './style/App.css'
function App() {
  return (
    <Router>
          <Header />
          <main>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route exact path="/About">
              <AboutPage />
            </Route>
            <Route exact path="/Menu">
              <Menu />
            </Route>
          </main>
          <footer>
            <Footer />
          </footer>
    </Router>
  );
}

export default App;
