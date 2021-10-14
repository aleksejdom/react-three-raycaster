
import { useBox } from '@react-three/cannon'
import { useRef, useEffect } from 'react'
import state from "../state";

const Obstacle = props => {

    /* const [mesh] = useBox(() => ({ mass: 0, position: [0, 0, 0], ...props })) */

    const mesh = useRef()

    useEffect(() => {
        const {current} = mesh
        state.collidableObjects.push(
            current
        )
    }, [])

    return(
        <mesh 
            position={props.position}
            ref={mesh}
        >
            <boxBufferGeometry attach="geometry" args={[15, 5]} />
            <meshBasicMaterial attach="material" color={0x9E1A1A} />
        </mesh>
    )
}

export default Obstacle;