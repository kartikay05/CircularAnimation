import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Scene from "./Scene";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

const App = () => {
  return (
    <>
      <div className="w-full text-white bg-black py-12">
        <h1 className="text-center text-4xl font-semibold">Welcome to My Portfolio</h1>
      </div>
      <Canvas camera={{ fov: 45 }}>
        <OrbitControls />
        <ambientLight />
        <Scene />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={7.0} // The bloom intensity.
            luminanceThreshold={0.7} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.3} // smoothness of the luminance threshold. Range is [0, 1]
          />
          <ToneMapping adaptive />
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default App;
