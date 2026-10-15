import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Colour Matching Game</p>
        <Link className="App-link" to="/play">
          Play Game
        </Link>
      </header>
    </div>
  );
}

export default HomePage;
