import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function Box(props) {
  const texture = useLoader(TextureLoader, "/texture.jpg");
  return (
    <mesh {...props} recieveShadow={true} castShadow={true}>
      <boxGeometry args={[1.2, 1, 1]} />
      <meshPhysicalMaterial map={texture} color={"white"} />
    </mesh>
  );
}
export default Box;
