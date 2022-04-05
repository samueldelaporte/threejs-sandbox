import { useLoader } from "@react-three/fiber"
import { Suspense } from "react"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function Shoe({ url, position })     {
    const gltf = useLoader(GLTFLoader, url)
    return (
      <Suspense fallback={null}>
        <primitive scale={[10, 10, 10]} position={position} object={gltf.scene} />
      </Suspense>
    )
  }