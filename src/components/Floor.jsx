import * as THREE from 'three';
import { usePlane } from '@react-three/cannon'

const Floor = props => {
    
    const rotation = Math.PI/2;
   /*  const [ref] = usePlane(() => ({ rotation:[rotation,0,0], mass:0, ...props })) */

    return(
        <mesh
            position={[0,-1,0]}
            rotation={[rotation,0,0]}
            /* ref={ref} */
        >
            <planeBufferGeometry args={[1000, 1000, 10, 10]} />
            <meshBasicMaterial color={0x228B22} side={THREE.DoubleSide}/>
        </mesh>
    )

}

export default Floor;