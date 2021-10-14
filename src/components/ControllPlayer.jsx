import state from "../state";


export function keyControll(player) {

        if (state.pressed) {
            
            const moveDistance = state.player.speed
            
            if ( state.keyboardEvent.keyCode === 37 )  {
                player.rotation.y += moveDistance;
            }
            if ( state.keyboardEvent.keyCode === 39 )  { 
                player.rotation.y -= moveDistance;
            }
            if ( state.keyboardEvent.keyCode === 38 ) { 
                player.translateZ(-moveDistance);
            }
            if ( state.keyboardEvent.keyCode === 40 ) { 
                player.translateZ(moveDistance);
            }
            else if (state.keyboardEvent.keyCode === 32) {
                player.position.y += moveDistance;
            }
        }
}

   
     
         

