import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  return (
    <div>title</div>
  )
}
const BallCanvas = ({ icon }) => {
  // const [decal] = useTexture([props.imgUrl]);
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
  
     
    </Canvas>
  );
};

export default BallCanvas;