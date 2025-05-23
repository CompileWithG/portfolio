import React,{useRef} from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from "three";
import { group } from 'console';
export default function Scene() {
    let tex= useTexture("./img3.png")
    let cyl=useRef(null);
    useFrame((state,delta)=>{
        cyl.current.rotation.y +=delta;
    })
   tex.needsUpdate=true;
  return (
    <group rotation={[0,1.4,0.5]}>
    <mesh ref={cyl }>
                <cylinderGeometry args={[0.7, 0.7, 0.7, 60, 60, true ]}/>
                <meshStandardMaterial map={tex}  transparent side={THREE.DoubleSide}/>
              </mesh>
    </group>
  );
}
