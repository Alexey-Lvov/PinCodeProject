import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MainPage from 'pages/MainPage';
import PinCodePage from 'pages/PinCodePage';
import './style.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pin-code" element={<PinCodePage />} />
      </Routes>
    </Router>
  );
}

export default App;
