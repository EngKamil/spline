import React from 'react';
import Spline from '@splinetool/react-spline/next';
import './test.css'

// export default function 
const  Home = () => {
  return (
    <main>
      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, odit.</p>
      </div>
      <div className='spline_1'>
      <Spline scene="https://prod.spline.design/n0Diz6-DsrDabmbE/scene.splinecode"/>
      </div>
      <div className='spline_2'>
      <Spline scene="https://prod.spline.design/otaKwlS4ikmrPtyS/scene.splinecode"/>
      </div>
        
    </main>
  );
}


export default Home