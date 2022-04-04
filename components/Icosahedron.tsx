import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function Icosahedron(props) {
  const texture = useLoader(TextureLoader, "/texture.jpg");
  return (
    <mesh {...props} recieveShadow={true} castShadow={true}>
      <icosahedronGeometry />
      <meshPhysicalMaterial map={texture} color={"white"} />
    </mesh>
  );
}
export default Icosahedron;
