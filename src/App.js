import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {

  const handleTouchStart = (event) => {
    const touch = event.touches[0];

    if (touch.clientX > window.innerWidth * 0.1 && touch.clientX < window.innerWidth * 0.9) {
      event.preventDefault();
  
    }
    if (touch.clientY < window.innerHeight * 0.9) {
      event.preventDefault();
      
    }
  };

  useEffect(() => {
    document.addEventListener("touchstart", handleTouchStart, { passive: false });
    return () => {
      document.removeEventListener("touchstart", handleTouchStart,{ passive: false });
    };
  }, [])


  const navigate = useNavigate();

  // useEffect(() => {
  //   const disableButton = () => {
  //     window.history.pushState(null,'',window.location.href);
  //     window.onpopstate = function(event){
  //       window.history.go(1)
  //     }
  //   }
  //   disableButton();
  //   return ()=>{
  //     window.onpopstate = null
  //   }
  // }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
