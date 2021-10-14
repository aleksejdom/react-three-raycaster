import { useRef, useEffect } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import {keyControll} from './ControllPlayer';
import {collision} from './Collision';


import state from "../state";


const Camera = props => {
    const ref = useRef();
    const set = useThree((state) => state.set);
    useEffect(() => void set({ camera: ref.current }), []);

    useFrame(() => {
        ref.current.updateMatrixWorld()
    });
    return <perspectiveCamera ref={ref} {...props} />;
};


const Player = props => {
    
    const { camera, gl } = useThree()
    /* const player = useRef(); */

    window.addEventListener('keydown', onKeyDown, false);
    window.addEventListener('keyup', onKeyUp, false);

    
    function onKeyUp (event) {
        state.pressed = false;
        state.keyboardEvent = event
       /*  console.log('onKeyUp', keyboardEvent) */
    }

     function onKeyDown (event) {
        state.pressed = true;  
        state.keyboardEvent = event
        /* console.log('onKeyDown', keyboardEvent) */
    } 

    const player = useRef()

    //Mounted - Loaded first
    useEffect(() => {
        if ( player.current.isMesh ) {
            player.current.health = 100
        }
        camera.aspect = state.camera.aspect
        camera.updateProjectionMatrix();
    });
    
    //requestAnimationFrame Loop
    useFrame(() => {
        
        keyControll(player.current)
        collision(player.current)
        
    })



    return(
        
        <mesh
            castShadow
            args={[camera, gl.domElement]}
            ref={player}
            >
            <sphereBufferGeometry 
                args={[1, 36, 36]} 
                attach="geometry"     
            />
            <meshBasicMaterial color={0xFFFFFF} attach="material"/>
            <Camera 
                position={state.camera.position} 
                fov={state.camera.fov} 
                near={state.camera.near} 
                far={state.camera.far} 
                aspect={state.camera.aspect}
            />
           
        </mesh>

    )
}

export default Player;