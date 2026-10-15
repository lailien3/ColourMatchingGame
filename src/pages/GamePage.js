import logo from '../assets/logo.svg';
import '../styles/GamePage.css';

function GamePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Level 1</p>
      </header>
    </div>
  );
}

export default GamePage;
