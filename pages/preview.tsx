import {Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import OrbitControls from "../components/OrbitControls";
import css from "../styles/Home.module.css";
import { Object } from "../components/Object";
import { Light } from "../components/Light";
import { Mirror } from "../components/Mirror";

export default function Home() {
  return (
    <div className={css.scene}>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{
          position: [-4, 4, 4],
        }}
      >
        <Light position={[2, 2, 2]} />
        <Light position={[-2, -2, -2]} />
        <Light position={[-2, 2, 2]} />
        <Suspense fallback={null}>
          <Object position={[0,0,0]} url="/shell.obj" />
        </Suspense>
        <OrbitControls />
        <Mirror position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
