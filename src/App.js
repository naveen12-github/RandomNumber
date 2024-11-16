import React, { useState } from 'react';
import one from './one.webp'

function App() {
  const [randNum, setRandNum] = useState(0); // Random number
  const [max, setMax] = useState(100); // Max value
  const [min, setMin] = useState(0); // Min value
  const [darkMode, setDarkMode] = useState(false); // Dark/Light mode
  const [showModal, setShowModal] = useState(false); // Modal visibility

  function generateRandom() {
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandNum(randomValue);
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className={`container ${darkMode ? 'light' : 'dark'}`}>
      <header>
        <h1>Random Number Generator</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </button>
      </header>
      <section>
        <div>
          <h2>Random Number: {randNum}</h2>
          <button onClick={generateRandom}>Generate</button>
        </div>
        <div className="controls">
          <label>
            Min:
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(Number(e.target.value))}
            />
          </label>
          <label>
            Max:
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(Number(e.target.value))}
            />
          </label>
        </div>
        <button onClick={toggleModal}>About</button>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>About This Application</h2>
            <p>
              This is a random number generator app with the following features:
            </p>
            <ul>
              <li>Generate a random number between a customizable range.</li>
              <li>Switch between dark and light mode for better accessibility.</li>
              <li>Set custom min and max values for number generation.</li>
              <li>Learn more about the app in this About section.</li>
            </ul>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
