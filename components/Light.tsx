import React from "react";

export function Light({position}) {
  return (
    <mesh position={position} >
      <pointLight castShadow intensity={0.5} />
      <meshPhongMaterial emissive={"white"}  />
    </mesh>
  );
}
