import React, { useMemo, useState } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export const Object = ({ url, position }) => {
  const [obj, set] = useState();
  useMemo(() => new OBJLoader().load(url, set), [url]);
  return obj ? (
    <primitive scale={[0.2, 0.2, 0.2]} position={position} object={obj} />
  ) : null;
};
