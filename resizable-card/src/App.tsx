import React, { useState } from 'react';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='app'>
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: 'spring' } }}
        className='card'
        onClick={() => setIsOpen(!isOpen)}
        style={{
          borderRadius: '1rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, .5)',
        }}
      >
        <motion.h2 layout='position'>Framer Motion 🚀</motion.h2>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            className='expand'
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cum
              vero iure similique nulla sunt non, corrupti id beatae expedita!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
              quo.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default App;
