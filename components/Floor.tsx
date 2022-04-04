import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import React from "react";

function Floor(props) {
  const texture = useLoader(TextureLoader, "/texture.jpg");
  return (
    <mesh {...props} recieveShadow={true}>
      <boxBufferGeometry args={[10, 1, 10]} />
      <meshPhysicalMaterial map={texture} color="orange" />
    </mesh>
  );
}

export default Floor;
