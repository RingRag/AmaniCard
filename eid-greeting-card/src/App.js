import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import turnBunny from './assets/Turn.png';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showRain, setShowRain] = useState(false);

  const handleCardOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowRain(true), 800);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const bunnies = Array.from({ length: 30 }, (_, i) => i);

  return (
    <div className="background">
      {/* Bunny Rain */}
      {showRain && bunnies.map((i) => (
        <motion.img
          key={i}
          src={turnBunny}
          className="bunny-rain"
          initial={{ y: -100, x: Math.random() * 100 + '%' }}
          animate={{ 
            y: '100vh',
            rotate: Math.random() * 360 
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2
          }}
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 30 + 20}px`,
            opacity: Math.random() * 0.5 + 0.3
          }}
        />
      ))}

      {/* Centered Card Container */}
      <div className="card-wrapper">
        <motion.div
          className="greeting-card"
          onClick={handleCardOpen}
          animate={{ 
            rotateY: isOpen ? 180 : 0,
            scale: isOpen ? 1 : 0.95
          }}
          transition={{ duration: 0.6 }}
        >
          {/* Front - Simple Cover */}
          <div className="card-front">
            <motion.div
              className="open-me"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              Open Me
              <div className="instruction">(Click Here)</div>
            </motion.div>
          </div>

          {/* Back - Card Content */}
          <div className="card-back">
            <h1 className="cursive-header">Eid Mubarak, Amani! 🌙</h1>
            <div className="scroll-message">
              <p>On this blessed Eid, I want you to know...</p>
              <ul className="love-list">
                <li>❤️ Your love is my greatest strength</li>
                <li>❤️ Your kindness cures my weakness</li>
                <li>❤️ Your honesty makes me feel secure</li>
                <li>❤️ Your intelligence inspires me</li>
                <li>❤️ Your grit empowers me</li>
                <li>❤️ Your humor always makes me happy</li>
                <li>❤️ Your kindness makes me feel complete</li>
                  {/* Add more list items */}
              </ul>
              <div className="signature">Forever Yours, Shaan Patel</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;