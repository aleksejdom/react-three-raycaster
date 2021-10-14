import './App.css';
import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'

import { Canvas, useFrame, useThree  } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'

import Player from './components/Player';
import Floor from './components/Floor';
import Obstacle from './components/Obstacle';

function App() {

  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <div id="healthLabel">Health: 100</div>
       <Canvas 
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false
        }}
  
        shadowMap 
        style={{background: '#000'}}
      > 
          <ambientLight intensity={0.1} />         
          <Floor />
          <Obstacle position={[-2,0,-5]}/>
          <Player />
         
      </Canvas>
  </div>
  );
}

export default App;
