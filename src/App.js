import React from 'react'
import Navigation from './customer/components/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div>
      <Navigation />
      
      <div>
        <HomePage />
      </div>
    </div>
      
  );
}

export default App;
