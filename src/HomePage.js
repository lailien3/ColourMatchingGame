import logo from './logo.svg';
import './HomePage.css';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Colour Matching Game
        </p>
        <a
          className="App-link"
          href="#"
        >
          Play Game
        </a>
      </header>
    </div>
  );
}

export default HomePage;
