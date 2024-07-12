import React, { useState } from 'react';
import './App.css';
import ReviewButtons from './ReviewButtons';
import EmbeddedForm from './EmbeddedForm';
import logo from './Images/logo.png';  // Ensure the logo path is correct

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleEmailClick = () => {
    setShowForm(true);
  };

  const handleBackClick = () => {
    window.location.reload();
  };

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
