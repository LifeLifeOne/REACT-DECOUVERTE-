import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Error from './Pages/Error';
import Banner from './Components/Banner';
import ShoppingList from './Components/ShoppingList.js';
import './css/footer.css'

// npm add react-router-dom@6

function App() {
  return (
    <Router>
      <Banner />
      <ShoppingList />

      {/* <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/profile"> Profile </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <div>Footer</div> */}
      <hr />
      <div className='footer'><i class="fas fa-copyright"> </i> Copyright - Shoes qui peut!</div>
    </Router>
  );
}

export default App;
