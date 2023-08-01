import React from 'react';
import './Home.css';
import banner from './Image/Nandini.png';

const Home = () => {
  return (
    <>
    <div className="Homediscription">
    <img className='banner' src={banner}  height={500}/>
   </div>
 </>
  )
}

export default Home