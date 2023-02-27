import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { standingClap } from "../assets/standing-clap.glb"



const Model = () => {
  const group = useRef();

  const { scene } = useGLTF(
    "https://models.readyplayer.me/63ac230fd16b67196c56a498.glb"
  );

//   const { animations } = useGLTF("standingClap");

//   const { actions, names } = useAnimations(animations, group);

//   useEffect(() => {
//     if (actions && names) {
//       console.log(names);
//     }
//   }, [actions, names]);

  return (
    <>
      <group ref={group} dispose={null}>
        <primitive object={scene} scale={2} position={[0, -2, 1]} />
      </group>
    </>
  );
};

export default Model;
