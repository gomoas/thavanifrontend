"use client";

import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const Model = () => {
  const gltf = useGLTF("/model/leaf2.glb");
  const modelRef = useRef<THREE.Object3D>(null);
  const [scale, setScale] = useState({ x: 1, y: 1, z: 4 });

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;

      if (width > 1600) {
        setScale({ x: 1.5, y: 1.5, z: 6 });
      } else if (width < 1600 && width > 1024) {
        setScale({ x: 1, y: 1, z: 5 });
      } else {
        setScale({ x: 1, y: 1, z: 4 });
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  if (gltf.scene) {
    gltf.scene.scale.set(scale.x, scale.y, scale.z);
    gltf.scene.position.set(0, 0, 0);
  }

  return <primitive ref={modelRef} object={gltf.scene} />;
};

const Leaf = () => {
  return (
    <div className="absolute flex justify-center items-center w-full px-[16vh] h-[100vh] z-10">
      <div style={{ width: "100%", height: "400px" }}>
        <Canvas>
          <ambientLight intensity={1} />  
          <directionalLight position={[30, 10, 10]} intensity={1.5} />
          <directionalLight position={[0, 3, 50]} intensity={1.5} />
          <directionalLight position={[-10, 0, 3]} intensity={1.5} />
          <Model />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
};

export default Leaf;
