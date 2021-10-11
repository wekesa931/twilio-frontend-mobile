import React from 'react';
import './App.css';
import VideoChat from './VideoChat';
import logo from './assest/antara-logo.png'
import { Clipboard, Heart, Home, MessageSquare } from 'react-feather';

const App = () => {
  return (
    <div className="app">
      <header>
        <img src={logo} alt="Antara Logo" />
        <p style={{
          color: "#1084ee"
        }}>Virtual Consultation</p>
      </header>
      <main>
        <VideoChat />
      </main>
      <footer>
        <div style={{
              display: "flex",
              justifyContent: "space-around",
        }}>
          <Home />
          <Heart />
          <Clipboard />
          <MessageSquare />
        </div>
      </footer>
    </div>
  );
};

export default App;
