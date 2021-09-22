import React, {useState} from 'react';
import Landing from './components/Landing.jsx';
import NavbarContainer from './components/NavbarContainer.jsx';
import './css/Landing.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [swap, setSwap] = useState(false);
  const handleSwap = () =>  setSwap(!swap);
  return (
    <>
    { swap ?
    <>
      <NavbarContainer/>
    </>   
            :
    <div>
      <Landing/>  
      <div className="homeButton">
          <a className="goingHome" onClick={handleSwap} >Lets get started!</a>
      </div>
    </div>
  }  
    </>

  );
}

export default App;

//https://css-tricks.com/how-to-map-mouse-position-in-css/