# RAYCASTER WITH REACT THREE FIBER 

![screen](https://user-images.githubusercontent.com/45975492/137399576-86de987d-3ccd-4750-9c14-55fb31a3b9b8.JPG)

Demo: https://aleksejdom.github.io/react-three-raycaster/

Keyboard keys for moving = Arrow UP, Down, Left, Right

# Colidable Objects (Obstacle.jsx)
for handling the collidable Objects
# Collision and Raycast (Collision.jsx)
Read this documentations:
    https://threejs.org/docs/#api/en/math/Vector3.fromBufferAttribute
    https://threejs.org/docs/?q=Raycast#api/en/core/Raycaster
# React Three Fiber
    https://docs.pmnd.rs/react-three-fiber/API/canvas
# Trick: Using your own camera rig
    const Camera = props => {
        const ref = useRef();
        const set = useThree((state) => state.set);
        useEffect(() => void set({ camera: ref.current }), []);

        useFrame(() => {
            ref.current.updateMatrixWorld()
        });
        return <perspectiveCamera ref={ref} {...props} />;
    };

    <Camera />

    https://gracious-keller-98ef35.netlify.app/docs/recipes/using-your-own-camera-rig    


# NPM Scripts
npm run start
