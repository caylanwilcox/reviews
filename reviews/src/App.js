import React, { useState, useEffect } from 'react';
import './App.css';
import ReviewButtons from './ReviewButtons';
import EmbeddedForm from './EmbeddedForm';
import logo from './Images/logo.png';  // Ensure the logo path is correct

const App = () => {
  const [showForm, setShowForm] = useState(true);

  const handleEmailClick = () => {
    console.log('Email button clicked');
    setShowForm(true);
  };

  const handleBackClick = () => {
    console.log('Back button clicked');
    window.location.reload();
  };

  useEffect(() => {
    console.log('App component mounted.');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="YourVisionStudios logo" />
        <h1>Thank and Rank</h1>
      </header>
      <main>
        {showForm ? (
          <div>
            <button onClick={handleBackClick} style={{ margin: '10px', padding: '10px 20px' }}>Back</button>
            <EmbeddedForm />
          </div>
        ) : (
          <ReviewButtons onEmailClick={handleEmailClick} />
        )}
      </main>
    </div>
  );
};

export default App;
