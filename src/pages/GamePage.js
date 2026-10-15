import logo from '../assets/logo.svg';
import '../styles/GamePage.css';

function GamePage() {
  return (
    <div className="Game-Page">
      <header className="Game-Page-Header">
        <img src={logo} className="Game-Page-logo" alt="logo" />
        <p>Level 1</p>
      </header>
    </div>
  );
}

export default GamePage;
