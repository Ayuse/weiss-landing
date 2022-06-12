import React, { useEffect } from 'react';
import './App.scss';
import './reset.css';
import { gsap } from 'gsap';
import Loader from './components/Loader/Loader';

function App() {
  useEffect(() => {
    gsap.to('.form-control', {
      y: -100,
      duration: 5,
    });
  }, []);

  return (
    <>
      <div className='container'>
        <Loader />
      </div>
    </>
  );
}

export default App;
