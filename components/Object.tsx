import { useLoader } from '@react-three/fiber';
import React, { useMemo, useState } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { TextureLoader } from "three";

export const Object = ({ url, position }) => {
  const texture = useLoader(TextureLoader, "/texture.jpg");
  const [obj, set] = useState();
  useMemo(() => new OBJLoader().load(url, set), [url]);
  return obj ? <primitive scale={[0.2,0.2,0.2]} map={texture} position={position} object={obj} /> : null
}