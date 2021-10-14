import * as THREE from 'three'

const state = {
    collidableObjects: [],
    keyboardEvent: null,
    pressed : false,
    camera: {
        position: new THREE.Vector3(0, 0, 2), 
        fov: 100, 
        near: 0.1, 
        far: 2000,
        aspect : window.innerWidth / window.innerHeight 
    },
    player: {
        speed: 0.025
    }
}

export default state;