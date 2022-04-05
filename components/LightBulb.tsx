import React from "react";

export function LightBulb(props) {
  return (
    <mesh {...props} >
      <pointLight castShadow intensity={0.2} />
      <sphereBufferGeometry args={[0.2, 30, 10]} />
      <meshPhongMaterial emissive={"white"}  />
    </mesh>
  );
}
