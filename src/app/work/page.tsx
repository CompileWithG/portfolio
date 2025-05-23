"use client"; // This is crucial for R3F components

import styles from './work.module.css'
import Navbar from '../components/Navbar';
import { Canvas } from '@react-three/fiber';

export default function Work() { // Changed to PascalCase
  return (
    <>
      <div id={styles.page1}>
        <Navbar/>
        <Canvas>
          
        </Canvas>
      </div>
      <div id={styles.page2}></div>
      <div id={styles.page3}></div>
    </>
  );
}