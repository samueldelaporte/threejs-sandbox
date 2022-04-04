import {Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import Box from "../components/Box";
import Draggable from "../components/Draggable";
import Floor from "../components/Floor";
import LightBulb from "../components/LightBulb";
import OrbitControls from "../components/OrbitControls";
import css from "../styles/Home.module.css";
import Icosahedron from "../components/Icosahedron";
import { Object } from "../components/Object";

export default function Home() {
  return (
    <div className={css.scene}>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"orange"} intensity={0.1} />
        <LightBulb position={[0, 2, 1]} />
        <Draggable>
          <Suspense fallback={null}>
            <Box rotateX={5} rotateY={2} />
          </Suspense>
        </Draggable>
        <Draggable>
          <Suspense fallback={null}>
            <Icosahedron position={[1,1,2]} />
          </Suspense>
        </Draggable>
          <Suspense fallback={null}>
            <Object position={[-1,0,1]} url="/shell.obj" />
          </Suspense>
        <OrbitControls />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
