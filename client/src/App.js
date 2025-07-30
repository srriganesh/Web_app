import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="App">
      {/* Background Particles Animation */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          particles: {
            number: { value: 60 },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: {
              value: 0.5,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.1 }
            },
            size: {
              value: 3,
              random: true
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              outMode: 'bounce'
            }
          },
          background: {
            color: '#0f2027'
          }
        }}
      />

      {/* Main App Content with animation */}
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>🌤️ Weather Forecast</h1>
        <p>Check real-time weather in your city!</p>

        {/* Add your actual content (weather form, results, etc.) here */}
      </motion.div>
    </div>
  );
}

export default App;
