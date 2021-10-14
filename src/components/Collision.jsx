import state from "../state";
import * as THREE from 'three';

export function collision(player){

    const colideObj = state.collidableObjects;
    /* console.log(player.current) */
    if ( player.isMesh ) {
        
        var originPoint = player.position.clone();
        
        const position = player.geometry.attributes.position;
        const vector = new THREE.Vector3();
        //console.log('player.geometry.attributes.position', position)
        
        for ( let i = 0, l = position.count; i < l; i ++ )
        {
            vector.fromBufferAttribute( position, i );
                        
            var localVertex = vector.clone();
            var globalVertex = localVertex.applyMatrix4( player.matrix );
            var directionVector = globalVertex.sub( player.position );
            
            var raycast = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
            let collisions = raycast.intersectObjects( colideObj );
            
            if (collisions.length > 0 && collisions[0].distance < directionVector.length()) {
                console.log("Collision Detected");
                player.health--;        
                document.getElementById('healthLabel').firstChild.nodeValue = "Health: " + player.health
                break;
            } 
        }
    }
    
}
 