// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Destination from './Destination';
// import myLogo from './assets/zebra.png';

function App() {
  return (
    <Router>
      {/* <img src={myLogo} className="App-logo" alt="logo" /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </Router>
  );
}

export default App;
